let wheel = document.querySelector('.wheel');
let inner = document.querySelector('.inner');
let spinBtn = document.querySelector('.spinBtn');

let value1 = Math.ceil(Math.random() * -3600);
let value2 = Math.ceil(Math.random() * 3600);

spinBtn.addEventListener('click', function(){
    wheel.style.transform = "rotate(" + value1 + "deg)";
    inner.style.transform = "rotate(" + value2 + "deg)";
    value1 += Math.ceil(Math.random() * -3600);
    value2 += Math.ceil(Math.random() * 3600);
});