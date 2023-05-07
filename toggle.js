const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#191d2b';
        body.style.color = 'rgb(120, 24, 161)';
        body.style.transition = '2s';
    }else{
        body.style.background = 'rgb(120, 24, 161)';
        body.style.color = '#191d2b';
        body.style.transition = '2s';
    }
});
