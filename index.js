var colors = ['red', 'green', 'yellow', '#CCC', '#0c0c0c', 'rgba(133,122,200)'];
var bttn = document.getElementById('btn');
var node = document.querySelector('.color');

bttn.addEventListener('click', function () {
  const randomclr = getrandomcolors();
  document.body.style.backgroundColor = colors[randomclr];
  node.textContent = colors[randomclr];
});
function getrandomcolors() {
  return Math.floor(Math.random() * colors.length);
}
