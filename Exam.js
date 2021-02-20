  $(document).ready(function () {
  var questions = [];
  
  var totalscore= [0,0,0,0,0,0,0,0,0,0]
  var result =0;
   

  function Question(question, answer1, answer2, answer3, answer4,trueAnswer) {
    (this.question = question),
      (this.answer1 = answer1),
      (this.answer2 = answer2),
      (this.answer3 = answer3),
      (this.answer4 = answer4),
      this.trueAnswer=trueAnswer

  }

  questions[0] = new Question(
    "What does CSS stand for ?",
    "Computer Style Sheets",
    "Cascading Style Sheets",
    "Creative Style Sheets",
    "Colorful Style Sheets",
    "B"
  );
  questions[1] = new Question(
    "Which HTML tag is used to define an internal style sheet?",
    "<css>",
    "<script>",
    "<style>",
    "<span>",
    "A"
  );
  questions[2] = new Question(
    "Which HTML attribute is used to define inline styles ?",
    "font",
    "styles",
    "style",
    "class",
    "B"
  );
  questions[3] = new Question(
    "Choose the correct HTML element for the largest heading:",
    "<head>",
    "<heading>",
    "<h1>",
    "<h6>",
    "C"
  );
  questions[4] = new Question(
    "Where is the correct place to insert a JavaScript?",
    "The <head> section",
    " The <body> section",
    "Both the <head> section and the <body> section are correct",
    "none of the above",
    "C"
  );
  questions[5] = new Question(
    "How do you call a function named myFunction ?",
    "call function myFunction()",
    " myFunction()",
    "call myFunction()",
    "none of the above",
    "B"
  );
  questions[6] = new Question(
    "How to write an IF statement in JavaScript?",
    "if i = 5 then",
    "if i = 5",
    "if i == 5 then",
    "if (i == 5)",
    "D"
  );
  questions[7] = new Question(
    "What does XML stand for?",
    "X-Markup Language",
    " Example Markup Language",
    "eXtensible Markup Language",
    "eXtra Modern Link",
    "C"
  );
  questions[8] = new Question(
    "How do you select an element with id 'demo'?",
    "demo",
    ".demo",
    "*demo",
    "#demo",
    "D"
  );
  questions[9] = new Question(
    "In HTML, onblur and onfocus are:",
    "Style attributes",
    "HTML elements",
    "Style attributes",
    "Event attributes",
    "D"
  );

  function shuffleArray(Q) {
    for (var i = 0; i < Q.length; i++) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = Q[i];
      Q[i] = Q[j];
      Q[j] = temp;
    }

    return Q;
  }
  // console.log(questions)

  var RandomQuestions = shuffleArray(questions);
  // console.log(arr)
  // console.log(RandomQuestions[0].answer4);

  ////////////////////////////////
  // console.log( $('#answer1'))
  // $('span').text('new')


  /////////////////////////////////   Display


  var pos = 0;
  function displayQuestion() {
    $(".headQuestion").append(RandomQuestions[pos].question);

    $("span#anwser1").text(RandomQuestions[pos].answer1);
    $("span#anwser2").text(RandomQuestions[pos].answer2);
    $("span#anwser3").text(RandomQuestions[pos].answer3);
    $("span#anwser4").text(RandomQuestions[pos].answer4);

  }
  displayQuestion();
  
  ////////////////////////////////////////Next

$('#next').on('click',NextQuestion)

  function NextQuestion(){
    count();

    if(pos<9){
      $(".headQuestion").text("");
      $("span#anwser1").text("");
      $("span#anwser2").text("");
      $("span#anwser3").text("");
      $("span#anwser4").text("");
    // console.log(pos)

    pos++;
    // console.log(pos)
    displayQuestion()
    }
    else {
      $(".container").css("display","none");
      $(".onnext").css("display","inline");
     // location.replace("timeup.html");
     for(i =0; i<totalscore.length ;i++){
      result += totalscore[i]
      }
      $('.lastresult3').text(result);
      clearInterval(intervalVariable);

      }
      
      // window.location.replace('Last.html')
      console.log(result)
    
  }

    ////////////////////////////// prev



  $('#Prev').on('click',PrevQuestion)

  function PrevQuestion(){
    if(pos>0){
      $(".headQuestion").text("");
      $("span#anwser1").text("");
      $("span#anwser2").text("");
      $("span#anwser3").text("");
      $("span#anwser4").text("");
    // console.log(pos)
    pos--;
    // console.log(pos)
    displayQuestion()
    }
  }



/////////////////////////////////////count 

// var score =0;

  function count(){

  var radio = document.getElementsByName('answer')
  for(var i =0 ; i<4 ;i++){
  if(radio[i].checked && questions[pos].trueAnswer ==radio[i].value){
    
    totalscore[pos] =1
  }
  else if (radio[i].checked && questions[pos].trueAnswer !=radio[i].value)
  totalscore[pos] =0
  }
  console.log(totalscore)

  }

///////////////////////////////timer//////////////////////

var total_seconds =60*2;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);

function CheckTime(){
  document.getElementById("countdown").innerHTML = c_minutes + ':' + c_seconds;
 
  if(total_seconds <=0){

      clearInterval(intervalVariable);
      $(".container").css("display","none");
      $(".ontimeout").css("display","inline");
     // location.replace("timeup.html");
     for(i =0; i<totalscore.length ;i++){
      result += totalscore[i]
      }
      $('.lastresult2').text(result);


  } else{
      total_seconds --;
      c_minutes = parseInt(total_seconds/60);
      c_seconds = parseInt(total_seconds%60);
      c_seconds = c_seconds < 10 ? '0' + c_seconds : c_seconds;
      c_minutes = c_minutes < 10 ? '0' + c_minutes : c_minutes;

  }}

  var intervalVariable = setInterval(CheckTime,1000);


  $(".submit").on('click',divert);

  function divert(){
    $(".container").css("display","none");
      $(".onsubmit").css("display","inline");
    //location.replace("examfinished.html");
    for(i =0; i<totalscore.length ;i++){
      result += totalscore[i]
      }
      console.log(result)
      $('.lastresult1').text(result);
      clearInterval(intervalVariable);


  }

  //$('.lastresult').text(result);
  //console.log(result);




});
