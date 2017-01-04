var config = {
    apiKey: "AIzaSyD_bcGGmkd69Pnwt2ZVCGXhGngmNf_CjyM",
    authDomain: "trainschedule-1fb87.firebaseapp.com",
    databaseURL: "https://trainschedule-1fb87.firebaseio.com",
    storageBucket: "trainschedule-1fb87.appspot.com",
    messagingSenderId: "673409194056"
  };
  firebase.initializeApp(config);


var database = firebase.database();

var now=new Date();
console.log(now);
var formattednow=moment().format("hh:mm:ss a")
$("#currenttime").html("Current time is "+formattednow);


$("#addTrainBtn").on("click", function(){


	var trainname1 = $("#trainNameInput").val().trim();
	var destination1 = $("#destinationInput").val().trim();
	var firsttrain1 = $("#firstTrainInput").val().trim();
	var frequency1 = $("#frequencyInput").val().trim();

	if (trainname1=="" || destination1=="" || firsttrain1=="" || frequency1==""){
		alert("Hey dumbass. Complete all the fields before hitting SUBMIT.")
	}
	
	else if (trainname1!="" && destination1!="" && firsttrain1!="" && frequency1!=""){

	var newTrain = {
		name: trainname1,
		destination: destination1,
		firsttrain: firsttrain1,
		frequency: frequency1,
		current:now
	};

	database.ref().push(newTrain);

	console.log("Train Name: "+newTrain.name);
	console.log("Destination: "+newTrain.destination);
	console.log("First Train: "+newTrain.firsttrain);
	console.log("Frequency: "+newTrain.frequency)

	$("#trainNameInput").val("");
	$("#destinationInput").val("");
	$("#firstTrainInput").val("");
	$("#frequencyInput").val("");

	return false;
}

});



database.ref().on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());


	var trainname2 = childSnapshot.val().name;
	var destination2 = childSnapshot.val().destination;
	var firsttrain2 = childSnapshot.val().firsttrain;
	var frequency2 = childSnapshot.val().frequency;

	console.log("Train Name (DB): "+trainname2);
	console.log("Destination (DB): "+destination2);
	console.log("First Train (DB): "+firsttrain2);
	console.log("Frequency (DB): "+frequency2);

	//Snapshot of Current Time
	var timenow=moment().format("hh:mm:ss a");
	console.log("Current Time: "+timenow);
	$("#currenttime").html("Current time is "+timenow);

	//Time of First Train
	var firstTimeConverted = moment(firsttrain2,"LT");
	var firstTimePretty=moment(firstTimeConverted).format("hh:mm:ss a");
	console.log("First Train: "+firstTimePretty);

	//Taking time difference in minutes between Current Time and First Train
	var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
	console.log("Time Difference in Min: "+diffTime);

	var remainder = diffTime % frequency2;
	console.log("Remainder: "+remainder);

	//Time to next train if Current Time is AFTER first train
	var timetonext1 = frequency2-remainder;
	console.log("Time to Next 1: "+timetonext1);

	//Time to next train if Current Time is BEFORE first train
	var timetonext2 = moment(firstTimeConverted).diff(moment(), "minutes");
	console.log("Time to Next 2: "+timetonext2);


	//Time to next train
	var nexttrainmin;

	if (diffTime<0){
		nexttrainmin=timetonext2+1;
	}

	else {
		nexttrainmin=timetonext1;
	}

	console.log("Next Train: "+nexttrainmin+" Minutes");


	//Current Time formatted as hh:mm
	var currenttimepretty = moment().format("hh:mm a");


	//Arrival time of next train if first train was BEFORE Current Time
	var nexttraintime = moment().add(nexttrainmin, "minutes")
	var nexttraintimepretty = moment(nexttraintime).format("hh:mm a");
	console.log("Next Train Arrival 1: "+nexttraintimepretty);


	//Arrival time of next train if first train is AFTER Current Time
	var nexttrainiffirst = moment(firstTimeConverted).format("hh:mm a");
	console.log("Next Train Arrival 2: "+nexttrainiffirst);


	//Arrival time of next train
	var next;

	if (diffTime<0){
		next=nexttrainiffirst;
	}

	else {
		next=nexttraintimepretty;
	}

	//What shows up in minutes column
	var minutesdisplay;

	if (currenttimepretty==next){
		minutesdisplay="It's here right now, dumbass.";
	}
	else {
		minutesdisplay=nexttrainmin;
	}


	$("#trainschedule > tbody").append("<tr><td>" + trainname2 + "</td><td>" + destination2 + "</td><td>" + frequency2 + "</td><td>" + next + "</td><td>" + minutesdisplay + "</td><td>");

});




