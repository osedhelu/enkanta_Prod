function readerMenu() {
  console.log("ver")
  setTimeout(() => {
      // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header-my").find(".fas").addClass("fa-angle-up").removeClass("fa-angle-down");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
      // console.log(this)

        $(this).prev(".card-header-my").find(".fas").removeClass("fa-angle-down").addClass("fa-angle-up");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header-my").find(".fas").removeClass("fa-angle-up").addClass("fa-angle-down");
    });
  }, 2500)
  // console.log("_absdk")
   
}
function xzoom() {
       (function ($) {
       $(document).ready(function() {
           $('.xzoom2').xzoom({position: '#xzoom2-id', tint: '#6c757d'});
   
           //Integration with hammer.js
           var isTouchSupported = 'ontouchstart' in window;
   
           if (isTouchSupported) {
               //If touch device
               $('.xzoom2').each(function(){
                   var xzoom = $(this).data('xzoom');
                   xzoom.eventunbind();
               });
       
       
   
           } else {
               //If not touch device
   
               //Integration with fancybox plugin
               $('#xzoom-fancy').bind('click', function(event) {
                   var xzoom = $(this).data('xzoom');
                   xzoom.closezoom();
                   $.fancybox.open(xzoom.gallery().cgallery, {padding: 0, helpers: {overlay: {locked: false}}});
                   event.preventDefault();
               });
              
               //Integration with magnific popup plugin
               $('#xzoom-magnific').bind('click', function(event) {
                   var xzoom = $(this).data('xzoom');
                   console.log(xzoom)
                   xzoom.closezoom();
                   var gallery = xzoom.gallery().cgallery;
                   var i, images = new Array();
                   for (i in gallery) {
                       images[i] = {src: gallery[i]};
                   }
                   $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
                   event.preventDefault();
               });
           }
       });
   })(jQuery);
   console.log('holaa')
}

function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
  
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 3);
      y = pos.y - (lens.offsetHeight / 3);
      console.log(x)
      console.log(y)
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

  const getClosestParentByClass = (e, parentClass) => {
    let parent = e.parentElement;  // Line 61
    if(e.parentElement.classList.contains(parentClass)) return parent;
    else return getClosestParentByClass(parent, parentClass);
}