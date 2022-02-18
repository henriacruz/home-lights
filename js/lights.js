function changeLightState(cmd){
    var cmd_ip = "192.168.15.87";
    var cmd_port = "4999";
    var message = "http://" + cmd_ip + "/cgi-bin/send.sh?port=" + cmd_port + "&cmd='" + cmd + "'";

    //var noCorsHeaders = new Headers();
	var noCorsCall = {  method: 'GET',
                        headers: {
                            'Access-Control-Allow-Origin':'*'
                        },
					    mode: 'cors',
					    cache: 'default' };

    fetch(message,noCorsCall)
	.then(function(response) {
		document.getElementById('responseCmd').src = message;
        console.log(message);
	    return response;
	});

}

function changeManyLightsState(cmds){
    var milisseconds = 0;
    cmds.forEach(function(cmd){
        setTimeout(function(){ changeLightState(cmd)}, milisseconds);
        milisseconds += 500;
    });
}

function getLightStatus(){
    console.log('to be done!');
}