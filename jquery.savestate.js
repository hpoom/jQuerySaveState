/*
 * Save State v0.1 2012-05-11 17:17:42
 * by Simon Wood <hpoomdev@gmail.com>
 * licensed under http://creativecommons.org/licenses/by/3.0
 * more on https://github.com/hpoom/jQuerySaveState
 */
 
(function( $ ){
	$.fn.saveState = function() {  
		return this.each(function() {
			var $this = $(this);
			$this.data( '_original', $this.clone(true) );
		});	
	};
	$.fn.recallState = function() {
		return this.each(function() {
			var $this = $(this);
			$this.replaceWith( $this.data( '_original' ) );
		});	
	};
})( jQuery );