//BEGINNING OF CODE FOR MESSED UP SHIT


var hell = document.createElement('audio');
	       hell.setAttribute('src', "assets/images/hell.mp3");

var femalescream1 = document.createElement('audio');
	       femalescream1.setAttribute('src', "assets/images/femalescream1.mp3");

var femalescream2 = document.createElement('audio');
	       femalescream2.setAttribute('src', "assets/images/femalescream2.mp3");

var femalescream3 = document.createElement('audio');
	       femalescream3.setAttribute('src', "assets/images/femalescream3.mp3");

var malescream1 = document.createElement('audio');
	       malescream1.setAttribute('src', "assets/images/malescream1.mp3");

var malescream2 = document.createElement('audio');
	       malescream2.setAttribute('src', "assets/images/malescream2.mp3");

var malescream3 = document.createElement('audio');
	       malescream3.setAttribute('src', "assets/images/malescream3.mp3");

var train1 = document.createElement('audio');
	       train1.setAttribute('src', "assets/images/train1.mp3");

var train2 = document.createElement('audio');
	       train2.setAttribute('src', "assets/images/train2.mp3");

var train3 = document.createElement('audio');
	       train3.setAttribute('src', "assets/images/train3.mp3");

var laugh = document.createElement('audio');
	       laugh.setAttribute('src', "assets/images/laugh1.mp3");

var thunder = document.createElement('audio');
	       thunder.setAttribute('src', "assets/images/thunder1.mp3");

var lindascream = document.createElement('audio');
	       lindascream.setAttribute('src', "assets/images/lindascream.mp3");

var roar = document.createElement('audio');
	       roar.setAttribute('src', "assets/images/roar.mp3");

var shittingme = document.createElement('audio');
	       shittingme.setAttribute('src', "assets/images/shittingme.mp3");



		hell.play();
		hell.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);


var justin=false;
var bullshit=0;

function femalescream1st(){
	if (justin==false){
		femalescream1.play();
	}
	else if (justin==true){
		bullshit=bullshit;
	}
}

function femalescream2nd(){
	if (justin==false){
		femalescream2.play();
	}
	else if (justin==true){
		bullshit=bullshit;
	}
}

function femalescream3rd(){
	if (justin==false){
		femalescream3.play();
	}
	else if (justin==true){
		bullshit=bullshit;
	}
}

function malescream1st(){
	if (justin==false){
		malescream1.play();
	}
	else if (justin==true){
		bullshit=bullshit;
	}
}

function malescream2nd(){
	if (justin==false){
		malescream2.play();
	}
	else if (justin==true){
		bullshit=bullshit;
	}
}

function malescream3rd(){
	if (justin==false){
		malescream3.play();
	}
	else if (justin==true){
		bullshit=bullshit;
	}
}

function train2nd(){
	if (justin==false){
		train2.play();
	}
	else if (justin==true){
		bullshit=bullshit;
	}
}

function train3rd(){
	if (justin==false){
		train3.play();
	}
	else if (justin==true){
		bullshit=bullshit;
	}
}

function laugh1(){
	if (justin==false){
		laugh.play();
	}
	else if (justin==true){
		bullshit=bullshit;
	}
}

