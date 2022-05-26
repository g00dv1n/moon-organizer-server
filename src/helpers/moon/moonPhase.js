import SunCalc from 'suncalc'
import lune from 'lune'
import moment from 'moment'
import path from 'path'
import fs from 'fs/promises'
import config from 'config'

const ICONS_PATH = path
  .resolve(process.env.PWD, 'files', 'moon-phases')

const DESCRIPTIONS = require(
  path.resolve(process.env.PWD, 'files', 'moon-phases', 'descriptions.json'))

// constants for moon phase string calculation
const MOON_PHASES = { NEW: 0, FIRST: 0.25, FULL: 0.5, LAST: 0.75, NEXTNEW: 1 }

// pytnon function bisect_right for moon phase string calculation
// from https://github.com/aureooms/js-bisect/blob/master/src/bisect_right.js
function bisectRight (a, x, lo = 0, hi = a.length) {
  if (lo < 0) throw new Error('lo must be non-negative')

  while (lo < hi) {
    const mid = (lo + hi) / 2 | 0

    if (x < a[mid]) hi = mid

    else lo = mid + 1
  }

  return lo
}

// normalize values to range 0...1
function normalize (v) {
  v = v - Math.floor(v)
  if (v < 0) {
    v = v + 1
  }
  return v
}

export function getPhaseString (date, useTime = true) {
  let currentDate

  if (useTime) {
    currentDate = date // use actual date and time
  } else {
    // use end of the day
    // At the end of the day, we can always determine if there was a major phase today.
    currentDate = moment(date).endOf('d').toDate()
  }

  let PRECISION = 0

  const { phase } = lune.phase(currentDate)

  const majorPhases = lune.phase_hunt(currentDate)

  const isMajorPhaseToday = Object.values(majorPhases).some(md => {
    return moment(date).isSame(moment(md), 'day')
  })

  if (isMajorPhaseToday) {
    PRECISION = 0.05 // avg 30h
  }

  const phaseNames = [
    {val: MOON_PHASES.NEW + PRECISION, name: 'New Moon'},

    {val: MOON_PHASES.FIRST, name: 'Waxing Crescent'},

    {val: MOON_PHASES.FIRST + PRECISION, name: 'First Quarter'},

    {val: MOON_PHASES.FULL, name: 'Waxing Gibbous'},

    {val: MOON_PHASES.FULL + PRECISION, name: 'Full Moon'},

    {val: MOON_PHASES.LAST, name: 'Waning Gibbous'},

    {val: MOON_PHASES.LAST + PRECISION, name: 'Last Quarter'},

    {val: MOON_PHASES.NEXTNEW, name: 'Waning Crescent'},

    {val: MOON_PHASES.NEXTNEW + PRECISION, name: 'New Moon'}
  ]
  const values = phaseNames.map(p => p.val)

  const i = bisectRight(values, phase)

  return phaseNames[i].name
}

export function getPhaseAndZodiacInfo (date) {
  let age, // Moon's age
    longitude, // Moon's ecliptic longitude
    phase, // Moon's phase
    zodiac // Moon's zodiac sign
  let yy, mm, k1, k2, k3, jd
  let ip, dp, rp
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  yy = year - Math.floor((12 - month) / 10)
  mm = month + 9
  if (mm >= 12) {
    mm = mm - 12
  }
  k1 = Math.floor(365.25 * (yy + 4712))
  k2 = Math.floor(30.6 * mm + 0.5)
  k3 = Math.floor(Math.floor((yy / 100) + 49) * 0.75) - 38
  jd = k1 + k2 + day + 59 // for dates in Julian calendar
  if (jd > 2299160) {
    jd = jd - k3 // for Gregorian calendar
  }

  const luneInfo = lune.phase(date)

  ip = luneInfo.phase
  age = luneInfo.age

  phase = getPhaseString(date)

  ip = ip * 2 * Math.PI // Convert phase to radians
  // Calculate moon's distance
  dp = 2 * Math.PI * normalize((jd - 2451562.2) / 27.55454988)

  // Calculate moon's ecliptic longitude
  rp = normalize((jd - 2451555.8) / 27.321582241)
  longitude = 360 * rp + 6.3 * Math.sin(dp) + 1.3 * Math.sin(2 * ip - dp) + 0.7 * Math.sin(2 * ip)

  if (longitude < 30) {
    zodiac = 'Aries'
  } else if (longitude < 60) {
    zodiac = 'Taurus'
  } else if (longitude < 90) {
    zodiac = 'Gemini'
  } else if (longitude < 120) {
    zodiac = 'Cancer'
  } else if (longitude < 150) {
    zodiac = 'Leo'
  } else if (longitude < 180) {
    zodiac = 'Virgo'
  } else if (longitude < 210) {
    zodiac = 'Libra'
  } else if (longitude < 240) {
    zodiac = 'Scorpio'
  } else if (longitude < 270) {
    zodiac = 'Sagittarius'
  } else if (longitude < 300) {
    zodiac = 'Capricorn'
  } else if (longitude < 330) {
    zodiac = 'Aquarius'
  } else if (longitude < 360) {
    zodiac = 'Pisces'
  } else {
    zodiac = 'Aries'
  }

  return {
    age,
    phase,
    zodiac
  }
}

export function getHemisphere (latitude) {
  return latitude > 0 ? 'northern' : 'southern'
}

export function getMoonTimeInfo (date, latitude, longitude) {
  return SunCalc.getMoonTimes(date, latitude, longitude)
}

export async function getFullMoonWidgetInfo (date, latitude, longitude) {
  let info = getPhaseAndZodiacInfo(date)
  const hemisphere = getHemisphere(latitude)
  const phaseCode = info.phase.toLowerCase().split(' ').join('_')
  const riseAndSetFormatStr = 'MM/DD/YYYY, h:mm A'
  const dateFmt = moment(date).format('ddd, MMMM Do YYYY')
  const phaseIcoPath = path
    .join(ICONS_PATH, phaseCode + `_${hemisphere}.png`)
  const {link, linkLabel} = config.get('moonPhaseWidget')

  let {rise, set} = getMoonTimeInfo(date, latitude, longitude)

  rise = moment(rise).format(riseAndSetFormatStr)
  set = moment(set).format(riseAndSetFormatStr)

  const fileData = await fs.readFile(phaseIcoPath, { encoding: 'base64' })
  const phaseIco = 'data:image/png;base64,' + fileData

  const phaseDesc = DESCRIPTIONS[phaseCode] || ''

  return Object.assign(info, {rise, set, phaseIco, dateFmt, link, linkLabel, phaseDesc, hemisphere})
}
