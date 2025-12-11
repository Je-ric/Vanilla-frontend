function rangeSlider(value){
    document.getElementById('rangeValue').innerHTML = value;
    document.getElementById('fillRangeValue').style.width = +value+"%";
  background ='linear-gradient(to right, hsl(6, 100%, 80%), hsl(335, 100%, 65%) ' + value + '%, #fff ' + value + '%, white 100%)'
};
