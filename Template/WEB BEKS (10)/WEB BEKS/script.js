let image = document.querySelectorAll('.image');

function showImage(e){
  for(var i = 0; i < image.length; i++){
    x = e.pageX;
    y = e.pageY;
    image[i].style.transform = `translate(${x}px,${y}px)`
  }
}

document.addEventListener('mousemove', showImage);