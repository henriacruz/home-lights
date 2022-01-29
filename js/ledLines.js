//Fita Sala
var roomLedLineSlider = document.getElementById("roomLedLine");
var roomLedLineOutput = document.getElementById("roomLedLineIntensity");
roomLedLineOutput.innerHTML = roomLedLineSlider.value;

roomLedLineSlider.addEventListener('change', function(){
    roomLedLineOutput.innerHTML = this.value;
	changeLightState('SRF,5,0,3,l,'+this.value + '');
}, false);


//Fita Corredor
var hallLedLineSlider = document.getElementById("hallLedLine");
var hallLedLineOutput = document.getElementById("hallLedLineIntensity");
hallLedLineOutput.innerHTML = hallLedLineSlider.value;

hallLedLineSlider.addEventListener('change', function(){
    hallLedLineOutput.innerHTML = this.value;
	changeLightState('SRF,5,0,2,l,'+this.value + '');
}, false);


//Fita Kids
var kidsLedLineSlider = document.getElementById("kidsLedLine");
var kidsLedLineOutput = document.getElementById("kidsLedLineIntensity");
kidsLedLineOutput.innerHTML = kidsLedLineSlider.value;

kidsLedLineSlider.addEventListener('change', function(){
    kidsLedLineOutput.innerHTML = this.value;
	changeLightState('SRF,5,0,1,l,'+this.value + '');
}, false);

//Fita Casal
var coupleLedLineSlider = document.getElementById("coupleLedLine");
var coupleLedLineOutput = document.getElementById("coupleLedLineIntensity");
coupleLedLineOutput.innerHTML = coupleLedLineSlider.value;

coupleLedLineSlider.addEventListener('change', function(){
    coupleLedLineOutput.innerHTML = this.value;
	changeLightState('SRF,5,0,4,l,'+this.value + '');
}, false);