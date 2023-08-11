function img1() {
    document.getElementById("pc").src = "foto1.jpg";
}
function img2() {
  document.getElementById("pc").src = "foto2.jpg";
}
function img3() {
  document.getElementById("pc").src = "foto3.jpg";
}
function img4() {
  document.getElementById("pc").src = "foto4.jpg";
}
function imgPrin() {
  document.getElementById("pc").src = "semfundo.png";
}

function modoluz() {
  const body = document.body;
  const btn = document.getElementById("btn-modo");
  const tema = document.getElementById('tema')

  if (body.classList.contains("white-theme")) {
    body.classList.remove("white-theme");
    btn.style.backgroundImage= "url('TEMAESCURO.png')";
    tema.innerText= 'TEMA ESCURO'
  } else {
    body.classList.add("white-theme");
    btn.style.backgroundImage= "url('TEMACLARO.png')";
    tema.innerText= 'TEMA CLARO'
  }
}
const mudatema = document.getElementById("btn-modo");
mudatema.addEventListener("click", modoluz);
