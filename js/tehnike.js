$(document).ready(function() {
  
  var $slider = $(".slider"),
      $slideBGs = $(".slide__bg"),
      diff = 0,
      curSlide = 0,
      numOfSlides = $(".slide").length-1,
      animating = false,
      animTime = 700,
      autoSlideTimeout,
      autoSlideDelay = 6000,
      $pagination = $(".slider-pagi");
  
  function createBullets() {
    for (var i = 0; i < numOfSlides+1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-"+i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };
  
  createBullets();
  
  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  };
  
  function autoSlide() {
    autoSlideTimeout = setTimeout(function() {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };
  
  autoSlide();
  
  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-"+curSlide).addClass("active");
      setTimeout(function() {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-"+curSlide).addClass("active");
    $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
    $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function(e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;
    
    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
      $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
      $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
    });
  });
  
  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-pagi__elem", function() {
    curSlide = $(this).data("page");
    changeSlides();
  });
  
});//document ON ready end

//Function for different sliders 

function generatePhotoSwipe(technic){
  //tehnic has name of tehnic for witch to generate slides.
  var pswpElement = document.querySelectorAll('.pswp')[0];

  switch(technic){
    case "antika":
        var items = [
          {
              src: 'img/Tehnike/Antika/1.jpg',
              w: 1500,
              h: 1125
          },
          {
              src: 'img/Tehnike/Antika/2.jpg',
              w: 1920,
              h: 1080
          }
      ];
      break;
    case "dekor":
      var items = [
          {
              src: 'img/Tehnike/dekor/1.jpg',
              w: 1920,
              h: 1080
          },
          {
              src: 'img/Tehnike/dekor/2.jpg',
              w: 1920,
              h: 1080
          },
          {
              src: 'img/Tehnike/dekor/3.jpg',
              w: 1920,
              h: 1080
          }
      ];
      break;
    case "dekorativni_kit":
      var items = [
          {
              src: 'img/Tehnike/dekorativni_kit/1.jpg',
              w: 1884,
              h: 1080
          },
          {
              src: 'img/Tehnike/dekorativni_kit/2.jpg',
              w: 1920,
              h: 1080
          },
          {
              src: 'img/Tehnike/dekorativni_kit/3.jpg',
              w: 1920,
              h: 1080
          }
      ];
      break;
    case "jeans":
      var items = [
           {
              src: 'img/Tehnike/jeans/1.jpg',
              w: 1920,
              h: 1080
          },
          {
              src: 'img/Tehnike/jeans/2.jpg',
              w: 1920,
              h: 1080
          },
          {
              src: 'img/Tehnike/jeans/3.jpg',
              w: 1920,
              h: 1080
          }
      ];
      break;
    case "reliefna_tehnika":
      var items = [
          {
              src: 'img/Tehnike/reliefna_tehnika/1.jpg',
              w: 1920,
              h: 1080
          },
          {
              src: 'img/Tehnike/reliefna_tehnika/2.jpg',
              w: 1920,
              h: 1080
          },
          {
              src: 'img/Tehnike/reliefna_tehnika/3.jpg',
              w: 1920,
              h: 1080
          },
          {
              src: 'img/Tehnike/reliefna_tehnika/4.jpg',
              w: 1920,
              h: 1080
          },
          {
              src: 'img/Tehnike/reliefna_tehnika/5.jpg',
              w: 1920,
              h: 1080
          },
          {
              src: 'img/Tehnike/reliefna_tehnika/6.jpg',
              w: 1920,
              h: 1080
          },
          {
              src: 'img/Tehnike/reliefna_tehnika/7.jpg',
              w: 1920,
              h: 1080
          }
      ];
      break;
      //groba reliefna
      //spužva
      //vertikalni detajli
      //omet
      //perla
      case "groba_reliefna_tehnika":
          var items = [
              {
                  src: 'img/Tehnike/groba_reliefna_tehnika/1.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/groba_reliefna_tehnika/2.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/groba_reliefna_tehnika/3.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/groba_reliefna_tehnika/4.jpg',
                  w: 1920,
                  h: 1080
              }];
          break;
      case "spuzva":
          var items = [
              {
                  src: 'img/Tehnike/spuzva/1.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/spuzva/2.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/spuzva/3.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/spuzva/4.jpg',
                  w: 1920,
                  h: 1080
              }];
          
          break;
      case "vertikalni_detajli":
          var items = [
              {
                  src: 'img/Tehnike/vertikalni_detajli/1.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/vertikalni_detajli/2.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/vertikalni_detajli/3.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/vertikalni_detajli/4.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/vertikalni_detajli/5.jpg',
                  w: 1920,
                  h: 1080
              }];
          break;
      case "omet":
          var items = [
              {
                  src: 'img/Tehnike/omet/1.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/omet/2.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/omet/3.jpg',
                  w: 1920,
                  h: 1080
              }];
          break;
      case "perla":
          var items = [
              {
                  src: 'img/Tehnike/perla/1.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/perla/2.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/perla/3.jpg',
                  w: 1920,
                  h: 1080
              },
              {
                  src: 'img/Tehnike/perla/4.jpg',
                  w: 1920,
                  h: 1080
              }];
          break;
      default:
        alert("wrong technic");
        break;
  }
  var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
  };
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();

  
}

