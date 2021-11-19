const {config} = require('./kobitonWDIO.conf')

config.specs = [
  './test/specs/**/autoSave.e2e.js'
]

config.capabilities = [{
  sessionName:        'Android web test',
  sessionDescription: 'This is an example for Android web',
  deviceOrientation:  'portrait',
  captureScreenshots: true,
  browserName:        'safari',
  deviceGroup:        'KOBITON',
  deviceName:         'iPhone XR',
  platformName:       'iOS',
  platformVersion:    '14.3'
}]

exports.config = config