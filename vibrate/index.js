vnjs.on('vibrate', function(param){
		if ("vibrate" in navigator) {
			navigator.vibrate(param);
			//navigator.vibrate([1000, 500, 1000]);
		}	
});
