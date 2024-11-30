var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Aplica a todas as apresentações de slides que você define com o HTML escrito
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Obter um array de slides

    var index = 0, time = 5000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Passar por cada slide, incrementando o índice
      index++;
      
      // Ao passar por todos os slides, reiniciar o índice para exibir o primeiro slide e iniciar novamente
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }

  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});



const image = document.getElementById('animação');
let position = 0;
const speed = 10; // A velocidade da animação

function animateImage() {
    // Atualiza a posição da imagem
    position += speed;

    // Verifica se a imagem saiu da tela
    if (position > window.innerWidth) {
        position = -100; // Reinicia a posição (fora da tela à esquerda)
    }

    // Define a nova posição da imagem
    image.style.left = position + 'px';

    // Chama a função novamente no próximo quadro
    requestAnimationFrame(animateImage);
}

// Inicia a animação
animateImage();

const scrollToTopBtn = document.getElementById('inicio');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};



