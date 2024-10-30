function moveNoButton() {
    const noButton = document.getElementById("noButton");
    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 300) - 150;
    
    noButton.style.transform = `translate(${x}px, ${y}px)`;
  }
  
  function goToLovePage() {
    window.location.href = "love.html";
  }
  