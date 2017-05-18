import path from 'path'
import config from 'config'
import fs from 'fs'

const avatarsDir = config.get('avatarsDir')
const AVATARS_ROOT = path.resolve(process.env.PWD, avatarsDir)

if(!fs.existsSync(AVATARS_ROOT)) {
    throw new Error(`Dir ${AVATARS_ROOT} doesn't exists!`)
}

const getAvatartPath = (name) => path.resolve(AVATARS_ROOT, name)

const storeAvatars = (fileReadStream, outName) => {
    if(!fileReadStream || !outName) {
        throw new Error('Cannot get fileReadStream/outName in storeAvatars')
    }
    const outPath = getAvatartPath(outName)
    const out = fs.createWriteStream(outPath)
    fileReadStream.pipe(out)
    return outPath
}


export {
    AVATARS_ROOT,
    storeAvatars,
    getAvatartPath
}

 