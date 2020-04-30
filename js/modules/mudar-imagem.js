export default function initMudarImagem() {
  

const mudaImg = document.querySelectorAll('#muda-imagem')
const verImg = document.querySelector('#muda-imagem');
if(verImg) {
  let dateSecund = 0;

    setInterval(() => {
    
      
      dateSecund++;
      if(dateSecund <=5)  {
        mudaImg[0].classList.add('ativo')
        mudaImg[1].classList.remove('ativo')
        mudaImg[2].classList.remove('ativo')
      
      }

      if(dateSecund >5 && dateSecund<=10) {
        mudaImg[1].classList.add('ativo')
        mudaImg[0].classList.remove('ativo')
        mudaImg[2].classList.remove('ativo')
      }

      if(dateSecund >10 && dateSecund <=15) {
        mudaImg[2].classList.add('ativo')
        mudaImg[1].classList.remove('ativo')
        mudaImg[0].classList.remove('ativo')
      }
      if(dateSecund ===15) {
        dateSecund =0;
      }
    },1000);

  }




}

