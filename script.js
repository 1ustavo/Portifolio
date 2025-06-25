document.addEventListener("DOMContentLoaded", function () {
  // Efeito de digitação
  const typedText = document.querySelector(".typed-text");
  const words = [
    "a C++ developer",
    "a playwright",
    "a cook",
    "a romantic guy"
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

  // Tema escuro
  const toggleTheme = document.getElementById("toggle-theme");
  const socialIcons = document.querySelectorAll(".elementos img");

  function setTheme(mode) {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      socialIcons.forEach(img => {
        img.style.filter = "invert(100%) brightness(1.2)";
      });
    } else {
      document.body.classList.remove("dark-mode");
      socialIcons.forEach(img => {
        img.style.filter = "none";
      });
    }
    localStorage.setItem("theme", mode);
  }

  // Verificar tema salvo ou preferência do sistema
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