// Efeito de digitação no subtítulo do hero (classe .habilidades)
const typed = new Typed('.habilidades', {
  strings: ['Desenvolvedor Front End', 'Desenvolvedor UI/UX','Comunicativo'],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 300,
  loop: true
});

// Animações que acontecem ao rolar a página
const scrollReveal = ScrollReveal({
  distance: '80px',
  duration: 1000,
  delay: 150,
  reset: false
});

scrollReveal.reveal('.titulo-secao', { origin: 'top' });

scrollReveal.reveal('.hero-texto, .sobre-imagem', { origin: 'left' });

scrollReveal.reveal('.hero-imagem, .sobre-texto', { origin: 'right' });

scrollReveal.reveal('.card, .portfolio, footer', { origin: 'bottom' });