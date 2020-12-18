document.getElementById("button").addEventListener("click", determainer);
function determainer() {
  let text = document.getElementById("text").value;
  text=parseInt(text);
  if (text>0) {
    alert ("positive")
  }
  else {
    alert("negative")
  }
}