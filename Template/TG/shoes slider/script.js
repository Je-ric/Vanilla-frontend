const shoes = document.querySelectorAll(".box-wrapper");
let selected;

shoes.forEach((element) => {
  element.addEventListener("click", () => {
    if (selected) {
      selected.classList.remove("active");
      selected.children[0].style.width = "100%";
      selected.children[0].style.transform = "rotate(0deg)";
      selected.children[1].style.fontSize = "50px";
      selected.children[1].style.left = "49%";
    }
    element.classList.add("active");
    element.children[0].style.width = "70%";
    element.children[0].style.transform = "rotate(42deg)";
    element.children[1].style.fontSize = "150px";
    element.children[1].style.left = "40%";
    selected = element;
  });
});
