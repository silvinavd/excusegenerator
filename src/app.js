/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function Excuse() {
  var my = ["cat", "brother", "friend"];
  var action = ["ate", "threw", "lost"];
  var element = ["clothes", "books", "keys"];

  var whoindex = Math.floor(Math.random() * my.length);
  var didindex = Math.floor(Math.random() * action.length);
  var whatindex = Math.floor(Math.random() * element.length);

  return (
    "My " +
    my[whoindex] +
    " " +
    action[didindex] +
    " the " +
    " " +
    element[whatindex]
  );
}
document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#excuse").innerHTML = Excuse();
});
