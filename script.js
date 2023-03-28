let questions = document.querySelectorAll('.quest');

let i;
function unselectAll() {
    for (i = 0; i < questions.length; i++) {
        questions[i].style.height= "60px";
    }
}

questions.forEach(question => {
   question.addEventListener('click', function(){
      unselectAll();
      this.style.height = "190px";  
   } );
});

let images = document.querySelectorAll('.gal')
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let gallery = document.getElementById('gallery');
let active = 0;
next.addEventListener('click', function(){
    gallery.scrollBy({left: images[active].offsetWidth, behavior: 'smooth'});
    active < images.length-2 ? active++ : 0;
})

prev.addEventListener('click', function(){
    gallery.scrollBy({left: -images[active-1].offsetWidth, behavior: 'smooth'});
    active > 0 ? active-- : 0;
})
