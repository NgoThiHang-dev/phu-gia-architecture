(function($) {
    $('#tabs-nav li:first-child').addClass('active');
	$('.tab-content').hide();
	$('.tab-content:first').show();
	
	// Click function
	$('#tabs-nav li').click(function(){
	  $('#tabs-nav li').removeClass('active');
	  $(this).addClass('active');
	  $('.tab-content').hide();
	  
	  var activeTab = $(this).find('a').attr('href');
	  $(activeTab).fadeIn();
	  return false;
	});
})(jQuery);
