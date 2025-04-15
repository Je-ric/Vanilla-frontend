function setInitialBackgroundColor() {
    const body = document.body;
    const initialColor1 = '#000000';
    const initialColor2 = '#ffffff';
    const initialGradientDirection = 0;

    body.style.background = `linear-gradient(${initialGradientDirection}deg, ${initialColor1}, ${initialColor2})`;
    generateCode(); 
}

function shuffleColors() {
    const color1 = document.getElementById('color1');
    const color2 = document.getElementById('color2');
    const color1Hex = document.getElementById('color1Hex');
    const color2Hex = document.getElementById('color2Hex');

    color1.value = getRandomColor();
    color2.value = getRandomColor();

    color1Hex.value = color1.value;
    color2Hex.value = color2.value;

    generateCode();
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function generateCode() {
    const opacity = document.getElementById('opacity').value;
    const direction = document.getElementById('direction').value;
    const body = document.body;

    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;

    const color1Hex = document.getElementById('color1Hex');
    const color2Hex = document.getElementById('color2Hex');

    // Update color inputs' hex values
    color1Hex.value = color1;
    color2Hex.value = color2;

    const gradientDirection = document.getElementById('gradientDirection').value;

    // Apply opacity to colors
    const rgbaColor1 = hexToRGBA(color1, opacity);
    const rgbaColor2 = hexToRGBA(color2, opacity);

    switch (direction) {
        case 'linear':
            body.style.background = `linear-gradient(${gradientDirection}deg, ${rgbaColor1}, ${rgbaColor2})`;
            break;
        case 'radial':
            body.style.background = `radial-gradient(circle, ${rgbaColor1}, ${rgbaColor2})`;
            break;
        default:
            break;
    }

    const cssCode = `body {
            background: ${body.style.background};
            opacity: ${opacity};
        }
    `;
    document.getElementById('cssCode').value = cssCode;

    // Display the opacity value and gradient direction value
    document.getElementById('opacityValue').textContent = opacity;
    document.getElementById('gradientDirectionValue').textContent = `${gradientDirection}°`;
}

// Convert hexadecimal color to RGBA with opacity
function hexToRGBA(hex, opacity) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}



document.getElementById('direction').addEventListener('change', generateCode);


document.getElementById('color1').addEventListener('input', generateCode);
document.getElementById('color2').addEventListener('input', generateCode);


document.getElementById('opacity').addEventListener('input', generateCode);

document.getElementById('opacity').addEventListener('input', generateCode);

document.getElementById('gradientDirection').addEventListener('input', generateCode);



setInitialBackgroundColor();
