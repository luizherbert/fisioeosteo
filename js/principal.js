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

// btnSaibaMaisOsteo.addEventListener("click", () => {
//     window.location.href = "detalhes.html";    
// });

// btnSaibaMaisFisio.addEventListener("click", () => {
//     window.location.href = "detalhes.html";    
// });


/* BOTAO ANIMADO COM FRAME */
(function() {
	
	var svgModal = {
		showOverlay: $('.btn--show-overlay'),						
		closeOverlay: $('#modal__close'),
		modal: $('#modal'),											
		svgWrapper: $("#svg-wrapper"),								 
		pathElement: undefined,
		modalOpen: false,
		btnHovered: false,											
		paths: {
			default: $('#svg-path').attr('d'),						
			active: $("#svg-wrapper").data('btn-hovered'),			
			modalOpen: $('#svg-wrapper').data('modal-open')
		},
		init: function() {
			
			var s = Snap("#svg");
      
			svgModal.pathElement = s.select('path');
			this.events();													
		},
		events: function() {
			svgModal.showOverlay.on('mouseenter', this.btnHover);
			svgModal.showOverlay.on('mouseleave', this.btnHover);
			svgModal.showOverlay.on('click', this.toggleModal);
			svgModal.closeOverlay.on('click', this.toggleModal);
		},
		btnHover: function(e) {
			e.preventDefault();
			
			var $this = $(this);
			
			if (!svgModal.modalOpen) {

				svgModal.pathElement.stop().animate({
					
					'path': svgModal.btnHovered ? svgModal.paths.default : svgModal.paths.active
					
				}, 250, mina.easeout);
				
				svgModal.btnHovered = !svgModal.btnHovered;
				
			}
		},
		toggleModal: function(e) {
			e.preventDefault();
			
			var $this = $(this);

			setTimeout(function() {
				$('.resumo-osteo').toggleClass('modal--active');
			}, 100);
			
			svgModal.pathElement.stop().animate({
				
				'path': svgModal.paths.modalOpen
				
			}, 300, mina.easeout, function() {

				svgModal.pathElement.stop().animate({
					'path': svgModal.modalOpen ? svgModal.paths.active : svgModal.paths.default
				}, svgModal.modalOpen ? 800 : 300, svgModal.modalOpen ? mina.elastic : mina.easeout);

			});

      svgModal.btnHovered = false;

			svgModal.modalOpen = !svgModal.modalOpen;
			
		}
 	};
	svgModal.init();
	
})();

/* DUPLICADO PARA ESTUDOS */
(function() {
	
	var svgModal2 = {
		showOverlay: $('.btn--show-overlay2'),						
		closeOverlay: $('#modal__close2'),
		modal: $('#modal2'),											
		svgWrapper: $("#svg-wrapper2"),								 
		pathElement: undefined,
		modalOpen: false,
		btnHovered: false,											
		paths: {
			default: $('#svg-path2').attr('d'),						
			active: $("#svg-wrapper2").data('btn-hovered'),			
			modalOpen: $('#svg-wrapper2').data('modal-open')
		},
		init: function() {
			
			var s = Snap("#svg2");
      
			svgModal2.pathElement = s.select('path');
			this.events();													
		},
		events: function() {
			svgModal2.showOverlay.on('mouseenter', this.btnHover2);
			svgModal2.showOverlay.on('mouseleave', this.btnHover2);
			svgModal2.showOverlay.on('click', this.toggleModal2);
			svgModal2.closeOverlay.on('click', this.toggleModal2);
		},
		btnHover2: function(e) {
			e.preventDefault();
			
			var $this = $(this);
			
			if (!svgModal2.modalOpen) {

				svgModal2.pathElement.stop().animate({
					
					'path': svgModal2.btnHovered ? svgModal2.paths.default : svgModal2.paths.active
					
				}, 250, mina.easeout);
				
				svgModal2.btnHovered = !svgModal2.btnHovered;
				
			}
		},
		toggleModal2: function(e) {
			e.preventDefault();
			
			var $this = $(this);

			setTimeout(function() {
				$('.resumo-fisio').toggleClass('modal--active');
			}, 100);
			
			svgModal2.pathElement.stop().animate({
				
				'path': svgModal2.paths.modalOpen
				
			}, 300, mina.easeout, function() {

				svgModal2.pathElement.stop().animate({
					'path': svgModal2.modalOpen ? svgModal2.paths.active : svgModal2.paths.default
				}, svgModal2.modalOpen ? 800 : 300, svgModal2.modalOpen ? mina.elastic : mina.easeout);

			});

      svgModal2.btnHovered = false;

			svgModal2.modalOpen = !svgModal2.modalOpen;
			
		}
 	};
	svgModal2.init();
	
})();