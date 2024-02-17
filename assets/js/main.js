//función de Smooth Croll
$(function(){
    $('a').on('click',function(event){
        console.log('Salida de this.hash--->',this.hash)
        if ( this.hash !== "" ) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
        });
      }
    })
})


