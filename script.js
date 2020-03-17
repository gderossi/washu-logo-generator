function updateLogo(){
  var inputText = document.getElementById("input").value;
  document.getElementById("outputText").innerHTML = inputText;
  scaleLogo();
}

function scaleLogo(){
  var dynamicOutput = document.getElementById("dynamicOutput");
  var scaledOutput = document.getElementById("scaledOutput");
  var logoBot = document.getElementById("logoBot");
  var outputText = document.getElementById("outputText");
  outputText.style.transform = "scale(1)";
  var outputWidth = dynamicOutput.offsetWidth * 0.9;
  var unscaledWidth = logoBot.offsetWidth + outputText.offsetWidth;
  var scale = outputWidth / unscaledWidth;

  scaledOutput.width = unscaledWidth;
  console.log(scaledOutput.width);
  scaledOutput.style.transform = "scale(" + scale + ")";
  console.log(scaledOutput.offsetWidth);
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
}
