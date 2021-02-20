$(document).ready(function(){


           ////////Firstname////////
var inpt1 = document.getElementById('inpt1');
var inpt2 = document.getElementById('inpt2');
var inpt3 = document.getElementById('inpt3');
var inpt4 = document.getElementById('inpt4');
var inpt5 = document.getElementById('inpt5');

var form = document.getElementById('myform');
$('#inpt1').blur(function(){

    if(!inpt1.value.match(/^[A-Za-z]+$/)){
        $('#p1').css({'display':'inline'})
    }
    
})
$('#inpt1').focus(function(){
    $('#p1').css({'display':'none'})

})

/////////////lastname/////////////////

$('#inpt2').blur(function(){
    if(!inpt2.value.match(/^[A-Za-z]+$/)){
        $('#p2').css({'display':'inline'})
    }
})
$('#inpt2').focus(function(){
    $('#p2').css({'display':'none'})

})
//////////////Email//////

$('#inpt3').blur(function(){
   if(!inpt3.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    $('#p3').css({'display':'inline'})
   }else{
    console.log(x)
   
   }
})
$('#inpt3').focus(function(){
    $('#p3').css({'display':'none'})

})
/////////////passwaord////////////


$('#inpt4').blur(function(){
    if($('#inpt4').val().length < 8){
        $('#p4').css({'display':'inline'})
    }
    else{
       
    }
})
$('#inpt4').focus(function(){
    $('#p4').css({'display':'none'})
})
///////////re password////////


$('#inpt5').blur(function(){
    if($('#inpt5').val() != $('#inpt4').val()){
        $('#p5').css({'display':'inline'})

    }
})
$('#inpt5').focus(function(){
    $('#p5').css({'display':'none'})

})

form.addEventListener('submit',function(e){

    if(!inpt1.value.match(/^[A-Za-z]+$/) ||!inpt2.value.match(/^[A-Za-z]+$/) ||
     !inpt3.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)||
     $('#inpt4').val().length < 8 || $('#inpt5').val() != $('#inpt4').val()){
        $('#p10').css({'display':'inline'})
        setTimeout(function(){
        $('#p10').remove();
        }, 3000);
        e.preventDefault()
    }
    else{
        var x = $('#inpt3').val();
    document.cookie = `username=${x}`
    var y = $('#inpt4').val();
    document.cookie = `password=${y}`
    }
})

  

  
})

document.cookie = ""