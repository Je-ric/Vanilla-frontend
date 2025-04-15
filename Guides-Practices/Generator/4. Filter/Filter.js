const previewImage = document.getElementById('previewImage');
const sliders = document.querySelectorAll('.slider');
const codeOutput = document.querySelector('textarea');
const resetButton = document.querySelector('button');

const initialValues = {};
sliders.forEach(slider => {
  initialValues[slider.id] = slider.value;
});

function applyFilters() {
  const blurRadius = document.getElementById('blurRadius').value + 'px';
  const brightness = document.getElementById('brightness').value + '%';
  const contrast = document.getElementById('contrast').value + '%';
  const grayscale = document.getElementById('grayscale').value + '%';
  const hueRotate = document.getElementById('hueRotate').value + 'deg';
  const invert = document.getElementById('invert').value + '%';
  const opacity = document.getElementById('opacity').value + '%';
  const saturate = document.getElementById('saturate').value + '%';
  const sepia = document.getElementById('sepia').value + '%';

  previewImage.style.filter = `blur(${blurRadius}) brightness(${brightness}) contrast(${contrast}) grayscale(${grayscale}) hue-rotate(${hueRotate}) invert(${invert}) opacity(${opacity}) saturate(${saturate}) sepia(${sepia})`;

  updateCodeOutput();
}

function updateCodeOutput() {
  codeOutput.value = `
  filter: blur(${document.getElementById('blurRadius').value}px) 
          brightness(${document.getElementById('brightness').value}%) 
          contrast(${document.getElementById('contrast').value}%) 
          grayscale(${document.getElementById('grayscale').value}%) 
          hue-rotate(${document.getElementById('hueRotate').value}deg) 
          invert(${document.getElementById('invert').value}%) 
          opacity(${document.getElementById('opacity').value}%) 
          saturate(${document.getElementById('saturate').value}%) 
          sepia(${document.getElementById('sepia').value}%);  `;
}

// Call applyFilters once on page load
applyFilters();

sliders.forEach(slider => {
  slider.addEventListener('input', applyFilters);
});
const imageInput = document.getElementById('imageInput');
imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    // Update the id of the image element to 'previewImage'
    document.getElementById('previewImage').src = e.target.result;
  };

  reader.readAsDataURL(file);
});


resetButton.addEventListener('click', function() {
  sliders.forEach(slider => {
    slider.value = initialValues[slider.id];
  });

  applyFilters();
  previewImage.style.backgroundImage = '';
  // Update the code output after resetting
  updateCodeOutput();
});
