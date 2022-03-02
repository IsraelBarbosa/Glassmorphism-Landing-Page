function abrirFecharMenu() {
  const headerNav = document.querySelector(".header__nav");

  const headerNavNaoEstaAberto =
    headerNav.style.left === "" || headerNav.style.left === "-260px";

  if (headerNavNaoEstaAberto) {
    headerNav.style.left = "0px";
  } else {
    headerNav.style.left = "-260px";
  }
}

export default abrirFecharMenu;
