cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/ios/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-firebase-realtime-database.FirebaseDatabasePlugin",
    "file": "plugins/cordova-plugin-firebase-realtime-database/www/firebase.js",
    "pluginId": "cordova-plugin-firebase-realtime-database",
    "clobbers": [
      "FirebaseDatabasePlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "ionic-plugin-keyboard": "2.2.1",
  "cordova-plugin-device": "1.1.4",
  "cordova-plugin-firebase-realtime-database": "0.0.2"
};
// BOTTOM OF METADATA
});