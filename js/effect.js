var i = 0;
function typeWriter(txt) {
  if (i < txt.length) {
    document.getElementById("terminal-text").innerHTML += txt.charAt(i);
    i++;
    // setTimeout(typeWriter, 200);
  }
}
