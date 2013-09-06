 document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    
    //
    function onDeviceReady() {
      alert(device.name);

bluetoothSerial.connect('00:15:0E:E1:D3:53', connectSuccess, connectFailure);
function connectSuccess() {
	alert('OK');

	// body...
}

function connectFailure() {
	alert('no');
}


    }
