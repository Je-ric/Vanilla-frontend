let words = [];

let correctWord, timer;

const wordText = document.querySelector(".word");           
const hintText = document.querySelector(".hint span");      
const timeText = document.querySelector(".time b");         
const inputField = document.querySelector("input");         
const refreshBtn = document.querySelector(".refresh-word"); 
const checkBtn = document.querySelector(".check-word");     
const resultMessage = document.querySelector(".result-message"); 

const initTimer = (maxTime) => {
  clearInterval(timer); 
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--; 
      timeText.innerText = maxTime; 
    } else {
      clearInterval(timer); 
      alert(`⏰ Time's up! The correct word was: ${correctWord.toUpperCase()}`);
      initGame(); 
    }
  }, 1000); 
};

const initGame = () => {
  if (words.length === 0) return; 
  initTimer(30); 

  let randomObj = words[Math.floor(Math.random() * words.length)];

  let wordArray = randomObj.word.split(""); 
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; 
  }

  wordText.innerText = wordArray.join(""); 
  hintText.innerText = randomObj.hint;     
  correctWord = randomObj.word.toLowerCase(); 
  
  inputField.value = ""; 
  inputField.setAttribute("maxlength", correctWord.length); 
  resultMessage.innerText = ""; 
  inputField.focus(); 
};

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) {
    resultMessage.innerText = "Please enter the word to check!";
    resultMessage.style.color = "orange";
    resultMessage.style.display = "block"; 
    setTimeout(() => {
      resultMessage.style.display = "none"; 
    }, 2000);
    return;
  }

  if (userWord !== correctWord) {
    resultMessage.innerText = `Oops! "${userWord}" is not correct.`;
    resultMessage.style.color = "red";
    resultMessage.style.display = "block";
    setTimeout(() => {
      resultMessage.style.display = "none";
    }, 2000);
    return;
  }

  resultMessage.innerText = `🎉 Correct! "${correctWord.toUpperCase()}" is the right word!`;
  resultMessage.style.color = "green";
  resultMessage.style.display = "block"; 
  setTimeout(() => {
    resultMessage.style.display = "none"; 
    initGame();
  }, 2000);
};

checkBtn.addEventListener("click", checkWord);
refreshBtn.addEventListener("click", initGame);
inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkWord();
  }
});

fetch("words.json")
  .then((res) => res.json()) 
  .then((data) => {
    words = data; 
    initGame();   
  })
  .catch((err) => {
    console.error("Failed to load words:", err);
    alert("⚠️ Unable to load words. Please try again later.");
  });
