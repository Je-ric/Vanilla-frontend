// window.onscroll = function() {
//     scrollFunction();
//   };
  
//   function scrollFunction() {
//     var btn = document.getElementById("scroll-top-btn");
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       btn.style.display = "block";
//     } else {
//       btn.style.display = "none";
//     }
//   }
  
//   function goToTop() {
//     document.body.scrollTop = 0; 
//     document.documentElement.scrollTop = 0; 
//   }
  

  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var btn = document.getElementById("scroll-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }
  
  function goToTop() {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
    scrollToTop();
  }
  