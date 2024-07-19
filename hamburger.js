// hamburger menu code
const hamburger = document.getElementById("hamburger");
const aside = document.getElementById("aside");
// const overLay = document.querySelector('.overlay');
const closeButton = document.getElementById("close-button");
closeButton.style.display = "none";
hamburger.addEventListener("click", () => {
  aside.style.display = "flex";
  closeButton.style.display = "block";
  hamburger.style.display = "none";
  closeButton.style.marginLeft = "180px";
  closeButton.style.marginTop = "-10px";
});
closeButton.addEventListener("click", () => {
  console.log("checking...");
  aside.style.display = "none";
  hamburger.style.display = "block";
  closeButton.style.display = "none";
  closeButton.style.marginLeft = "180px";
});
