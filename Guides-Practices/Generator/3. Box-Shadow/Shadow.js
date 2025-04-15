function updateBorderStyle() {
  const borderStyle = document.getElementById('borderStyle').value;
  const preview = document.getElementById('preview');

  preview.style.borderStyle = borderStyle;
  generateCode();
}

function updateShadowType() {
  const boxShadowType = document.getElementById('shadowType').value;
  const preview = document.getElementById('preview');

  preview.style.boxShadow = preview.style.boxShadow.replace(/inset|outset/g, '');
  if (boxShadowType === 'inset') {
    preview.style.boxShadow = `inset ${preview.style.boxShadow}`;
  }

  generateCode();
}


document.getElementById('borderStyle').addEventListener('change', updateBorderStyle);
document.getElementById('shadowType').addEventListener('change', updateShadowType);


function updateSliderValue(sliderId, displayId) {
  const slider = document.getElementById(sliderId);
  const display = document.getElementById(displayId);

  slider.addEventListener('input', function() {
    display.textContent = this.value;
    generateCode(); 
  });
}



updateSliderValue('borderSize', 'borderSizeValue');
updateSliderValue('borderRadius', 'borderRadiusValue');
updateSliderValue('boxShadowSpread', 'boxShadowSpreadValue');
updateSliderValue('boxShadowBlur', 'boxShadowBlurValue');
updateSliderValue('boxShadowHorizontal', 'boxShadowHorizontalValue');
updateSliderValue('boxShadowVertical', 'boxShadowVerticalValue');

function generateCode() {
  const borderBtns = document.querySelectorAll('.border-btn');
  const borderSize = document.getElementById('borderSize').value + 'px';
  const borderColor = document.getElementById('borderColor').value;
  const borderStyle = document.getElementById('borderStyle').value;
  const bgColor = document.getElementById('bgColor').value;
  const borderRadius = document.getElementById('borderRadius').value + 'px';

  const selectedSides = [];
  borderBtns.forEach(btn => {
    if (btn.classList.contains('active')) {
      selectedSides.push(btn.getAttribute('data-side'));
    }
  });

  const preview = document.getElementById('preview');
  preview.style.borderWidth = '0';

  selectedSides.forEach(side => {
    preview.style['border' + side.charAt(0).toUpperCase() + side.slice(1)] = `${borderSize} ${borderStyle} ${borderColor}`;
  });

  preview.style.backgroundColor = bgColor;
  preview.style.borderRadius = borderRadius;

  const boxShadowSpread = document.getElementById('boxShadowSpread').value + 'px';
  const boxShadowColor = document.getElementById('boxShadowColor').value;
  const boxShadowBlur = document.getElementById('boxShadowBlur').value + 'px';
  const boxShadowHorizontal = document.getElementById('boxShadowHorizontal').value + 'px';
  const boxShadowVertical = document.getElementById('boxShadowVertical').value + 'px';
  const boxShadowType = document.getElementById('shadowType').value;

  let boxShadowStyle = `${boxShadowHorizontal} ${boxShadowVertical} ${boxShadowBlur} ${boxShadowSpread} ${boxShadowColor}`;

  if (boxShadowType === 'inset') {
    boxShadowStyle = `inset ${boxShadowHorizontal} ${boxShadowVertical} ${boxShadowBlur} ${boxShadowSpread} ${boxShadowColor}`;
  }

  preview.style.boxShadow = boxShadowStyle;

  const codeOutput = document.getElementById('codeOutput');
  codeOutput.value = `
  border: ${selectedSides.map(side => `${borderSize} ${borderStyle} ${borderColor}`).join('; ')}; 
  background-color: ${bgColor};
  border-radius: ${borderRadius};
  box-shadow: ${boxShadowStyle};
  `;
}

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


updateColorAndHex('bgColor', 'bgColorHex');
updateColorAndHex('borderColor', 'borderColorHex');
updateColorAndHex('boxShadowColor', 'boxShadowColorHex');


document.querySelectorAll('.border-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    generateCode(); 
  });
});


generateCode();

