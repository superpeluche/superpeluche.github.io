$(document).ready(function(){
	// Google Maps

	// Main Variables
	var latitude = 48.857295,
			longitude = 2.359603,
			mapZoom = 16, 
			myLatLng = new google.maps.LatLng(latitude, longitude);


	// Main Style Variables
	var mainColor = '#F0E6D0',
			saturationValue = -20,
			brightnessValue = 5;

	// Main styling options

	var style = [

		{
				stylers: [
					{hue: mainColor}
				]

		}, 

		// Remove the labels from the map

		{
			featureType: 'poi',
			elementType: 'labels',
			stylers: [
				{visibility: 'off'}
			]

		},

		// Don't Show Local Road Labels on the map

		{
			featureType: 'road.local',
			elementType: 'labels.icon',
			stylers: [
				{visibility: 'off'}
			]

		},

		// Don't show road labels on the map


		{
			featureType: 'road',
			elementType: 'geometry.stroke',
			stylers: [
				{visibility: 'off'}
			]

		},

		// STYLE THE DIFFERENT ELEMENTS ON THE MAP

		{
			featureType: 'transit',
			elementType: 'geometry.fill',
			stylers: [
				{hue: mainColor},
				{visibility: 'on'},
				{lightness: brightnessValue},
				{saturation: saturationValue }
			]
		},

		// SUBWAY STATIONS

		{
			featureType: 'transit.station',
			elementType: 'geometry.fill',
			stylers: [
				{hue: mainColor},
				{visibility: 'on'},
				{lightness: brightnessValue},
				{saturation: saturationValue}
			]
		}

	];

	// Main Options

	var mapOptions = {

		center: myLatLng,
		zoom: mapZoom,
		panControl: false,
		zoomControl: false,
		mapTypeControl: false,
		streetViewControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		draggable: false,
		styles: style

	};

	// Create the map

var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	// Add the marker

var marker = new google.maps.Marker({

	position: myLatLng,
	map: map,
	animation: google.maps.Animation.BOUNCE,
	title: 'Welcome to our restaurant'


	});
	
	$('.menu-toggle').on('click', function(){

		$('.mobile-nav').toggleClass('visible');

	});


});
