`use strict`;
// email
const email = document.querySelector(".form-control");
const info = document.querySelector(".main-info");
const btnSubmit = document.querySelector(".btn");
const noEmail = document.querySelector(".note-error");
const formInput = document.querySelector(".flex-nowrap");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//check email by click
btnSubmit.addEventListener("click", function () {
  if (!email.value || !regex.test(email.value)) {
    noEmail.classList.remove("hidden-info");
  } else if (regex.test(email.value)) {
    info.classList.remove("hidden-info");
    // email.classList.add("hidden-info");
    // btnSubmit.classList.add("hidden-info");
    formInput.classList.add("hidden-info");
  }
});
// check email by press
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (!email.value || !regex.test(email.value)) {
      noEmail.classList.remove("hidden-info");
    } else if (regex.test(email.value)) {
      info.classList.remove("hidden-info");
      // email.classList.add("hidden-info");
      // btnSubmit.classList.add("hidden-info");
      formInput.classList.add("hidden-info");
    }
  }
});

// box-info
const viewClick = document.querySelectorAll(".view-click");
const formSkill = document.querySelectorAll(".border-info");
const toggleMore = document.querySelectorAll(".toggle-more");
const toggleLess = document.querySelectorAll(".toggle-less");
for (let i = 0; i < viewClick.length; i++) {
  viewClick[i].classList.add("hidden-info");
  toggleMore[i].classList.add("hidden");
}

for (let i = 0; i < formSkill.length; i++) {
  // when mouse leave the form
  toggleLess[i].classList.add("hidden");
  formSkill[i].addEventListener("mouseleave", function () {
    toggleMore[i].classList.add("hidden");
  });
  // when mouse enter the form

  formSkill[i].addEventListener("mouseenter", function () {
    // toggle remove class 'hidden'
    if (toggleLess[i].classList.contains("hidden")) {
      toggleMore[i].classList.remove("hidden");
    }
  });

  // when click toggle-more button
  toggleMore[i].addEventListener("click", function () {
    viewClick[i].classList.remove("hidden-info");
    toggleLess[i].classList.remove("hidden");
    toggleMore[i].classList.add("hidden");
  });
  // when click toggle-less button
  toggleLess[i].addEventListener("click", function () {
    viewClick[i].classList.add("hidden-info");
    toggleLess[i].classList.add("hidden");
    toggleMore[i].classList.remove("hidden");
  });
}
