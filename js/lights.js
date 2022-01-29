function changeLightState(cmd){
    var cmd_ip = "192.168.15.87";
    var cmd_port = "4999";
    var message = "http://" + cmd_ip + "/cgi-bin/send.sh?port=" + cmd_port + "&cmd='" + cmd + "'";
    document.getElementById('responseCmd').src = message;
    console.log(message);
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