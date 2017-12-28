var greetings = ["Developer", "Soccer Player", "Dreamer", "Programmer", "Creator", "Designer"];

$(document).ready(function() {
  scrollRotate();
  changeGreeting();
  navClick();
  showDetailNvidia();
});

function showDetailNvidia(){
  var image = $('#nvidia img');
  $('#nvidia').hover(function(){
    image.animate({
      opacity: "0.8"
    }, 300);

    $('#learn').animate({
      opacity: 0.6
    });


  }, function(){
    image.animate({
      opacity: "0.4"
    }, 300);
    $('#learn').animate({
      opacity: 0
    }, 200);
  });
}

function navClick(){
  $(".navitem").on('click', function(event){ // smooth scrolling for all nav links
      if (this.hash !== ""){  // make sure hash has a value
        event.preventDefault(); // prevents default link behavior
        var hash = this.hash; // store hash
        console.log("Hash", this.hash);
        $('html, body').animate({
          scrollTop: $(hash).offset().top // animation to execute
        }, 800, function(){ // 800 specifies how long it takes to scoll in ms
          window.location.hash = hash;  // add hash to URL when done scrolling
        });
      } // end if
  });
}

function changeGreeting(){
  var counter = 0;
  setInterval(changeGreeting, 2000);
  var greeting = $("#greeting > p > span");

  greeting.fadeOut(1000, function(){
    greeting.text(greetings[counter]);
  });

  greeting.fadeIn(1000);

  counter++;
  if (counter >= greetings.length){
    counter = 0;
  }
}

function scrollRotate(){
  /*var rotation = 0, scrollLoc = $(document).scrollTop();
  $(window).scroll(function() {
    var newLoc = $(document).scrollTop();
    var diff = scrollLoc - newLoc;
    rotation += diff, scrollLoc = newLoc;
    var rotationStr = "rotate(" + rotation + "deg)";
    $("#personal img").css({
      "-webkit-transform": rotationStr,
      "-moz-transform": rotationStr,
      "transform": rotationStr
    });
  });*/
}
