document.addEventListener('DOMContentLoaded',function(){
    var header = document.getElementById('site-header');
    setTimeout(function()  {
        header.classList.add('active');
    }, 800);


     var footer = document.getElementById('site-footer');
     footer.classList.add('footer-hidden');
     var footerHeight = footer.scrollHeight+"px";
     
     setTimeout(function(){
        
         footer.style.height = footerHeight;
    },800);
});
document.querySelectorAll('ul li a').forEach(link =>{
    link.addEventListener('click',(event) =>{
        event.preventDefault();
        event.target.classList.remove('animate-click');
        void event.target.offsetWidth;
        event.target.classList.add('animate-click');
        
    })
})
/* making transition of images */
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.background-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }
    images[currentIndex].style.opacity = 1;   
    setInterval(showNextImage, 4000);
});
/*transition of guide images*/
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.background-image-guide');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }

    images[currentIndex].style.opacity = 1;   
    setInterval(showNextImage, 4000);
});
