myApp.controller('mapCtrl', ['$cordovaGeolocation',

    function($scope, $ionicModal, $timeout, $location, $http, $state, $stateParams, $cordovaGeolocation) {

        var myLocation = new google.maps.LatLng(13.711586, 100.618260);


        var map = new google.maps.Map(document.getElementById('map'), {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: myLocation,
            zoom: 10,
            streetViewControl: true,
            mapTypeControl: false,
            zoomControl: true
        });

        var locations = [
            ['สำนักงานลาดพร้าว <br />59/39-40 ซอยทรงสะอาด ถนนวิภาวดีรังสิต จอมพล จตุจักร กรุงเทพฯ 10900<br />โทรศัพท์ : 0-2545-2040-2<br />โทรสาร : 0-2513-6160', 13.827356, 100.558226, 1],
            ['สำนักงานดอนเมือง <br />89/48 หมู่ 9 ถนนวิภาวดีรังสิต ดอนเมือง กรุงเทพฯ 10210 <br />โทรศัพท์ : 0-2535-3184-6<br />โทรสาร : 0-2996-9866', 13.934927, 100.610963, 2],
            ['อาคารจอดรถศูนย์ปฏิบัติการ (OPC) สนามบินสุวรรณภูมิ  <br />333 หมู่ 1 ต.หนองปรือ อ.บางพลี จ.สมุทรปราการ 10540 <br />โทรศัพท์ : 0-2137-0100<br />โทรสาร : 0-2137-0110, 0-2137-0129', 13.711586, 100.758636, 3]
        ];



        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        var image = "img/ionic.png";
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                map: map,
                icon: null,
                position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4])
            });

            google.maps.event.addListener(marker, 'mousedown', (function(marker, i) {

                    return function() {

                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    }
                })
                (marker, i));
        }

    }
])
