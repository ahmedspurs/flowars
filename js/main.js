$(document).ready(function(){
    e.preventDefault()
    $('.con-btn').click(function(e){
        $('.contact').hide(1000)
        setTimeout(function(){
            $('.contact1').show(1000)
    },1000)
    setTimeout(function(){
      
        $('.contact').show(1000)
        $('.contact1').hide(1000)
        $('input').val('')
        $('textarea').val('')
        $('input[type="submit"]').val('send')

},3000)
        

      
    })


    // add comment section



        $(".froums-sub").submit(function(e){
         e.preventDefault()
          
            x = ('#text-r').html()
           y = $('text-e').val()
           $('.list-group-item').append(x)
           $('p').text(y)

        
        })


})




// -----------------------------------------------------


   