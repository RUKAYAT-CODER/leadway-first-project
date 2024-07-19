// const preLoss = document.getElementById("pre-loss");
// const postLoss = document.getElementById("post-loss");
// const selectOption = document.getElementById("select-option");
// const button = document.getElementById("button");
// const activeBorderColor = "#ff7a00";
// const nonActiveBorderColor = "#c3c4c6";
// const currentButtonBackground = "#c3c4c6";
// const activeButtonBackground = "#ff7a00";

// // Pre loss inspection
// preLoss.addEventListener("click", () => {
//   preLoss.style.borderColor = activeBorderColor;
//   button.style.backgroundColor = activeButtonBackground;
//   postLoss.style.borderColor = nonActiveBorderColor;

//   selectOption.addEventListener("change", (event) => {
//     const currentValue = event.target.value;
//     if (currentValue === "Property") {
//       button.addEventListener("click", () => {
//         location.href = "/pre-inspectionPage.html";
//       })
//     } else {
//       button.addEventListener('click', () => {
//        location.href = "/pre-inspectionPage-motors";
//       })

//     }
//   });
// });

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
        console.log("i am here");
        window.location.href = "/pre-inspectionPage.html";
      });
    } else if (currentValue === "Motors") {
      button.addEventListener("click", function () {
        window.location.href = "/pre-inspectionPage-motors.html";
      });
    }
  });
});

// postLossCard.addEventListener("click", function () {
//   postLossCard.style.border = border;
//   Btn.style.backgroundColor = "#FF7A00";
//   preLossCard.style.border = initialBorder;
//   option.addEventListener("change", function (event) {
//     const currentValue = event.target.value;
//     console.log(currentValue);
//     if (currentValue === "property") {
//       Btn.addEventListener("click", function () {
//         location.href = "/Request/postLossProperty.html";
//       });
//     } else {
//       Btn.addEventListener("click", function () {
//         location.href = "/Request/postLossMotors.html";
//       });
//     }
//   });
// });

//Post loss inspection

// postLoss.addEventListener('click', () => {
//   postLoss.style.borderColor = activeBorderColor;
//   button.style.backgroundColor = activeButtonBackground;
//   preLoss.style.borderColor = nonActiveBorderColor;
//   selectOption.addEventListener('change', (event) => {
//     const currentValue = event.target.value;
//     if (currentValue === "Property") {
//       button.addEventListener("click", () => {
//         location.href = "/post-loss-inspection-page.html";
//       });
//     } else {
//       button.addEventListener('click', () => {

//       })
//       location.href = '/post-loss-inspection-motors.html';
//     }
//   })

// })
