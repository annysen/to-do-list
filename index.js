const ulSection = document.getElementById("ul-container");

document.getElementById("add-btn").addEventListener("click", function () {
  const inputTextField = document.getElementById("input-text");
  const inputText = inputTextField.value;
  inputTextField.value = "";

  if (inputText === "") {
    alert("You Must write Something");
  } else {
    const liList = document.createElement("li");
    liList.innerText = inputText;
    ulSection.appendChild(liList);

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    liList.appendChild(span);
  }
});

ulSection.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
