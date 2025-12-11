let h2 = document.querySelector('h2');
h2.innerHTML = h2.innerText.split('').map((letters, i) => `<span class="text" style="transition-delay:${i * 40}ms; filter:hue-rotate(${i * 30}deg)">${letters}</span>`).join('');
