import url from './url'
import getEnv from './getEnv'
// include this file if your app is deployed with Waves static websites

let pendingVersionUpdate = null

setInterval(() => {
  if (!pendingVersionUpdate) return
  try {
    if (!document.hasFocus()) {
      console.log('waiting focus to refresh')
      return
    }
  } catch (error) {}
  console.log('updating to new version', pendingVersionUpdate)
  saveNewVersion(pendingVersionUpdate)
  window.location.reload(true)
}, 2000)

const checkVersion = async function() {
  const path = url + '/waves-current-version.json'
  try {
    const response = await fetch(path)
    const {version} = await response.json()
    saveVersion(version)
  } catch (e) {}
}

const saveNewVersion = function(newVersion) {
  localStorage.setItem('clientVersion', newVersion)
}

const loadNewVersion = function(newVersion) {
  pendingVersionUpdate = newVersion
}

const saveVersion = function(newVersion) {
  const oldVersion = localStorage.getItem('clientVersion')
  if (!Number(newVersion)) return
  if (!oldVersion) {
    console.log('no old version saved')
    saveNewVersion(newVersion)
  } else if (Number(oldVersion) !== Number(newVersion)) {
    console.log(`upgrading from version ${oldVersion} to ${newVersion}`)
    loadNewVersion(newVersion)
  }
}

if (getEnv() === 'prod') {
  checkVersion()
  setInterval(checkVersion, 30000)
}
