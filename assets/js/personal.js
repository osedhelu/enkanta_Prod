

function xzoom() {
       (function ($) {
       $(document).ready(function() {
           $('.xzoom2, .xzoom-gallery2').xzoom({position: '#xzoom2-id', tint: '#6c757d'});
   
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