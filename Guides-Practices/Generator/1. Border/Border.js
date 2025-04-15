
function rgbToHex(rgb) {
  const hex = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!hex) return rgb;

  function toHex(value) {
    return `0${parseInt(value, 10).toString(16)}`.slice(-2);
  }

  return `#${toHex(hex[1])}${toHex(hex[2])}${toHex(hex[3])}`;
}


const borderWidth = document.getElementById('borderWidth');
const borderStyle = document.getElementById('borderStyle');
const borderColor = document.getElementById('borderColor');

const borderTopWidth = document.getElementById('borderTopWidth');
const borderRightWidth = document.getElementById('borderRightWidth');
const borderBottomWidth = document.getElementById('borderBottomWidth');
const borderLeftWidth = document.getElementById('borderLeftWidth');

const borderTopStyle = document.getElementById('borderTopStyle');
const borderRightStyle = document.getElementById('borderRightStyle');
const borderBottomStyle = document.getElementById('borderBottomStyle');
const borderLeftStyle = document.getElementById('borderLeftStyle');

const borderTopColor = document.getElementById('borderTopColor');
const borderRightColor = document.getElementById('borderRightColor');
const borderBottomColor = document.getElementById('borderBottomColor');
const borderLeftColor = document.getElementById('borderLeftColor');

const bgColor = document.getElementById('bgColor');

const preview = document.getElementById('preview');
const codeOutput = document.getElementById('codeOutput');


function updatePreview() {
  const borderWidthValue = `${borderWidth.value}px`;
  const borderStyleValue = `${borderTopStyle.value} ${borderRightStyle.value} ${borderBottomStyle.value} ${borderLeftStyle.value}`;
  const borderAllWidthValue = `${borderTopWidth.value}px ${borderRightWidth.value}px ${borderBottomWidth.value}px ${borderLeftWidth.value}px`;
  const borderAllColorValue = `${borderTopColor.value} ${borderRightColor.value} ${borderBottomColor.value} ${borderLeftColor.value}`;

  const bgColorValue = bgColor.value;

  
  document.getElementById('borderTopWidthValue').innerText = borderTopWidth.value;
  document.getElementById('borderRightWidthValue').innerText = borderRightWidth.value;
  document.getElementById('borderBottomWidthValue').innerText = borderBottomWidth.value;
  document.getElementById('borderLeftWidthValue').innerText = borderLeftWidth.value;

  const previewStyle = `
  border-width: ${borderAllWidthValue};
  border-style: ${borderStyleValue};
  border-color: ${borderAllColorValue};
  background-color: ${bgColorValue};
  `;

  preview.style.cssText = previewStyle;

  const borderColorHex = rgbToHex(borderAllColorValue); 
  const code = `
  border-width: ${borderWidthValue};
  border-style: ${borderStyleValue};
  border-color: ${borderColorHex};
  background-color: ${bgColorValue};
  `;

  codeOutput.value = code;
}


borderWidth.addEventListener('input', () => {
  
  const allWidth = `${borderWidth.value}px`;
  borderTopWidth.value = borderBottomWidth.value = borderLeftWidth.value = borderRightWidth.value = borderWidth.value;
  document.getElementById('borderTopWidthValue').innerText = allWidth;
  document.getElementById('borderRightWidthValue').innerText = allWidth;
  document.getElementById('borderBottomWidthValue').innerText = allWidth;
  document.getElementById('borderLeftWidthValue').innerText = allWidth;

  updatePreview();
});

borderColor.addEventListener('input', () => {
  
    const allColor = borderColor.value;
    borderTopColor.value = borderBottomColor.value = borderLeftColor.value = borderRightColor.value = allColor;
  
    
    const borderColorHex = rgbToHex(allColor);
    document.getElementById('borderColorHex').value = borderColorHex;
    document.getElementById('borderTopColorHex').value = borderColorHex;
    document.getElementById('borderRightColorHex').value = borderColorHex;
    document.getElementById('borderBottomColorHex').value = borderColorHex;
    document.getElementById('borderLeftColorHex').value = borderColorHex;
  
    updatePreview();
  });
  
  
  borderTopColor.addEventListener('input', () => {
    const topColor = borderTopColor.value;
    const topColorHex = rgbToHex(topColor);
    document.getElementById('borderTopColorHex').value = topColorHex;
  
    updatePreview();
  });
  
  borderRightColor.addEventListener('input', () => {
    const rightColor = borderRightColor.value;
    const rightColorHex = rgbToHex(rightColor);
    document.getElementById('borderRightColorHex').value = rightColorHex;
  
    updatePreview();
  });
  
  borderBottomColor.addEventListener('input', () => {
    const bottomColor = borderBottomColor.value;
    const bottomColorHex = rgbToHex(bottomColor);
    document.getElementById('borderBottomColorHex').value = bottomColorHex;
  
    updatePreview();
  });
  
  borderLeftColor.addEventListener('input', () => {
    const leftColor = borderLeftColor.value;
    const leftColorHex = rgbToHex(leftColor);
    document.getElementById('borderLeftColorHex').value = leftColorHex;
  
    updatePreview();
  });
  
  borderTopWidth.addEventListener('input', updatePreview);
  borderRightWidth.addEventListener('input', updatePreview);
  borderBottomWidth.addEventListener('input', updatePreview);
  borderLeftWidth.addEventListener('input', updatePreview);
  
  borderTopStyle.addEventListener('change', updatePreview);
  borderRightStyle.addEventListener('change', updatePreview);
  borderBottomStyle.addEventListener('change', updatePreview);
  borderLeftStyle.addEventListener('change', updatePreview);
  
  borderTopColor.addEventListener('input', updatePreview);
  borderRightColor.addEventListener('input', updatePreview);
  borderBottomColor.addEventListener('input', updatePreview);
  borderLeftColor.addEventListener('input', updatePreview);
  
  bgColor.addEventListener('input', updatePreview);
  




updatePreview();
