(function(global) {
	'use strict';
	
	//jq.memory = jq.$($jq)
	$.$ = $.memory = function(domEl) {
		if (domEl.nodeType !== 1) { throw new Error('Input a DOM element'); }
		
	};

	//$jq.radioclass('class') -> this

})(this);