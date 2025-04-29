// Create Initial references
let pickColor = document.getElementById("pick-color");
let error = document.getElementById("error");
let fileInput = document.getElementById("file");
let image = document.getElementById("image");
let hexValRef = document.getElementById("hex-val-ref");
let rgbValRef = document.getElementById("rgb-val-ref");
let customAlert = document.getElementById("custom-alert");
let pickedColorRef = document.getElementById("picked-color-ref");
let canvas = document.getElementById('color-canvas');
let ctx = canvas.getContext('2d');
let eyeDropper;

// Function On Window Load
window.onload = () => {
  // Check if the browser supports eyedropper
  if ("EyeDropper" in window) {
    pickColor.classList.remove("hide");
    eyeDropper = new EyeDropper();
  } else {
    error.classList.remove("hide");
    error.innerText = "Your browser doesn't support Eyedropper API";
    pickColor.classList.add("hide");
    return false;
  }

  // Initialize canvas size
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
};

// Function to update the canvas size
const updateCanvasSize = () => {
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
};

// Eyedropper logic
const colorSelector = async () => {
  const color = await eyeDropper
    .open()
    .then((colorValue) => {
      error.classList.add("hide");
      // Get the hex color code
      let hexValue = colorValue.sRGBHex;
      // Convert Hex Value To RGB
      let rgbArr = [];
      for (let i = 1; i < hexValue.length; i += 2) {
        rgbArr.push(parseInt(hexValue[i] + hexValue[i + 1], 16));
      }
      let rgbValue = "rgb(" + rgbArr.join(",") + ")";
      hexValRef.value = hexValue;
      rgbValRef.value = rgbValue;
      pickedColorRef.style.backgroundColor = hexValue;

      // Ensure result is shown
      result.style.display = "grid";
    })
    .catch((err) => {
      error.classList.remove("hide");
      // If user presses escape to close the eyedropper
      if (err.toString().includes("AbortError")) {
        error.innerText = "";
      } else {
        error.innerText = err;
      }
    });
};

pickColor.addEventListener("click", colorSelector);

// Function to extract colors from the image
const extractColors = () => {
  let colors = [];
  let numColors = 8;

  // Create a temporary canvas to extract colors
  let tempCanvas = document.createElement('canvas');
  let tempCtx = tempCanvas.getContext('2d');
  tempCanvas.width = image.naturalWidth;
  tempCanvas.height = image.naturalHeight;

  tempCtx.drawImage(image, 0, 0);

  let imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
  let data = imageData.data;

  let colorCounts = {};

  for (let i = 0; i < data.length; i += 4) {
    let r = data[i];
    let g = data[i + 1];
    let b = data[i + 2];
    let a = data[i + 3];
    if (a > 0) { // Ensure color is not transparent
      let hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      colorCounts[hex] = (colorCounts[hex] || 0) + 1;
    }
  }

  // Sort colors by frequency
  colors = Object.keys(colorCounts).sort((a, b) => colorCounts[b] - colorCounts[a]);

  // Limit to 8 colors
  colors = colors.slice(0, numColors);

  // Display colors in palette
  const paletteContainer = document.getElementById('palette-container');
  paletteContainer.innerHTML = '';
  colors.forEach(color => {
    let colorDiv = document.createElement('div');
    colorDiv.classList.add('palette-color');
    colorDiv.style.backgroundColor = color;
    colorDiv.title = color; // Show color code on hover
    paletteContainer.appendChild(colorDiv);
  });
};

// Function to handle color picking on canvas click
const pickColorFromCanvas = (event) => {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  let imageData = ctx.getImageData(x, y, 1, 1).data;
  let r = imageData[0];
  let g = imageData[1];
  let b = imageData[2];
  let a = imageData[3];

  if (a > 0) { // Check if color is not transparent
    let hexValue = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    let rgbValue = `rgb(${r},${g},${b})`;

    hexValRef.value = hexValue;
    rgbValRef.value = rgbValue;
    pickedColorRef.style.backgroundColor = hexValue;

    // Ensure result is shown
    result.style.display = "grid";
  }
};

// Add click event listener to the canvas
canvas.addEventListener('click', pickColorFromCanvas);

// Function to handle file input change
fileInput.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(fileInput.files[0]);
  reader.onload = () => {
    image.setAttribute("src", reader.result);
    image.onload = () => {
      updateCanvasSize(); // Update canvas size when new image is loaded
      extractColors(); // Update color palette when new image is uploaded
    };
  };
};

// Function to copy the color code
const copy = (textId) => {
  // Selects the text in the <input> element
  document.getElementById(textId).select();
  // Copies the selected text to clipboard
  document.execCommand("copy");
  // Display Alert
  customAlert.style.transform = "scale(1)";
  setTimeout(() => {
    customAlert.style.transform = "scale(0)";
  }, 2000);
};
