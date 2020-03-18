function updateLogo(){
  var inputText = document.getElementById("input").value;
  document.getElementById("outputText").innerHTML = inputText;
  scaleLogo();
}

function scaleLogo(){
  var dynamicOutput = document.getElementById("dynamicOutput");
  var scaledLeft = document.getElementById("scaledLeft");
  var scaledRight = document.getElementById("scaledRight");
  var logoBot = document.getElementById("logoBot");
  var outputText = document.getElementById("outputText");
  var outputWidth = dynamicOutput.offsetWidth;
  var unscaledWidth = logoBot.offsetWidth + outputText.offsetWidth;
  var scale = outputWidth / unscaledWidth;

  //scaledLeft.width = logoBot.offsetWidth;
  dynamicOutput.style.transform = "scale(" + scale + ")";

  //scaledRight.width = outputText.offsetWidth;
  //scaledRight.style.transform = "scale(" + scale + ")";
}

function changeLogoType(lines){
  var top = document.getElementById("logoTop");
  var bot = document.getElementById("logoBot");
  if(lines==1){
    top.style.display = "none";
    bot.class = "oneLine";
    bot.data = "Logos/" + lines + "bot.svg";

  }
  else {
    top.style.display = "block";
    bot.class = "moreLines";
    top.data = "Logos/" + lines + "top.svg";
    bot.data = "Logos/" + lines + "bot.svg";
  }

  scaleLogo();
}
