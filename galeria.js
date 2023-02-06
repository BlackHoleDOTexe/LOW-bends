const imagens= document.querySelectorAll('.small_img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('#modal_img');
const btClose = document.querySelector('#bt_close');
const srcVal="";

for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}


btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});