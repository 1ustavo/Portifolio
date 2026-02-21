document.addEventListener("DOMContentLoaded", function () {
  const typedText = document.querySelector(".typed-text");
  const words = [
  "a Full-Stack Developer",
  "focused on java & php",
  "building scalable applications",
  "passionate about clean code"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);
    typedText.textContent = currentText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      typingSpeed = 100;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      typingSpeed = 50;
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      typingSpeed = isDeleting ? 800 : 1200;
    }

    setTimeout(type, typingSpeed);
  }

  type();
  const toggleTheme = document.getElementById("toggle-theme");
  const socialIcons = document.querySelectorAll(".elementos img");
  const logo = document.getElementById("logo");

  function setTheme(mode) {
   if (mode === "dark") {
  document.body.classList.add("dark-mode");
  socialIcons.forEach(img => {
    img.style.filter = "invert(100%) brightness(1.2)";
  });
  logo.src = "img/logo-dark.png";
} else {
  document.body.classList.remove("dark-mode");
  socialIcons.forEach(img => {
    img.style.filter = "none";
  });
  logo.src = "img/logo-light.png";
}

  }

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    setTheme(savedTheme);
    toggleTheme.checked = (savedTheme === "dark");
  } else if (prefersDark) {
    setTheme("dark");
    toggleTheme.checked = true;
  }

  // Alternar tema
  toggleTheme.addEventListener("change", () => {
    setTheme(toggleTheme.checked ? "dark" : "light");
  });
});
const logo = document.querySelector(".logo-g");

function setTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    socialIcons.forEach(img => {
      img.style.filter = "invert(100%) brightness(1.2)";
    });
    logo.src = "img/g-white.png";
  } else {
    document.body.classList.remove("dark-mode");
    socialIcons.forEach(img => {
      img.style.filter = "none";
    });
    logo.src = "img/g.png";
  }
  localStorage.setItem("theme", mode);
}

const toggleBtn = document.getElementById('theme-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
      toggleBtn.textContent = 'Modo Claro';
    } else {
      toggleBtn.textContent = 'Modo Escuro';
    }
  });