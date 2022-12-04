const input = document.querySelector("input");
const form = document.getElementById("login-form");
const greeting = document.querySelector("#greeting");
const greetingform = document.querySelector("#greeting-form")
const here = document.querySelector("#here");

const HIDDEN_CLASS = "hidden";

function onSubmit(event) {
  event.preventDefault();
  form.classList.add(HIDDEN_CLASS);
  const username = input.value;
  localStorage.setItem("username", username);
  greetings(username);
}

function greetings(username) {
  greeting.innerText = "Welcome " + username + ".";
  here.innerText = "Here's your today's list!";
  greetingform.classList.remove(HIDDEN_CLASS);
}

const savedData = localStorage.getItem("username");

if (savedData === null) {
  form.classList.remove(HIDDEN_CLASS);
  form.addEventListener("submit", onSubmit);
} else {
  greetings(savedData);
}
