jQuery(document).ready(function($) {
		if (  $('.quote-loop').length ){
		(function loop() {
			$('.quote-loop').each(function() {
				var $self = $(this);
				$self.parent().queue(function (n) {
					$self.fadeIn(500).delay(2000).fadeOut(500, n);
				});
			}).parent().promise().done(loop);
		}());
	}	
}); 
