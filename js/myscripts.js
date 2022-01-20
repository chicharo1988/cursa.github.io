 /* script del scroll lento */ 
 
 $('body').scrollspy({target: '#menu-navegacion'});

        //Scroll suavizado
        $('#menu-navegacion a').on('click',function(event){
            if(this.hash != ""){
                event.preventDefault();

                const hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                });
            }
        })
/* ............................. */

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>0);
})