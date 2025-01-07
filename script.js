// Alternar menu
function alternarMenu() {
  const menu = document.querySelector(".menu-links");
  const icone = document.querySelector(".hamburger-icon");

  if (menu && icone) {
    menu.classList.toggle("aberto");
    icone.classList.toggle("aberto");
    icone.setAttribute("aria-expanded", menu.classList.contains("aberto"));
  }
}

// Função para tratar cliques nos links do menu
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (evento) => {
    const href = link.getAttribute("href");

    if (href && href.startsWith("#")) {
      evento.preventDefault(); // Impede o comportamento padrão do navegador
      const destino = document.querySelector(href); // Seleciona o elemento destino

      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" }); // Faz scroll suave até o destino
      }

      const alias = href.replace("#", ""); // Remove o #
      history.pushState(null, null, `/${alias}`);
    }
  });
});

// Atualizar alias na URL com base na rolagem
function atualizarAliasNaRolagem() {
  const secoes = document.querySelectorAll("section"); // Supondo que cada seção tem a tag <section>
  let aliasAtual = "";

  secoes.forEach((secao) => {
    const bounding = secao.getBoundingClientRect();
    if (bounding.top <= window.innerHeight / 2 && bounding.bottom >= window.innerHeight / 2) {
      aliasAtual = secao.getAttribute("id"); // Supõe que cada seção tem um ID único
    }
  });

  if (aliasAtual) {
    history.replaceState(null, null, `/${aliasAtual}`);
  } else {
    history.replaceState(null, null, `/`);
  }
}

// Ouvir evento de rolagem
window.addEventListener("scroll", atualizarAliasNaRolagem);

// Redirecionar para a seção inicial ao recarregar
function redirecionarParaInicio() {
  const alias = window.location.pathname.replace("/", ""); // Obtém o alias da URL
  if (alias) {
    const destino = document.getElementById(alias);
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// Executa ao carregar a página
redirecionarParaInicio();

// Alternar entre modo claro e escuro
const botaoTema = document.getElementById("modeToggle");
const iconesTema = document.querySelectorAll(".icon");
const temaAtual = localStorage.getItem("tema");

if (temaAtual === "escuro") {
  ativarModoEscuro();
}

if (botaoTema) {
  botaoTema.addEventListener("click", alternarTema);
}

function alternarTema() {
  const temaAtual = document.body.getAttribute("tema");

  if (temaAtual === "escuro") {
    ativarModoClaro();
  } else {
    ativarModoEscuro();
  }
}

function ativarModoEscuro() {
  document.body.setAttribute("tema", "escuro");
  localStorage.setItem("tema", "escuro");

  iconesTema.forEach((icone) => {
    icone.src = icone.getAttribute("src-escuro");
  });
}

function ativarModoClaro() {
  document.body.removeAttribute("tema");
  localStorage.setItem("tema", "claro");

  iconesTema.forEach((icone) => {
    icone.src = icone.getAttribute("src-claro");
  });
}


// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}


// Slide area

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".about-slide");
  let currentIndex = 0;

  function showNextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }

  // Exibe o primeiro slide inicialmente
  slides[currentIndex].classList.add("active");

  // Alterna os slides a cada 2 segundos
  setInterval(showNextSlide, 2000);
});


// CARROSSEL 



