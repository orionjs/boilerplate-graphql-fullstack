import getEnv from './getEnv'
// include this file if your app is deployed with Waves static websites

let pendingVersionUpdate = null

const updateNow = function() {
  console.log('updating to new version', pendingVersionUpdate)
  saveNewVersion(pendingVersionUpdate)
  window.location.reload(true)
}

setInterval(() => {
  if (!pendingVersionUpdate) return
  try {
    if (!document.hasFocus()) {
      console.log('waiting focus to refresh')
      return
    }
  } catch (error) {}
  updateNow()
}, 2000)

const checkVersion = async function(isFirst) {
  const path = '/waves-current-version.json'
  try {
    const response = await fetch(path)
    const {version} = await response.json()
    saveVersion(version, isFirst)
  } catch (e) {}
}

const saveNewVersion = function(newVersion) {
  localStorage.setItem('clientVersion', newVersion)
}

const loadNewVersion = function(newVersion, isFirst) {
  pendingVersionUpdate = newVersion
  if (isFirst) {
    updateNow()
  }
}

const saveVersion = function(newVersion, isFirst) {
  const oldVersion = localStorage.getItem('clientVersion')
  if (!Number(newVersion)) return
  if (!oldVersion) {
    console.log('no old version saved')
    saveNewVersion(newVersion)
  } else if (Number(oldVersion) !== Number(newVersion)) {
    console.log(`upgrading from version ${oldVersion} to ${newVersion}`)
    loadNewVersion(newVersion, isFirst)
  }
}

if (getEnv() === 'prod') {
  checkVersion(true)
  setInterval(checkVersion, 30000)
}
