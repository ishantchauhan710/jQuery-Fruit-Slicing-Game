var playing=false;
var score;
var trialsremaining;
var fruits = ['apple','banana','grapes','coconut','pineapple'];
var action;
var step;

$(function() { 
    //Click on start/reset button
   $("#startreset").click(function() {
        //Are we playing
        //Yes
       if(playing==true) {
           //Reload Page
           location.reload();
       } 
       //No
       else {
           playing=true;
           score=0;
           // Set innerHTML to 0
           $("#scorevalue").html(score);
           
            //Show Trials Left
           $("#trialsleft").show();
           trialsremaining=3;
            addHearts();
           
           $("#gameover").hide();
           
           //Change button text to reset game
           $("#startreset").html("Reset Game");
           
           startAction();
           
       }
   }); 


          
          
               
//Slice a fruit
    //Play sound in background
    //Explode fruit


$("#fruit1").mouseover(function() {
    score++;
    $("#scorevalue").html(score);
    document.getElementById("slicesound").play();
    clearInterval(action);
     //Slice animation
    $("#fruit1").hide("explode",500);
    setTimeout(startAction,500);
});

    

function addHearts() {
         $("#trialsleft").empty();
         for(i=0; i<trialsremaining;i++) {
               $("#trialsleft").append('<img src="heart.png" class="life">');
           }
}

function startAction() {
    $("#fruit1").show();
    chooseFruit(); //Choose a random fruit
    
    $("#fruit1").css({'left':Math.round(550*Math.random()), 'top':-50});
    
    //Define a random step
    step = 1 + Math.round(5*Math.random());
    
      
            //2. Move fruit down by one step every 10ms
    
    action = setInterval(function() {
        $("#fruit1").css('top',$("#fruit1").position().top + step);
        
        //Is fruit too low?
        if(($("#fruit1").position().top + step)> $("#fruitsContainer").height()) {
             //Yes-> Any trials left?
             if(trialsremaining>1) {
            
                      
                  $("#fruit1").show();
    chooseFruit(); //Choose a random fruit
    
    $("#fruit1").css({'left':Math.round(550*Math.random()), 'top':-50});
    
    //Define a random step
    step = 1 + Math.round(5*Math.random());
                 
                 //Reduce trials by one
                 trialsremaining--;
                 addHearts();
                 
             } else {
                  //No: Show game over, button text: Start Game
                 playing = false;
                 $("#startreset").html("Start Game");
                 $("#gameover").show();
                 $("#gameover").html('<p>GAME OVER!</p><p>YOUR SCORE IS ' + score + '</p>');
                 $("#trialsleft").hide();
                 stopAction();
             }
        }
        
        
    },10);
    
    
    
    
}

function chooseFruit() {
      //1. Create a random fruit
    $("#fruit1").attr('src','' + fruits[Math.round(4*Math.random())] + '.png');
}

function stopAction() {
    clearInterval(action);
    $("#fruit1").hide();
}
    
    
    
    
    
    
    
    
    
    
});
















