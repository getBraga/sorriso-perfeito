export default function initScrollAnimation() {
  const sections = document.querySelectorAll('section');


  function animaScroll() {
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if(isSectionVisible)
        section.classList.add('ativo');
    }) 
   }
  }

  animaScroll();


    window.addEventListener('scroll', animaScroll);
}





 
 
 