function shorttrain(){
	if (justin==false){
		train1.play();
	}
	else if (justin==true){
		bullshit=bullshit;
	}
}

function thunder1(){
	if (justin==false){
		thunder.play();
	}
	else if (justin==true){
		bullshit=bullshit;
	}
}


function noise(){


function femalescream(){
	var a=Math.floor(Math.random()*3);//Determines which scream
	var b=Math.floor(Math.random()*20000);
	if (a==0){
		setTimeout(femalescream1st,b);
	}
	else if (a==1){
		setTimeout(femalescream2nd,b);
	}
	else if (a==2){
		setTimeout(femalescream3rd,b);
	}
	setTimeout(femalescream,20000);
}

femalescream();

function malescream(){
	var c=Math.floor(Math.random()*3);//Determines which scream
	var d=Math.floor(Math.random()*20000);
	if (c==0){
		setTimeout(malescream1st,d);
	}
	else if (c==1){
		setTimeout(malescream2nd,d);
	}
	else if (c==2){
		setTimeout(malescream3rd,d);
	}
	setTimeout(malescream,20000);
}

malescream();

function train(){
	var e=Math.floor(Math.random()*2);//Determines which train
	var f=Math.floor(Math.random()*35000);
	if (e==0){
		setTimeout(train2nd,f);
	}
	else if (e==1){
		setTimeout(train3rd,f);
	}
	setTimeout(train,35000);
}

train();

function sounds(){
	var g=Math.floor(Math.random()*3);//Determines which random sound
	var h=Math.floor(Math.random()*20000);
	if (g==0){
		setTimeout(shorttrain,h);
	}
	else if (g==1){
		setTimeout(laugh1,h);
	}
	else if (g==2){
		setTimeout(thunder1,h);
	}
	setTimeout(sounds,20000);
}

sounds();

}

//END OF NOISE FUNCTION


noise();


function firebackground(){
	$("body").css("background-image","url(assets/images/fire1.gif");
	$("#screen").css("display","block");
}

function linda(){
	$("body").css("background-image","url(assets/images/linda.jpg");
	$("#screen").css("display","none");
	lindascream.play();
	setTimeout(firebackground,600);
}

function shemon1(){
	$("body").css("background-image","url(assets/images/demonwoman1.jpg");
	$("#screen").css("display","none");
	lindascream.play();
	setTimeout(firebackground,600);
}

function shemon2(){
	$("body").css("background-image","url(assets/images/demonwoman2.gif");
	$("#screen").css("display","none");
	femalescream3.play();
	setTimeout(firebackground,1500);
}

function shemon3(){
	$("body").css("background-image","url(assets/images/demonwoman3.gif");
	$("#screen").css("display","none");
	femalescream3.play();
	setTimeout(firebackground,1500);
}

function shemon4(){
	$("body").css("background-image","url(assets/images/demonwoman4.jpg");
	$("#screen").css("display","none");
	lindascream.play();
	setTimeout(firebackground,600);
}

function shemon5(){
	$("body").css("background-image","url(assets/images/demonwoman5.jpg");
	$("#screen").css("display","none");
	lindascream.play();
	setTimeout(firebackground,600);
}

function demon1(){
	$("body").css("background-image","url(assets/images/demon1.jpg")
	$("#screen").css("display","none");
	roar.play();
	setTimeout(firebackground,600);
}

function demon2(){
	$("body").css("background-image","url(assets/images/demon2.jpg")
	$("#screen").css("display","none");
	roar.play();
	setTimeout(firebackground,600);
}

function demon3(){
	$("body").css("background-image","url(assets/images/demon3.jpg")
	$("#screen").css("display","none");
	roar.play();
	setTimeout(firebackground,600);
}

function clown(){
	$("body").css("background-image","url(assets/images/clown.jpg")
	$("#screen").css("display","none");
	roar.play();
	setTimeout(firebackground,600);
}

