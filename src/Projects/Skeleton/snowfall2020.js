var style = document.createElement('style');
  style.innerHTML = `

  .sf-snow-flake {

position: fixed;

top: -20px;

z-index: 99999;

}

.sf-snow-anim {

top: 110%;

}

  `;

  document.head.appendChild(style);

 

/*
snowFlurry JS - version 2.0

Copyright Ð’Â© 2015 S.W. Clough (https://www.html5andbeyond.com)

Licensed Under MIT

*/

 
(function ( $ ) {

 
    $.fn.snowFlurry = function( options ) {

 
        var s = $.extend({

            maxSize: 5,

            numberOfFlakes: 25,

            minSpeed: 10,

maxSpeed: 15,

            color: '#fff',

            timeout: 0

        }, options );

 
        var windowWidth = $(window).innerWidth(),

            WidthArray = [],

            DelayArray = [],

            animateArray = [],

            flakeSize = [],

            snowInterval;

 
        if (s.maxSize <= 10) {

for (var i = 1; i < s.maxSize; i++) {

flakeSize.push(i);

}

        } else {

            for (var i = 1; i < 10; i++) {

flakeSize.push(i);

}

        }

 
        for(var i=0; i < windowWidth - 20; i++) {

            WidthArray.push(i);

        }

 
        for(var i=0; i<s.numberOfFlakes; i++) {

            $('<div class="sf-snow-flake"></div>').appendTo('body');

        }

 
        for(var i=0; i<10; i++) {

            DelayArray.push(i);

        }

 
        for(var i=s.minSpeed; i<s.maxSpeed; i++) {

            animateArray.push(i);

        }

 
        function getRandomFlakeSize() {

            var item = flakeSize[Math.floor(Math.random()*flakeSize.length)];

            return item;

        }

 
        function getRandomPosition() {

            var item = WidthArray[Math.floor(Math.random()*WidthArray.length)];

            return item;

        }

 
        function getRandomDelay() {

            var item = DelayArray[Math.floor(Math.random()*DelayArray.length)];

            return item * 1000;

        }

 
        function getRandomAnimation() {

            var item = animateArray[Math.floor(Math.random()*animateArray.length)];

            return item * 1000;

        }

 
        $('.sf-snow-flake').each(function(){

 
        var elem = $(this);

 
        elem.attr('data-speed', getRandomAnimation());

        elem.attr('data-delay', getRandomDelay());

 
        var elemSpeed = elem.attr('data-speed'),

            elemDelay = elem.attr('data-delay');

 
        var flakeSize = getRandomFlakeSize();

 
        elem.css({

            'width': flakeSize,

            'height': flakeSize,

            'border-radius': flakeSize / 2,

            'background-color': s.color,

            'box-shadow': '0 0 2px 1px' + s.color

        })

 
        function activateAnim() {

            setTimeout(function(){

                elem.css('left', getRandomPosition());

                elem.addClass('sf-snow-anim');

                elem.css('transition', 'top ' + elemSpeed / 1000 + 's linear');

 
                setTimeout(function(){

                    elem.css('transition', '');

                    elem.removeClass('sf-snow-anim');

                }, elemSpeed);

 
            }, elemDelay);

        }

 
        if (device.mobile() || device.tablet() || Modernizr.touch || $('html').hasClass('no-csstransitions')) {} else if (device.desktop()) {

            activateAnim();

 
            snowInterval = setInterval(function(){

               activateAnim();

            }, +elemDelay + +elemSpeed);

        }

 
        if (s.timeout != 0) {

            setTimeout(function(){

                clearInterval(snowInterval);

                $('.sf-snow-flake').fadeOut(1500, function(){

                    $(this).remove();

                })

            }, s.timeout * 1000);

        }

 
        });

 
    };

 
}( jQuery ));

 
jQuery(document).ready(function($){

  $(document).snowFlurry({

     maxSize: 10,

     numberOfFlakes: 100,

     minSpeed: 10,

     maxSpeed: 20,

     color: 'white',

     timeout: 0

  });

});

