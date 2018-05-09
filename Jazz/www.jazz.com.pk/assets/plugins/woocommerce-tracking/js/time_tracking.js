TimeMe.setIdleDurationInSeconds(30);
TimeMe.initialize();
var timeSpendOnPage;
timeSpendOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
window.onload = function(){
	setInterval(function(){
		timeSpendOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
		//timeSpendRequest( timeSpendOnPage );
	}, 25);
}
$(window).on('beforeunload', function() {
	return timeSpendRequest(timeSpendOnPage);
});

function timeSpendRequest( lastTime ) {
	$.post(
	my_ajax_object.ajax_url,
	'jx=1&action=time_spend&time='+lastTime).done(function(resp){
	});
}