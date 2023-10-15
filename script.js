function openYouTube() {
  window.open("https://www.youtube.com/watch?v=SETK2maosQY", "_blank");
}

function getRandomPosition(element) {
  const x = Math.random() * (window.innerWidth - element.clientWidth);
  const y = Math.random() * (window.innerHeight - element.clientHeight);
  return { x, y };
}

document.getElementById("noButton").addEventListener("click", function () {
  const button = this;
  const newPosition = getRandomPosition(button);
  button.style.position = "absolute";
  button.style.left = `${newPosition.x}px`;
  button.style.top = `${newPosition.y}px`;
});