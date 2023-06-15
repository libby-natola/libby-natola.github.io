const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Red-naped-photo.png") {
    myImage.setAttribute("src", "images/Red-naped-eye-photo.png");
  } else {
    myImage.setAttribute("src", "images/Red-naped-photo.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Enter your name or get your sap sucked.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Red-naped sapsuckers are cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Red-naped sapsuckers are cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
