function updateLogo(){
  var inputText = document.getElementById("input").value;
  document.getElementById("outputText").innerHTML = inputText;
}

function changeLogoType(lines){
  document.getElementById("outputBase").src = lines + ".png";
}
