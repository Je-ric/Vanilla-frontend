function execCmd(command, value = null) {
    document.execCommand(command, false, value);
}

function formatHeading(tag) {
    execCmd('formatBlock', tag);
}

function applyStyle(styleProperty, value) {
const selection = window.getSelection();
if (!selection.rangeCount) return;

const range = selection.getRangeAt(0);
if (selection.isCollapsed) {
    const span = document.createElement('span');
    span.style[styleProperty] = value;
    span.appendChild(document.createTextNode('\u200B'));
    range.insertNode(span);
    range.setStart(span, 0);
    range.setEnd(span, 1);
    selection.removeAllRanges();
    selection.addRange(range);
} else {
    const span = document.createElement('span');
    span.style[styleProperty] = value;
    range.surroundContents(span);
}
updateWordCount();
}

function updateWordCount() {
const text = document.getElementById('editor').innerText.trim();
const words = text.length > 0 ? text.split(/\s+/).length : 0;
document.getElementById('wordCount').innerText = words;
}

document.getElementById('editor').addEventListener('input', updateWordCount);

function insertLink() {
const url = prompt('Enter the URL:');
if (url) execCmd('createLink', url);
}

document.getElementById('hr-btn').addEventListener('click', function() {
document.execCommand('insertHTML', false, '<hr class="my-4 border-t border-gray-300">');
});

document.getElementById('code-btn').addEventListener('click', function() {
document.execCommand('insertHTML', false, '<pre class="bg-gray-100 p-4 rounded my-4"><code>// Your code here</code></pre><p><br></p>');
});

document.getElementById('quote-btn').addEventListener('click', function() {
document.execCommand('insertHTML', false, '<blockquote class="border-l-4 border-gray-300 pl-4 italic my-4">Quote text here</blockquote><p><br></p>');
});




let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

//List of fontlist
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

//Initial Settings
const initializer = () => {
  //function calls for highlighting buttons
  //No highlights for link, unlink,lists, undo,redo since they are one time operations
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

  //create options for font names
  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });

  //fontSize allows only till 7
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }

  //default size
  fontSizeRef.value = 3;
};

//main logic
const modifyText = (command, defaultUi, value) => {
  //execCommand executes command on selected text
  document.execCommand(command, defaultUi, value);
};

//For basic operations which don't need value parameter
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

//options that require value parameter (e.g colors, fonts)
advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

//link
linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter a URL");
  //if link has http then pass directly else add https
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLink = "http://" + userLink;
    modifyText(linkButton.id, false, userLink);
  }
});

//Highlight clicked button
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      //needsRemoval = true means only one button should be highlight and other would be normal
      if (needsRemoval) {
        let alreadyActive = false;

        //If currently clicked button is already active
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }

        //Remove highlight from other buttons
        highlighterRemover(className);
        if (!alreadyActive) {
          //highlight clicked button
          button.classList.add("active");
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

window.onload = initializer();