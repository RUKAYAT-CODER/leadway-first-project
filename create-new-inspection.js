// preloss 
const preLoss = document.getElementById("pre-loss");
const postLoss = document.getElementById("post-loss");
const button = document.getElementById("button");
const initialBorder = "1px solid #EEEEEE";
const border = "1px solid #FF7A00";
const option = document.getElementById("select-option");

preLoss.addEventListener("click", function () {
  preLoss.style.border = border;
  button.style.backgroundColor = "#FF7A00";
  postLoss.style.border = initialBorder;
  option.addEventListener("change", function (event) {
    const currentValue = event.target.value;
    console.log(currentValue);
    if (currentValue === "Property") {
      button.addEventListener("click", function () {
        window.location.href = "/pre-inspectionPage.html";
      });
    } else if (currentValue === "Motors") {
      button.addEventListener("click", function () {
        window.location.href = "/pre-inspectionPage-motors.html";
      });
    }
  });
});

// post loss
postLoss.addEventListener("click", function () {
  postLoss.style.border = border;
  button.style.backgroundColor = "#FF7A00";
  preLoss.style.border = initialBorder;
  option.addEventListener("change", function (event) {
    const currentValue = event.target.value;
    console.log(currentValue);
    if (currentValue === "Property") {
      button.addEventListener("click", function () {
        window.location.href = "/post-loss-inspection-page.html";
      });
    } else if (currentValue === "Motors") {
      button.addEventListener("click", function () {
        window.location.href = "/post-loss-inspection-page-motors.html";
      });
    }
  });
});
