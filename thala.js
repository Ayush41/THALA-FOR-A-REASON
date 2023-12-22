function checkThala() {
    const inputText = document.getElementById("inputText").value;
    const resultElement = document.getElementById("result");
  
    const totalLength = inputText.replace(/[^a-zA-Z0-9]/g, "").length;
  
    if (totalLength === 7) {
      resultElement.textContent = ` ${inputText.toUpperCase()}, THALA for a Reason!`;
    } else {
      resultElement.textContent = `Sorry, ${inputText}, you are not a THALA.`;
    }
  }
  function shareOnSocialMedia() {
    // Add your social media sharing logic here
    alert("Sharing on social media!");
  }
  