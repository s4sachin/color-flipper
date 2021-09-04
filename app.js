const colors = [
  "green",
  "red",
  "violet",
  "indigo",
  "lavender",
  "lightblue",
  "yellow",
  "maroon",
  "navy",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number between 0 and 8
  const randonNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randonNumber];
  color.textContent = colors[randonNumber];
});

function getRandomNumber() {
  return (Math.random() * colors.length).toFixed(0);
}
