var neinButton = document.getElementById('neinButton');
neinButton.addEventListener('mouseenter', weicheAus);

function antwort(antwort) {
  if (antwort === 'ja') {
    alert('👌😎👉');
  } 
}

function weicheAus() {
  var randomTop = Math.floor(Math.random() * (window.innerHeight - neinButton.clientHeight));
  var randomLeft = Math.floor(Math.random() * (window.innerWidth - neinButton.clientWidth));

  neinButton.style.position = 'absolute';
  neinButton.style.top = randomTop + 'px';
  neinButton.style.left = randomLeft + 'px';
}