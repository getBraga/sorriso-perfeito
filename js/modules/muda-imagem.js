export default function initmudaImagem() {}

let dateSecund = new Date().getMilliseconds();

dateSecund = 0;

const mudaImg = document.querySelectorAll('#muda-imagem')


setInterval(() => {
  dateSecund++;
  if(dateSecund >=0 && dateSecund <=10)  {
    mudaImg[0].classList.add('ativo')
    mudaImg[1].classList.remove('ativo')
    mudaImg[2].classList.remove('ativo')
  }

  if(dateSecund >10 & dateSecund <=20) {
    mudaImg[1].classList.add('ativo')
    mudaImg[2].classList.remove('ativo')
    mudaImg[0].classList.remove('ativo')
  }

  if(dateSecund >20 & dateSecund <=30) {
    mudaImg[2].classList.add('ativo')
    mudaImg[1].classList.remove('ativo')
    mudaImg[0].classList.remove('ativo')
  }
  if(dateSecund ===30) {
    dateSecund =0;
  }

},1000);








