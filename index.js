const chatButton = document.getElementById("chat-button");
const chatBox = document.getElementById("chat-box");
const closeChatButton = document.getElementById("close-chat");

chatButton.addEventListener("click", () => {
  chatBox.style.display = "block";
  chatButton.style.display = "none";
});

closeChatButton.addEventListener("click", () => {
  chatBox.style.display = "none";
  chatButton.style.display = "block";
});

const sendBtn = document.getElementById("send-btn");
const chatInput = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");

function displayMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("chat-message");
  messageDiv.innerText = `${sender}: ${message}`;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotResponse(userMessage) {
  userMessage = userMessage.toLowerCase();

  if (userMessage.includes("Timing")) {
    return "Our online courses for website and frontend development take 3 to 6 working days. The frontend development classes are conducted on Saturdays and Sundays.";
  } else if (userMessage.includes("fees")) {
    return "The total fee for the web development course is 6,000 PKR, and the video editing course is 4 months long with a fee of 4,000 PKR. The demo class is free, and further details can be discussed.";
  } else if (userMessage.includes("course duration")) {
    return "The web development course lasts for 8 months, while the video editing course is 4 months long.";
  } else {
    return "I'm sorry, I didn't understand that. Can you please rephrase?";
  }
}

sendBtn.addEventListener("click", () => {
  const userMessage = chatInput.value;
  if (userMessage) {
    displayMessage(userMessage, "You");
    chatInput.value = "";
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      displayMessage(botResponse, "Agent");
    }, 1000);
  }
});

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});
