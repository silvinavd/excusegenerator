/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function Excuse() {
  var my = ["cat", "brother", "friend", "grandma"];
  var action = ["ate", "threw", "lost", "found"];
  var element = ["clothes", "books", "keys", "phone"];
  var time = ["last night", "yesterday", "this morning", "last year"];

  var whoindex = Math.floor(Math.random() * my.length);
  var didindex = Math.floor(Math.random() * action.length);
  var whatindex = Math.floor(Math.random() * element.length);
  var timeindex = Math.floor(Math.random() * time.length);

  return (
    "My " +
    my[whoindex] +
    " " +
    action[didindex] +
    " the " +
    " " +
    element[whatindex] +
    " " +
    time[timeindex]
  );
}
document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#excuse").innerHTML = Excuse();
});
