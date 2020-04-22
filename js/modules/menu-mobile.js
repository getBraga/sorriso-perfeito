import outsideClick from'./outsideclick.js'
export default function initMenuMobile(){
  const menuButton = document.querySelector('.hamburguer');
  const menuList = document.querySelector('.ul-menu');
  const eventos = ['click'];

  if(menuButton) {

    function openMenu(event) {
      menuList.classList.add('ativo');
      menuButton.classList.add('ativo');
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove('ativo');
        menuButton.classList.remove('ativo');
      })

    }

    const mostraAviso = document.querySelector('.entre-contato');
    
  
 function moveScroll(event) {
  const {window} = event.path[1];
  setInterval(() => {
  if(window.scrollY > 0 && window.innerWidth>= 840) {
        mostraAviso.classList.add('ativo');
        menuList.style.display = 'none';
        menuButton.style.display = 'none';
        
  }
  if(window.scrollY <=0) {
    mostraAviso.classList.remove('ativo');
    menuList.style.display = 'block';
 
  }
  if(window.scrollY <=0 && window.innerWidth <=839) {
    menuButton.style.display = 'flex';
  }

  if(window.scrollY <=0 && window.innerWidth >=840) {
    menuButton.style.display = 'none';
   
  }
},0);
  
 }

document.addEventListener('scroll', moveScroll);

    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    })

  }
}





