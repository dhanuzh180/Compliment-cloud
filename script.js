const compliments = [
  "You have an amazing smile 😊",
  "You’re like sunshine on a cloudy day ☀️",
  "You make people feel special 🌸",
  "You’re braver than you think 💪",
  "Your kindness is contagious 💖",
  "You light up the room ✨",
  "You’re doing great — keep going 🌈",
  "You have a heart of gold 💛",
  "You’re wonderfully unique 🌻",
  "Your laughter is my favorite sound 🎶",
  "You’re a masterpiece in progress 🎨",
  "Even Wi-Fi connects faster when you smile 😄",
  "The world is better with you in it 🌍",
  "You make small moments sparkle 💫"
];

const complimentBtn = document.getElementById('complimentBtn');
const complimentText = document.getElementById('complimentText');
const complimentBox = document.getElementById('complimentBox');

complimentBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  complimentText.textContent = compliments[randomIndex];
  
  // Small animation effect
  complimentBox.style.transform = 'scale(1.05)';
  complimentBox.style.opacity = '0.8';
  setTimeout(() => {
    complimentBox.style.transform = 'scale(1)';
    complimentBox.style.opacity = '1';
  }, 300);
});
