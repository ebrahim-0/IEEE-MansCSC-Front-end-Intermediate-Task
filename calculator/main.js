let btn = document.querySelectorAll("button");
let display = document.querySelector(".display");
let his = document.getElementById("his");
let result = document.querySelector(".history");
let close = document.querySelector(".close");

btn.forEach((ele) => {
  ele.onclick = () => {
    if (display.innerText != "" && ele.id == "equal") {
      display.innerText = `${display.innerText}  = ${eval(display.innerText)}`;
      result.innerHTML += `${display.innerText} <br>  `;
    } else if (ele.id == "clear") {
      display.innerText = "";
    } else if (display.innerHTML.toString().includes("=")) {
      display.innerHTML = ele.innerText;
    } else if (ele.id == "del") {
      display.innerText = display.innerText.toString().slice(0, -1);
    } else {
      display.innerText += ele.innerText;
    }
  };
});

his.onclick = () => {
  if (result.innerHTML != "") {
    close.style.display = "block";
    result.style.display = "block";
    result.style.height = "112px";
  }
};
close.onclick = () => {
  close.style.display = "none";
  result.style.display = "none";
};
