"use strict";

exports.__esModule = true;
exports.createButton = createButton;

function createButton(container, text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  container.appendChild(button);
  return button;
}