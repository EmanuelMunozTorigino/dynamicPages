const target = document.getElementById("target");
let yes = document.getElementById("yes");

const saidYes = document.getElementById("saidYes");

yes.addEventListener("click", () => {
  let article = document.createElement("article");
  let img = document.createElement("img");
  let h1 = document.createElement("h1");

  img.src = "images/couple.jpg";
  img.alt = "A couple with a moon as background";

  img.setAttribute("class", "couple");
  h1.innerHTML = "Thanks babe, love you! 💕";

  article.appendChild(img);
  article.appendChild(h1);
  saidYes.appendChild(article);
});

function moveTarget() {
  const maxWidth = 400;
  const maxHeigth = 400;

  const randX = Math.floor(Math.random() * maxWidth);
  const randY = Math.floor(Math.random() * maxHeigth);

  target.style.left = randX + "px";
  target.style.top = randY + "px";
}

target.addEventListener("mouseenter", function () {
  moveTarget();
});
