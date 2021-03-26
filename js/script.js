function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });
window.addEventListener("load", function() {
    $.widget('app.selectmenu', $.ui.selectmenu, {
        _drawButton: function() {
            this._super();
            var selected = this.element
            .find('[selected]')
            .length,
                placeholder = this.options.placeholder;
      
                if(!selected && placeholder) {
                    this.buttonItem.text(placeholder);
                }
        }
      })
    let select = document.querySelectorAll(".select-ui");
    $(select).selectmenu({ 
        icons:{ button:"ui-icon-blank" },
        placeholder: 'тема обращения'
    });

    // scroll header

    let header_wrapper = document.querySelector(".header-wrapper"),
        header = document.querySelector(".header");
        $(window).on( 'DOMMouseScroll mousewheel', function ( e ) {
            if( e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0 ) {
              //scroll down
              $(header_wrapper).addClass("header-wrapper_scroll-down");
              $(header_wrapper).removeClass("header-wrapper_scroll-up");

              console.log('down')
            } else {
              //scroll up
              $(header_wrapper).removeClass("header-wrapper_scroll-down");
              $(header_wrapper).addClass("header-wrapper_scroll-up");

              console.log('up')

            }
            //prevent page fom scrolling
          });
});




