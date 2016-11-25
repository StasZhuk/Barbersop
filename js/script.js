var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var closepopup = document.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function(event) {
  overlay.classList.add("modal-overlay-show");
  event.preventDefault();
  popup.classList.add("modal-content-show");

  if(storage) {
    login.value = storage;
    password.focus();
  }
  else {
    login.focus();
  }
});

closepopup.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.add("modal-error");
  }
  else {
    localStorage.setItem("login", login.value)
  }

});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27 && popup.classList.contains("modal-content-show")) {
    overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-content-show");
    }
});

/*открытие поп-ап карты*/

var open_map = document.querySelector(".popup-map-show");
var popup_map = document.querySelector(".modal-content-map");
var close_map = popup_map.querySelector(".modal-content-close");
var open_map2 = document.querySelector(".footer-contacts .popup-map-show");


open_map.addEventListener("click", function(event) {
  event.preventDefault();
  popup_map.classList.add("modal-content-show");

});

open_map2.addEventListener("click", function(event) {
  event.preventDefault();
  popup_map.classList.add("modal-content-show");
});

close_map.addEventListener("click", function(event) {
  event.preventDefault();
  popup_map.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27 && popup_map.classList.contains("modal-content-show")) {
    popup_map.classList.remove("modal-content-show");
    }
});
