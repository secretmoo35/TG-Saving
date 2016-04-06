How to :)  <<using the command prompt in your project>>
1. Run App : ionic serve and Other...


________________________________________________

Run for Device :)  <<using the command prompt in your project>>
1. ionic platform add android && ionic platform add ios (select for device)
2. ionic build
3. ionic run --device

________________________________________________

Plugins Install :)
1. bower install ngCordova <<using the command prompt in your project>>
2. add 		<script src="lib/ngCordova/dist/ng-cordova.js"></script>
       		<script src="cordova.js"></script>
   index.html

3. add 'ngCordova' in your app.js		
			angular.module('myApp', ['ngCordova'])  

________________________________________________

Plugins using :) <<using the command prompt in your project>>

1. Geolocation
   Install : cordova plugin add cordova-plugin-geolocation