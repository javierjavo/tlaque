cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
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
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.IonicWebView",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "Ionic.WebView"
    ]
  },
  {
    "id": "cordova-plugin-firebase-realtime-database.FirebaseDatabasePlugin",
    "file": "plugins/cordova-plugin-firebase-realtime-database/www/firebase.js",
    "pluginId": "cordova-plugin-firebase-realtime-database",
    "clobbers": [
      "FirebaseDatabasePlugin"
    ]
  },
  {
    "id": "cordova-plugin-googlemaps.Promise",
    "file": "plugins/cordova-plugin-googlemaps/www/Promise.js",
    "pluginId": "cordova-plugin-googlemaps"
  },
  {
    "id": "cordova-plugin-googlemaps.BaseClass",
    "file": "plugins/cordova-plugin-googlemaps/www/BaseClass.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.BaseArrayClass",
    "file": "plugins/cordova-plugin-googlemaps/www/BaseArrayClass.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.LatLng",
    "file": "plugins/cordova-plugin-googlemaps/www/LatLng.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.LatLngBounds",
    "file": "plugins/cordova-plugin-googlemaps/www/LatLngBounds.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.VisibleRegion",
    "file": "plugins/cordova-plugin-googlemaps/www/VisibleRegion.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Location",
    "file": "plugins/cordova-plugin-googlemaps/www/Location.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.CameraPosition",
    "file": "plugins/cordova-plugin-googlemaps/www/CameraPosition.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Polyline",
    "file": "plugins/cordova-plugin-googlemaps/www/Polyline.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Polygon",
    "file": "plugins/cordova-plugin-googlemaps/www/Polygon.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Marker",
    "file": "plugins/cordova-plugin-googlemaps/www/Marker.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.HtmlInfoWindow",
    "file": "plugins/cordova-plugin-googlemaps/www/HtmlInfoWindow.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Circle",
    "file": "plugins/cordova-plugin-googlemaps/www/Circle.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.TileOverlay",
    "file": "plugins/cordova-plugin-googlemaps/www/TileOverlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.GroundOverlay",
    "file": "plugins/cordova-plugin-googlemaps/www/GroundOverlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Common",
    "file": "plugins/cordova-plugin-googlemaps/www/Common.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.encoding",
    "file": "plugins/cordova-plugin-googlemaps/www/encoding.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.spherical",
    "file": "plugins/cordova-plugin-googlemaps/www/spherical.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.poly",
    "file": "plugins/cordova-plugin-googlemaps/www/poly.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Geocoder",
    "file": "plugins/cordova-plugin-googlemaps/www/Geocoder.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.LocationService",
    "file": "plugins/cordova-plugin-googlemaps/www/LocationService.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Map",
    "file": "plugins/cordova-plugin-googlemaps/www/Map.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.event",
    "file": "plugins/cordova-plugin-googlemaps/www/event.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.MapTypeId",
    "file": "plugins/cordova-plugin-googlemaps/www/MapTypeId.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.KmlOverlay",
    "file": "plugins/cordova-plugin-googlemaps/www/KmlOverlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.KmlLoader",
    "file": "plugins/cordova-plugin-googlemaps/www/KmlLoader.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Environment",
    "file": "plugins/cordova-plugin-googlemaps/www/Environment.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.MarkerCluster",
    "file": "plugins/cordova-plugin-googlemaps/www/MarkerCluster.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Cluster",
    "file": "plugins/cordova-plugin-googlemaps/www/Cluster.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.geomodel",
    "file": "plugins/cordova-plugin-googlemaps/www/geomodel.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.commandQueueExecutor",
    "file": "plugins/cordova-plugin-googlemaps/www/commandQueueExecutor.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.pluginInit",
    "file": "plugins/cordova-plugin-googlemaps/www/pluginInit.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.StreetViewPanorama",
    "file": "plugins/cordova-plugin-googlemaps/www/StreetViewPanorama.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Overlay",
    "file": "plugins/cordova-plugin-googlemaps/www/Overlay.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.Thread",
    "file": "plugins/cordova-plugin-googlemaps/www/Thread.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.InlineWorker",
    "file": "plugins/cordova-plugin-googlemaps/www/InlineWorker.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-plugin-googlemaps.googlemaps-cdv-plugin",
    "file": "plugins/cordova-plugin-googlemaps/www/plugin-loader-for-android_ios.js",
    "pluginId": "cordova-plugin-googlemaps",
    "clobbers": [
      "plugin.google.maps"
    ]
  },
  {
    "id": "cordova-plugin-googlemaps.js_CordovaGoogleMaps",
    "file": "plugins/cordova-plugin-googlemaps/www/js_CordovaGoogleMaps-for-android_ios.js",
    "pluginId": "cordova-plugin-googlemaps",
    "runs": true
  },
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "ionic-plugin-keyboard": "2.2.1",
  "cordova-plugin-whitelist": "1.3.1",
  "cordova-plugin-device": "1.1.4",
  "cordova-plugin-splashscreen": "4.0.3",
  "cordova-plugin-ionic-webview": "4.0.1",
  "cordova-plugin-firebase-realtime-database": "0.0.2",
  "cordova-plugin-googlemaps": "2.6.2",
  "cordova-sqlite-storage": "3.2.0"
};
// BOTTOM OF METADATA
});