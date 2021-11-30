const {config} = require('./kobitonWDIO.conf')

config.specs = [
  './test/specs/**/additionalDocument.e2e.js'
]

config.capabilities = [{
  sessionName:        'Android web test',
  sessionDescription: 'This is an example for Android web',
  deviceOrientation:  'portrait',
  captureScreenshots: true,
  browserName:        'safari',
  deviceGroup:        'KOBITON',
  deviceName:         'iPhone 7 Plus',
  platformName:       'iOS',
  platformVersion:    '14.7.1'
}]

exports.config = config