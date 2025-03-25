function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  
  // List of love messages
  const loveMessages = [
    "I love you my love.",
    "I'm not perfect but I'll do my best to show your worth",
    "I'll choose you again and again",
    "Hindi mo na kailangan yan ako na ang sagot",
    " Kahit anong number pa compute mo, ako nga sagot eh",
    "I'm the answer baby makulet ka ha kiss moko",
    "You have a rough day sending virtual hugs",
    " daming problem buti ako na yung sagot<3"
  ];
  
  try {
    // Generate a random love message
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    display.value = randomMessage;
  } catch (error) {
    display.value = 'Error';
  }
}