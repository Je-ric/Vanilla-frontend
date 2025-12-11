const cols = document.querySelectorAll(".col");
const str = document.querySelectorAll(".str");
const kwi = document.querySelectorAll(".kwi");
const ble = document.querySelectorAll(".ble");
const fruits = [str, kwi, ble];
const model = [
  { name: "Strawberry", price: "$12.90", poz: [-55, -120, -200] },
  { name: "Kiwi", price: "$6.90", poz: [-55, -120, -200] },
  { name: "Blueberry", price: "$8.90", poz: [-55, -120, -200] },
];
let click = false;
let currentCol = 0;

str.forEach((item, index) => {
  item.style.transform = `rotate(${model[0].poz[index]}deg)`;
});
kwi.forEach((item, index) => {
  item.style.transform = `rotate(${model[0].poz[index]}deg)`;
});
ble.forEach((item, index) => {
  item.style.transform = `rotate(${model[0].poz[index]}deg)`;
});

cols.forEach((item, index) => {
  const colClickHandler = () => {
    click = true;
    cols.forEach((col, colIndex) => {
      if (currentCol === colIndex) {
        col.style.width = "100%";
        fruits[currentCol][0].style.width = "300px";
        fruits[currentCol][1].style.width = "300px";
        fruits[currentCol][1].style.left = "-30px";
        fruits[currentCol][2].style.width = "300px";
        fruits[currentCol].forEach((fruit, indicator) => {
          fruit.style.transform = `rotate(${model[index].poz[indicator] - 40}deg)`;
        });
        setTimeout(() => {
          col.childNodes[9].style.visibility = "visible";
          console.log(col.childNodes[9].childNodes);
          col.childNodes[9].childNodes[1].innerHTML = model[currentCol].name;
          col.childNodes[9].childNodes[5].innerHTML = model[currentCol].price;
        }, 800);
      } else {
        col.style.width = "0%";
      }
    });
    setTimeout(() => {}, 1000);
  };

  item.addEventListener("mouseenter", () => {
    if (!click) {
      currentCol = index;
      item.style.width = "45%";
      fruits[index].forEach((fruit, indicator) => {
        fruit.style.transform = `rotate(${model[index].poz[indicator] + 40}deg)`;
      });
    }
  });

  item.addEventListener("mouseleave", () => {
    if (!click) {
      currentCol = 0;
      item.style.width = "33.33%";
      fruits[index].forEach((fruit, indicator) => {
        fruit.style.transform = `rotate(${model[index].poz[indicator] - 40}deg)`;
      });
    }
  });

  item.addEventListener("click", colClickHandler);
});

const prevBtns = document.querySelectorAll("#prevbtn");
prevBtns.forEach((prevBtn) => {
  prevBtn.addEventListener("click", () => {
    currentCol = (currentCol - 1 + model.length) % model.length;
    cols.forEach((col, index) => {
      if (index === currentCol) {
        const colClickHandler = () => {
          click = true;
          cols.forEach((col, colIndex) => {
            if (currentCol === colIndex) {
              col.style.width = "100%";
              fruits[currentCol][0].style.width = "300px";
              fruits[currentCol][1].style.width = "300px";
              fruits[currentCol][1].style.left = "-30px";
              fruits[currentCol][2].style.width = "300px";
              fruits[currentCol].forEach((fruit, indicator) => {
                fruit.style.transform = `rotate(${model[index].poz[indicator] - 40}deg)`;
              });
              setTimeout(() => {
                col.childNodes[9].style.visibility = "visible";
                console.log(col.childNodes[9].childNodes);
                col.childNodes[9].childNodes[1].innerHTML = model[currentCol].name;
                col.childNodes[9].childNodes[5].innerHTML = model[currentCol].price;
              }, 800);
            } else {
              col.style.width = "0%";
            }
          });
          setTimeout(() => {}, 1000);
        };
        colClickHandler();
      }
    });
  });
});

const nextBtns = document.querySelectorAll("#nxtbutton");
nextBtns.forEach((nextBtn) => {
  nextBtn.addEventListener("click", () => {
    currentCol = (currentCol + 1) % model.length;
    cols.forEach((col, index) => {
      if (index === currentCol) {
        const colClickHandler = () => {
          click = true;
          cols.forEach((col, colIndex) => {
            if (currentCol === colIndex) {
              col.style.width = "100%";
              fruits[currentCol][0].style.width = "300px";
              fruits[currentCol][1].style.width = "300px";
              fruits[currentCol][1].style.left = "-30px";
              fruits[currentCol][2].style.width = "300px";
              fruits[currentCol].forEach((fruit, indicator) => {
                fruit.style.transform = `rotate(${model[index].poz[indicator] - 40}deg)`;
              });
              setTimeout(() => {
                col.childNodes[9].style.visibility = "visible";
                console.log(col.childNodes[9].childNodes);
                col.childNodes[9].childNodes[1].innerHTML = model[currentCol].name;
                col.childNodes[9].childNodes[5].innerHTML = model[currentCol].price;
              }, 800);
            } else {
              col.style.width = "0%";
            }
          });
          setTimeout(() => {}, 1000);
        };
        colClickHandler();
      }
    });
  });
});