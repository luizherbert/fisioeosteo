TweenMax.staggerFrom(".quadrado1", 1, {x:100, opacity:0}, 0.4);
TweenMax.staggerFrom(".quadrado2", 1, {x:-100, opacity:0}, 0.4);
TweenMax.staggerFrom(".texto", 1, {x:-50, opacity:0}, 0.4);

const linkTratamento  = document.getElementById("lnkTratamento");
const lnkLocalizacao  = document.getElementById("lnkLocalizacao");
const lnkContato      = document.getElementById("lnkContato");
const btnContato      = document.getElementById("btnContato");
const lnkProfissional = document.getElementById("lnkProfissional");


linkTratamento.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo: ".sc-tratamento-osteopatia"});
});

lnkLocalizacao.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo: ".sc-localizacao"});
});

lnkContato.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo: ".sc-contato"});
});

btnContato.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo: ".sc-contato"});
});
lnkProfissional.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo: ".sc-profissional"});
});

btnSaibaMaisOsteo.addEventListener("click", () => {
    window.location.href = "detalhes.html";    
});

btnSaibaMaisFisio.addEventListener("click", () => {
    window.location.href = "detalhes.html";    
});


barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0
      });
    }
  }]
});
