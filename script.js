function updateLogo(){
  var inputText = document.getElementById("input").value;
  document.getElementById("outputText1").innerHTML = inputText;
  document.getElementById("outputText2").innerHTML = inputText;
  document.getElementById("outputText3").innerHTML = inputText;
  scaleLogo();
  selfQuarantine(inputText);
}

function scaleLogo(){
  var dynamicOutput1 = document.getElementById("dynamicOutput1");
  var logoBot1 = document.getElementById("logoBot1");
  var outputText1 = document.getElementById("outputText1");
  var unscaledWidth1 = logoBot1.offsetWidth + outputText1.offsetWidth;
  var outputWidth1 = dynamicOutput1.offsetWidth;
  var scale1 = outputWidth1 / unscaledWidth1;
  dynamicOutput1.style.transform = "scale(" + scale1 + ")";

  var dynamicOutput2 = document.getElementById("dynamicOutput2");
  var logoBot2 = document.getElementById("logoBot2");
  var outputText2 = document.getElementById("outputText2");
  var unscaledWidth2 = logoBot2.offsetWidth + outputText2.offsetWidth;
  var outputWidth2 = dynamicOutput2.offsetWidth;
  var scale2 = outputWidth2 / unscaledWidth2;
  dynamicOutput2.style.transform = "scale(" + scale2 + ")";

  var dynamicOutput3 = document.getElementById("dynamicOutput3");
  var logoBot3 = document.getElementById("logoBot3");
  var outputText3 = document.getElementById("outputText3");
  var unscaledWidth3 = logoBot3.offsetWidth + outputText3.offsetWidth;
  var logoTop3 = document.getElementById("logoTop3");
  var outputWidth3 = logoTop3.offsetWidth * (5/7);
  var scale3 = outputWidth3 / unscaledWidth3;
  dynamicOutput3.style.transform = "scale(" + scale3 + ")";
}

function changeLogoType(lines){
  var output1 = document.getElementById("output1");
  var output2 = document.getElementById("output2");
  var output3 = document.getElementById("output3");

  if(lines == 1) {
    output1.className = "output";
    output2.className = "output invisible";
    output3.className = "output invisible";
  }

  if(lines == 2) {
    output1.className = "output invisible";
    output2.className = "output";
    output3.className = "output invisible";
  }

  if(lines == 3) {
    output1.className = "output invisible";
    output2.className = "output invisible";
    output3.className = "output";
  }

  scaleLogo();
}

function hideContent(){
  var top = document.getElementById("top");
  var bottom = document.getElementById("bottom");
  var show = document.getElementById("show");

  top.className = "invisible";
  bottom.className = "invisible";
  show.className = "";

  var output1 = document.getElementById("output1");
  var output2 = document.getElementById("output2");
  var output3 = document.getElementById("output3");

  output1.classList.add("outputSS");
  output2.classList.add("outputSS");
  output3.classList.add("outputSS");
}

function showContent(){
  var top = document.getElementById("top");
  var bottom = document.getElementById("bottom");
  var show = document.getElementById("show");

  top.className = "";
  bottom.className = "";
  show.className = "invisible";

  var output1 = document.getElementById("output1");
  var output2 = document.getElementById("output2");
  var output3 = document.getElementById("output3");

  output1.classList.remove("outputSS");
  output2.classList.remove("outputSS");
  output3.classList.remove("outputSS");
}

function selfQuarantine(input){
  //Congratulations! You found the not-so-secret easter egg!
  //Stay safe and healthy!
  var body = document.getElementById("body");
  if(input=="COVID-19"){
    body.className = "infected";
  }
  else
  {
    body.className = "";
  }
}
