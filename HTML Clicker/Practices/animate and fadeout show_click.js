$(document).ready(function(){
    var add_pos = $(clone).position().top +100
    console.log(add_pos)
    $(clone).animate({top: add_pos-200},1500)
    console.log(add_pos)
    $(clone).fadeOut(1500)
    element = document.getElementById(click_id)
})