window.addEventListener("scroll", function() {
    var topmenu = document.querySelector(".topmenu");
    var scrollPosition = window.scrollY;
    var opacity = Math.min(scrollPosition / 300, 1);

    if (scrollPosition > 0) {
      topmenu.classList.add("fixed-topmenu");
    } else {
      topmenu.classList.remove("fixed-topmenu");
    } 
  });

