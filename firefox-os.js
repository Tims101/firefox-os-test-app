$(function() {
	if (!navigator.mozApps) {
		// Not a Firefox OS
		return;
	}

	// get a reference to the button and call install() on click if the app isn't already installed. If it is, hide the button.
	var button = document.getElementById('install-btn');
	var manifest_url = 'http://tims101.github.io/firefox-os-test-app/manifest.webapp';

	function install(ev) {
	  ev.preventDefault();
	  // define the manifest URL
	  // install the app
	  var installLocFind = navigator.mozApps.install(manifest_url);
	  installLocFind.onsuccess = function(data) {
	    // App is installed, do something
	    $(button).hide();
	  };
	  installLocFind.onerror = function() {
	    // App wasn't installed, info is in
	    // installapp.error.name
	    alert(installLocFind.error.name);
	  };
	};

	var installCheck = navigator.mozApps.checkInstalled(manifest_url);

	installCheck.onsuccess = function() {
	  if(installCheck.result) {
	  	// Installed
	  } else {
	  	button.style.display = "block";
	    button.addEventListener('click', install, false);
	  };
	};
})

