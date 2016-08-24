(function(global, $) {
    'use strict';
    var $body = $('body');
    var fn_map = {
        'width': function(index, value) {
            console.log(index);
            return value / 3 + 20;
        },
        'height': function(index, value) {
            console.log(index);
            if (value < 300) {
                return '100vh';
            } else {
                return value * 2;
            }
        }
    };
    $body.css(fn_map);

    console.log('#1 - width', $body.css('width'));
    console.log('#2 - height', $body.css('height'));
})(this, this.jQuery);

(function(global, $) {
    'use strict';

    function individualizeLetters($target) {
        return $target.each(function(index, item) {
            var $item = $(item);
            $item.html($item.text().split('').map(function(item, index) {
                if (item.trim()) {
                    return '<span>' + item + '</span>';
                } else {
                    return item;
                }
            }).join(''))
        });
    }

    function assignChangeColorBehaviour($target) {
    	var $span = $target.find('span');

        $span.each(function(index, item) {
            var $item = $(item);
            $item.one('mouseenter', $.proxy(toggleText, $item));
            $item.one('mouseenter', playEffectSoundWrapper());
            // $item.on('mouseleave', $.proxy(toggleText, $item));
        });
        return $target;
    }

    function toggleText() {
    	this.toggleClass('red-text');
    }

    function playEffectSoundWrapper() {
    	var soundEffect = $('<audio>').attr('src','../Resources/Media/pop.mp3')[0]; //because the $ factory function returns a list-like object.
    	var playEffectSound = function() {
    		soundEffect.pause();
    		soundEffect.currentTime = 0;
    		soundEffect.play();
    	};
    	return playEffectSound;
    }

    var $target = $('.target');
    assignChangeColorBehaviour(individualizeLetters($target));

})(this, this.jQuery);
