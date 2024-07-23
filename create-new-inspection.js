// preloss
const preLoss = document.getElementById("pre-loss");
const postLoss = document.getElementById("post-loss");
const button = document.getElementById("button");
const initialBorder = "1px solid #EEEEEE";
const border = "1px solid #FF7A00";
const option = document.getElementById("select-option");

const redirectBasedOnOption = (pagePrefix) => {
  const currentValue = option.value ? option.value : "Property";
  console.log(currentValue);
  if (currentValue === "Property") {
    window.location.href = `/${pagePrefix}-inspection-page.html`;
  } else if (currentValue === "Motors") {
    window.location.href = `/${pagePrefix}-inspection-page-motors.html`;
  }
};

preLoss.addEventListener("click", function () {
  console.log("Property");
  preLoss.style.border = border;
  button.style.backgroundColor = "#FF7A00";
  postLoss.style.border = initialBorder;

  button.onclick = function () {
    redirectBasedOnOption("pre");
  };
});

postLoss.addEventListener("click", function () {
  console.log("Property");
  postLoss.style.border = border;
  button.style.backgroundColor = "#FF7A00";
  preLoss.style.border = initialBorder;

  button.onclick = function () {
    redirectBasedOnOption("post-loss");
  };
});