function eye1(){
	$("body").css("background-image","url(assets/images/eye1.jpg")
	$("#screen").css("display","none");
	roar.play();
	setTimeout(firebackground,600);
}

function eye2(){
	$("body").css("background-image","url(assets/images/eye2.jpg")
	$("#screen").css("display","none");
	roar.play();
	setTimeout(firebackground,600);
}

function eye3(){
	$("body").css("background-image","url(assets/images/eye3.gif")
	$("#screen").css("display","none");
	roar.play();
	setTimeout(firebackground,1500);
}

function zombie1(){
	$("body").css("background-image","url(assets/images/zombie1.jpg")
	$("#screen").css("display","none");
	lindascream.play();
	setTimeout(firebackground,600);
}

function zombie2(){
	$("body").css("background-image","url(assets/images/zombie2.jpg")
	$("#screen").css("display","none");
	lindascream.play();
	setTimeout(firebackground,600);
}

function areyoushittingme(){
	shittingme.play();
}

function resumehell(){
	hell.play();
	justin=false;
}

function justinbieber(){
	justin=true;
	$("body").css("background-image","url(assets/images/justinbieber.JPG")
	$("#screen").css("display","none");
	hell.pause();
	hell.currentTime=0;
	femalescream1.pause();
	femalescream1.currentTime=0
	femalescream2.pause();
	femalescream2.currentTime=0
	femalescream3.pause();
	femalescream3.currentTime=0
	malescream1.pause();
	malescream1.currentTime=0
	malescream2.pause();
	malescream2.currentTime=0
	malescream3.pause();
	malescream3.currentTime=0
	train1.pause();
	train1.currentTime=0;
	train2.pause();
	train2.currentTime=0;
	train3.pause();
	train3.currentTime=0;
	laugh.pause();
	laugh.currentTime=0;
	thunder.pause();
	thunder.currentTime=0;
	lindascream.pause();
	lindascream.currentTime=0;
	roar.pause();
	roar.currentTime=0;
	setTimeout(areyoushittingme,1000);
	setTimeout(firebackground,1909);
	setTimeout(resumehell,1909);
}



function flashrandom(){
	var i=Math.floor(Math.random()*14);//Determines which image flashes
	var j=Math.floor(Math.random()*8000);

	if (i==0){
		setTimeout(linda,j);
	}

	else if (i==1){
		setTimeout(shemon1,j);
	}

	else if (i==2){
		setTimeout(shemon2,j);
	}

	else if (i==3){
		setTimeout(shemon3,j);
	}

	else if (i==4){
		setTimeout(eye3,j);
	}

	else if (i==5){
		setTimeout(shemon5,j);
	}

	else if (i==6){
		setTimeout(demon1,j);
	}

	else if (i==7){
		setTimeout(demon2,j);
	}

	else if (i==8){
		setTimeout(demon3,j);
	}

	else if (i==9){
		setTimeout(clown,j);
	}

	else if (i=10){
		setTimeout(zombie1,j);
	}

	else if (i=11){
		setTimeout(zombie2,j);
	}

	else if (i=12){
		setTimeout(eye1,j);
	}

	else if (i=13){
		setTimeout(justinbieber,j);
	}

	setTimeout(flashrandom,20000);
}


function flashscripted(){
	setTimeout(demon1,20000);
	setTimeout(shemon1,40000);
	setTimeout(eye1,60000);
	setTimeout(zombie1,80000);
	setTimeout(demon2,100000);
	setTimeout(linda,120000);
	setTimeout(shemon2,140000);
	setTimeout(clown,160000);
	setTimeout(justinbieber,180000);
	setTimeout(shemon3,200000);
	setTimeout(demon3,220000);
	setTimeout(eye3,240000);
	setTimeout(zombie2,260000);
	setTimeout(shemon5,280000);

	setTimeout(flashscripted,280000);
}


// flashscripted();
// setTimeout(flashrandom,6000);


$("#test").on("click",function(){
	justinbieber();
})



//END OF CODE FOR MESSED UP SHIT


