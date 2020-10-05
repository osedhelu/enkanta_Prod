function readerMenu() {
  console.log("ver")
  setTimeout(() => {
      // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header-my").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
      // console.log(this)

        $(this).prev(".card-header-my").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header-my").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
  }, 2500)
  // console.log("_absdk")
   
}
function xzoom() {
    initXzoom();

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
   
}