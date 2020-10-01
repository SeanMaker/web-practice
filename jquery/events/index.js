$('h1').click(()=>{
    alert('success!')
})


/*$('button').click(
    function(){
        $(this).css('background','pink')
    }
)*/

$('button').click((e)=>{
    $(e.target).css('background','pink')
})

$('input[type="text"]').keypress(function(e){
    console.log(e)
})
