// 🔐 PASSWORD
const correctPassword = "sanyalovesvarad";

// PASSWORD CHECK
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    startValentine();
  } else {
    error.innerText = "Wrong password 💔 Try again";
  }
}

// MAIN CONTENT
function startValentine() {
  const today = new Date();
  const month = today.getMonth(); // February = 1
  const date = today.getDate();

  const title = document.getElementById("title");
  const message = document.getElementById("message");

  title.innerText = "Coming Soon ❤️";
  message.innerText = "Come back during Valentine’s Week";

  if (month === 1) {
    if (date === 7) {
      title.innerText = "🌹 Happy Rose Day, Varad";
      message.innerHTML =
        "Though you havent bought me a single rose but ill be always longing for one from you.Varad♥️.<br>" +
        "You make my life softer, warmer, and more beautiful.";
    }
    else if (date === 8) {
      title.innerText = "💍 Propose Day";
      message.innerHTML =
        "Varad, I choose you.<br>" +
        "Will you be my Valentine baby? .<br><br>" +
        "Will you keep choosing me too? ❤️";
    }
    else if (date === 9) {
      title.innerText = "🍫 Chocolate Day";
      message.innerHTML =
        "Life is sweeter with you in it, Varad.<br>" +
        "You’re my favorite addiction 😌🍫";
    }
    else if (date === 10) {
      title.innerText = "🧸 Teddy Day";
      message.innerHTML =
        "Whenever you feel tired or low,<br>" +
        "remember you always have me, Varad.<br>" +
        "This is your forever hug 🤍";
    }
    else if (date === 11) {
      title.innerText = "🤞 Promise Day";
      message.innerHTML =
        "I promise to stand by you, Varad.<br>" +
        "I promise to grow with you.<br>" +
        "And I promise — you’ll never face life alone.";
    }
    else if (date === 12) {
      title.innerText = "🤗 Hug Day";
      message.innerHTML =
        "If I were there right now,<br>" +
        "I’d hug you so tight, Varad,<br>" +
        "and never let you go.";
    }
    else if (date === 13) {
      title.innerText = "💋 Kiss Day";
      message.innerHTML =
        "One kiss from you, Varad,<br>" +
        "and everything feels calm, safe, and perfect 💋";
    }
    else if (date === 14) {
      title.innerText = "❤️ Happy Valentine’s Day, Varad";
      message.innerHTML =
        "This awesome memories we have made cheers to them.<br><br>" +
        "Thank you for loving me, choosing me,<br>" +
        "and being my safe place.<br><br>" +
        "Forever yours,<br>" +
        "Sanya ❤️";
    }
  }

  // PHOTO SLIDESHO
  const photos = [
    "photo1.jpg.jpg",
    "photo2.jpg.JPG",
    "photo3.jpg.JPG",
    "photo4.jpg.PNG",
    "photo5.jpg.JPG"
  ];

  let index = 0;
  const slide = document.getElementById("slide");

  setInterval(() => {
    index = (index + 1) % photos.length;
    slide.src = photos[index];
  }, 3000);
}
