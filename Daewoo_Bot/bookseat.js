var seatCount = 0;
var bookseats = [];
function render_seatMap() {

	console.log("Hi");
}
function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
function getvalue(x,Id,seat){

	console.log(x.id);
	var divclass = $(x).attr('class');
	if(divclass == "cp-available-seat") {
		if(seatCount > 0){
			$(x).toggleClass('cp-available-seat cp-selected-seat');
			bookseats.push(seat);
			seatCount--;
		}else{
			window.alert("You have already selected Maximum seats.");
		}
	}else if(divclass == "cp-selected-seat"){
		removeA(bookseats, seat);
		seatCount++;
		$(x).toggleClass('cp-available-seat cp-selected-seat');
	}else{
		$(x).toggleClass('cp-available-seat cp-selected-seat');
	}
	console.log(divclass);
}
