// ############# MENU SHOW Y HIDDEN
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//   ######## MENU SHOW ########
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    console.log("WWWWWWW");
  });
}

// ###### MENU HIDDEN ##########
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ####### REMOVE MENU MOBILE ######
const navLInk = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLInk.forEach((n) => n.addEventListener("click", linkAction));

// ############# GOOGLE SIGNIN/OUT BUTTONS ###########
const siginButt = document.getElementById("signin_button");
const sigoutButt = document.getElementById("signout_button");
const calendar = document.getElementById("hiddon__nav__item");

function handleCredentialResponse(response) {
  const responsePayload = decodeJwtResponse(response.credential);
  // console.log(jwt_decode(response.credential));
  console.log(responsePayload.email);
  const email = responsePayload.email;
  if (email == "mkhaknazar@kaist.ac.kr") {
    const temp = document.getElementById("slides__1");
    const siginButt = document.getElementById("signin_button");
    const sigoutButt = document.getElementById("signout_button");
    calendar.style.display = "block";
    siginButt.style.display = "none";
    sigoutButt.style.display = "block";
    console.log("KDJFKDJFDKJFKD");
    temp.innerHTML = "HELLO WORLD";
  }
}

function decodeJwtResponse(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
