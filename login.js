$(document).ready(function(){

    ////////Username////////
var inpt1 = document.getElementById('inpt1');
var inpt2 = document.getElementById('inpt2');
var form = document.getElementById('myform');

$('#inpt1').blur(function(){

if(!inpt1.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
 $('#p1').css({'display':'inline'})
}

})
$('#inpt1').focus(function(){
$('#p1').css({'display':'none'})

})

/////////////Password/////////////////



form.addEventListener('submit',function(e){

if(inpt1.value != getCookie('username') || inpt2.value != getCookie(' password')){
 $('#p10').css({'display':'inline'})
 setTimeout(function(){
 $('#p10').remove();
 }, 3000);
 e.preventDefault()
}

})
})
function getCookie(key) {
    var ret = "cant found";
    var arr1 = document.cookie.split(";");
  
    for (var i = 0; i < arr1.length; i++) {
      var arr2 = arr1[i].split("=");
      if (arr2[0] == key) {
        ret = arr2[1];
      }
    }
    return ret;
  }
 
