function generateCode() {
    const scale = document.getElementById('scale').value;
    const rotate = document.getElementById('rotate').value + 'deg';
    const translateX = document.getElementById('translateX').value + 'px';
    const translateY = document.getElementById('translateY').value + 'px';
    const skewX = document.getElementById('skewX').value + 'deg';
    const skewY = document.getElementById('skewY').value + 'deg';
  
    const previewBox = document.getElementById('previewBox');
    previewBox.style.transform = `scale(${scale}) rotate(${rotate}) translate(${translateX}, ${translateY}) skew(${skewX}, ${skewY})`;
  
    
    const codeOutput = document.getElementById('codeOutput');
    codeOutput.value = `
      .preview-box {
          transform: scale(${scale}) rotate(${rotate}) translate(${translateX}, ${translateY}) skew(${skewX}, ${skewY});
      }
    `;
  }
  
  function resetTransform() {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
      slider.value = slider.getAttribute('Value');
      const id = slider.id + 'Value';
      document.getElementById(id).innerText = slider.value;
    });
    generateCode();
  }
  
  
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(slider => {
    slider.addEventListener('input', function() {
      const id = this.id + 'Value';
      document.getElementById(id).innerText = this.value;
      generateCode();
    });
  });
  
  
  generateCode();
  