function render_seatMap() {

	console.log("Hi");
}

function getvalue(id,row,seat){

	console.log(id);
	var cv = $('#' + id).attr('class');
	$('#' + id).toggleClass('cp-available-seat cp-selected-seat');
	console.log(cv);
	test();
}
$(document).ready(function() {

	console.log($('#div-seats').html());
    $.ajax({
        url: "http://35.196.218.1:3000/seats?id=1&date=2018-07-24&row=E"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
});