import SunCalc from 'suncalc'
import lune from 'lune'
import moment from 'moment'
import path from 'path'
import fs from 'fs'
import config from 'config'

const ICONS_PATH = path
  .resolve(process.env.PWD, 'files', 'moon-phases')

// normalize values to range 0...1
function normalize (v) {
  v = v - Math.floor(v)
  if (v < 0) {
    v = v + 1
  }
  return v
}
export function getPhaseAndZodiacInfo (date) {
  let age, // Moon's age
    longitude, // Moon's ecliptic longitude
    phase, // Moon's phase
    trajectory, // Moon's trajectory
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

  if (age < 1.84566) {
    phase = 'New Moon'
    trajectory = 'ascendent'
  } else if (age < 5.53699) {
    phase = 'Waxing Crescent'
    trajectory = 'ascendent'
  } else if (age < 9.22831) {
    phase = 'First Quarter'
    trajectory = 'ascendent'
  } else if (age < 12.91963) {
    phase = 'Waxing Gibbous'
    trajectory = 'ascendent'
  } else if (age < 16.61096) {
    phase = 'Full Moon'
    trajectory = 'descendent'
  } else if (age < 20.30228) {
    phase = 'Waning Gibbous'
    trajectory = 'descendent'
  } else if (age < 23.99361) {
    phase = 'Last Quarter'
    trajectory = 'descendent'
  } else if (age < 27.68493) {
    phase = 'Waning Crescent'
    trajectory = 'descendent'
  } else {
    phase = 'New Moon'
    trajectory = 'ascendent'
  }
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
    trajectory,
    zodiac
  }
}

export function getMoonTimeInfo (date, latitude, longitude) {
  return SunCalc.getMoonTimes(date, latitude, longitude)
}

export function getFullMoonWidgetInfo (date, latitude, longitude) {
  let info = getPhaseAndZodiacInfo(date)
  const riseAndSetFormatStr = 'MM/DD/YYYY, h:mm A'
  const dateFmt = moment(date).format('ddd, MMMM Do YYYY')
  const phaseIcoPath = path
    .join(ICONS_PATH, info.phase.toLowerCase().split(' ').join('_') + '.png')
  const {link, linkLabel} = config.get('moonPhaseWidget')

  let {rise, set} = getMoonTimeInfo(date, latitude, longitude)

  rise = moment(rise).format(riseAndSetFormatStr)
  set = moment(set).format(riseAndSetFormatStr)

  const phaseIco = 'data:image/png;base64,' +
    fs.readFileSync(phaseIcoPath, { encoding: 'base64' })

  return Object.assign(info, {rise, set, phaseIco, dateFmt, link, linkLabel})
}
