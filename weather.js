$(function() {
	var $view = $('.js-main');

	var template = '<p class="weather">Current weather in London:</p><span class="celcium">{0} &deg;C</span>';

	function callback(data) {
		$view.html(
			template.replace('{0}', data.list[0].main.temp)
		);
		$view.fadeIn();
	};

	function load() {
		$view.hide();

		var xhr = new XMLHttpRequest({mozSystem: true});
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {
					if(callback)
						callback(JSON.parse(xhr.responseText));
				} else {
					if(xhr.status != 0) alert("error: " + xhr.status + " " + xhr.statusText);
					if(callback) callback(null);
				}
			}
		}
		xhr.open('GET', 'http://api.openweathermap.org/data/2.5/find?q=London,gb&units=metric', true);
		xhr.send();
	};

	load();
	$('.js-reload').click(load);

	// $.ajax({
	// 	method: 'GET',
	// 	url: 'http://api.openweathermap.org/data/2.5/find?q=London,ru&units=metric',
	// 	cache: false,
 //        xhrFields: {
 //        	mozSystem: true
 //        },
	// }).done(function(data) {
	// 	$view.html(
	// 		template.replace('{0}', data.list[0].main.temp)
	// 	);
	// 	$view.fadeIn();
	// }).fail(function(data) {
	// 	$view.text('Sorry, error :(');
	// 	$view.fadeIn();
	// });
});
