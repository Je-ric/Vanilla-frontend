  function generateCode() {
      const allSides = document.getElementById('allSides').value + 'px';
      const topLeft = document.getElementById('topLeft').value + 'px';
      const topRight = document.getElementById('topRight').value + 'px';
      const bottomLeft = document.getElementById('bottomLeft').value + 'px';
      const bottomRight = document.getElementById('bottomRight').value + 'px';
    
      const borderColor = document.getElementById('borderColor').value;
      const bgColor = document.getElementById('bgColor').value;
    
      const preview = document.getElementById('preview');
      preview.style.borderWidth = allSides;
      preview.style.borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
      preview.style.borderColor = borderColor;
      preview.style.backgroundColor = bgColor;
    
      // Output code
      const codeOutput = document.getElementById('codeOutput');
      codeOutput.value = `
 border-width: ${allSides};
 border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft};
 border-color: ${borderColor};
 background-color: ${bgColor};   
      `;
    }

    
    
    // Attach event listeners for sliders and color pickers
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
      slider.addEventListener('input', generateCode);
    });

    // Update slider values while adjusting
    sliders.forEach(slider => {
      const valueSpan = document.getElementById(`${slider.id}Value`); // Get associated span element
      valueSpan.textContent = slider.value; // Set initial value

      slider.addEventListener('input', function() {
        valueSpan.textContent = this.value; // Update value on input change
      });
    });
    
    const colorPickers = document.querySelectorAll('.color-picker');
    colorPickers.forEach(colorPicker => {
      colorPicker.addEventListener('input', generateCode);
    });

    function updateColorAndHex(inputId, textId) {
      const colorInput = document.getElementById(inputId);
      const colorText = document.getElementById(textId);
    
      colorInput.addEventListener('input', () => {
        colorText.value = colorInput.value;
        generateCode();
      });
    
      colorText.addEventListener('input', () => {
        colorInput.value = colorText.value;
        generateCode();
      });
    }
    
    // Attach event listeners to update color inputs
    updateColorAndHex('bgColor', 'bgColorHex');
    updateColorAndHex('borderColor', 'borderColorHex');
    
    // Initial code generation on page load
    generateCode();