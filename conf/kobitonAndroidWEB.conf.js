const {config} = require('./kobitonWDIO.conf')

config.specs = [
  './test/specs/**/additionalDocument.e2e.js'
]

config.capabilities = [{
  sessionName:        'Android web test',
  sessionDescription: 'This is an example for Android web',
  deviceOrientation:  'portrait',
  captureScreenshots: true,
  browserName:        'chrome',
  deviceGroup:        'KOBITON',
  deviceName:         'Galaxy S10+',
  platformName:       'Android',
  platformVersion:    '10'
}]

exports.config = config