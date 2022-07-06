const setBackground = () => {
  let p1 = document.querySelector(".first");
  let p2 = document.querySelector(".last");

  //toggle
  p1.classList.toggle("bg-red");
  p2.classList.toggle("bg-yellow");

  //classList.add
  //p1.classList.add("bg-red");
  //p2.classList.add("bg-yellow");

  //wstawia in-line style
  //p1.style.backgroundColor = "red";
  //p2.style.backgroundColor = "yellow";
};

let btnSetBackground = document.getElementById("set-background");

btnSetBackground.addEventListener("click", setBackground);
