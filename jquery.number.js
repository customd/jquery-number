/**
 * A quick plugin which implements phpjs.org's number_format as a jQuery
 * plugin which formats the number, and inserts to the DOM.
 *
 * By Sam Sehnert, teamdf.com — http://www.teamdf.com/web/jquery-number-format/178/
 */
(function($){
	
	/**
	 * The excellent number formatting method from PHPJS.org.
	 * http://phpjs.org/functions/number_format/
	 * 
	 * @param float number			: The number you wish to format, or TRUE to use the text contents
	 *								  of the element as the number. Please note that this won't work for
	 *								  elements which have child nodes with text content.
	 * @param int decimals			: The number of decimal places that should be displayed. Defaults to 0.
	 * @param string dec_point		: The character to use as a decimal point. Defaults to '.'.
	 * @param string thousands_sep	: The character to use as a thousands separator. Defaults to ','.
	 *
	 * @return string : The formatted number as a string.
	 */
	$.number = function( number, decimals, dec_point, thousands_sep ){
		number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
		var n = !isFinite(+number) ? 0 : +number,
		    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
		    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
		    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		    s = '',
		    toFixedFix = function (n, prec) {
		        var k = Math.pow(10, prec);
		        return '' + Math.round(n * k) / k;
		    };
		// Fix for IE parseFloat(0.55).toFixed(0) = 0;
		s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
		if (s[0].length > 3) {
		    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
		}
		if ((s[1] || '').length < prec) {
		    s[1] = s[1] || '';
		    s[1] += new Array(prec - s[1].length + 1).join('0');
		}
		return s.join(dec);
	}
	
	/**
	 * jQuery number formatter plugin. This will allow you to format numbers on an element.
	 *
	 * @param proxied for format_number method.
	 *
	 * @return : The jQuery collection the method was called with.
	 */
	$.fn.number = function( number, decimals, dec_point, thousands_sep ){
	    
	    // If we've specified to take the number from the target element,
	    // we loop over the collection, and get the number.
	    if( number === true )
	    {
	    	// return the collection.
	    	return this.each(function(){
	    		var $this = $(this), num = +$this.text().replace(/[^.0-9]/,'');
	    		$this.number( isNaN(num) ? 0 : +num, decimals, dec_point, thousands_sep );
	    	});
	    }
	    
	    // Add this number to the element as text.
	    return this.text( $.number.apply(window,arguments) );
	};
	
})(jQuery);