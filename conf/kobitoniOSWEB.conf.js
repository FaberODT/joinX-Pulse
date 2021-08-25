const {config} = require('./kobitonWDIO.conf')

config.specs = [
  './test/specs/**/all.e2e.js'
]

config.capabilities = [{
  sessionName:        'Android web test',
  sessionDescription: 'This is an example for Android web',
  deviceOrientation:  'portrait',
  captureScreenshots: true,
  browserName:        'safari',
  deviceGroup:        'KOBITON',
  deviceName:         'iPhone XS Max',
  platformName:       'iOS',
  platformVersion:    '13.5.1'
}]

exports.config = config