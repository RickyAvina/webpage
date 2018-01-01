var greetings = ["Developer", "Soccer Player", "Dreamer", "Programmer", "Creator", "Designer"];
var counter = 0;
var slideIndex = 0;

$(document).ready(function() {
  scrollRotate();
  setInterval(changeGreeting, 2000);
  navClick();
  showDetails();
  carousel();
});

function showDetails(){
  showDetailNvidia();
  showDetailFb();
  showDetailRb();
}

function showDetailRb(){
  var image = $('#robotics img');
  $('#robotics').hover(function(){
    image.animate({
      opacity: "0.8"
    }, 300);
    $('#learnrb').animate({
      opacity: 0.6
    });
  }, function(){
    image.animate({
      opacity: "0.4"
    }, 300);
    $('#learnrb').animate({
      opacity: 0
    }, 200);
  });
}

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

function showDetailFb(){
  var image = $('#facebook img');
  $('#facebook').hover(function(){
    image.animate({
      opacity: "0.8"
    }, 300);
    $('#learnfb').animate({
      opacity: 0.6
    });
  }, function(){
    image.animate({
      opacity: "0.4"
    }, 300);
    $('#learnfb').animate({
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

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideshow");
    console.log(x);

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
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
