$(function() {
	$.ajaxSetup( {
	  xhr: function() {
	    return new window.XMLHttpRequest( {
	      mozSystem: true
	    } );
	  }
	});
	
	var $view = $('.js-main');

	var template = '<p class="weather">Current weather in London:</p><span class="celcium">{0} &deg;C</span>';

	function load() {
		$view.hide();
		$.ajax({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/find?q=London,gb&units=metric',
			cache: false,
		}).done(function(data) {
			$view.html(
				template.replace('{0}', data.list[0].main.temp)
			);
			$view.fadeIn();
		}).fail(function(data) {
			$view.text('Sorry, error :(');
			$view.fadeIn();
		});
	};

	load();
	$('.js-reload').click(load);
});
