(function($) {
	// Click function
	$('.seeResult').click(function(){
	  $('.description').addClass('hide');
      $('.result').removeClass('hide')
	  return false;
	});
    $('.back').click(function(){
        $('.description').removeClass('hide');
        $('.result').addClass('hide')
        return false;
      });
})(jQuery);