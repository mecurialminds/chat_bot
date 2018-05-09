// JavaScript Document
function removeCart( cart_id ){
	console.log(cart_id);
	$.ajax({
		type: 'POST',
		url: my_ajax_object.ajax_url,
		data: { action: "product_remove", 
				cart_id: cart_id
		},success: function(data){
			//console.log(cart_id);
			var obj = jQuery.parseJSON(data);
			$('.c-'+cart_id).remove();
			$('.cart-count-header').html(obj.cart_quantity);
			$('.span-subtotal-cart').html(obj.cart_total);	
			if( obj.cart_quantity > 0 ) {
				$('.header-cart-count').text(obj.cart_quantity);
			} else {
				$('.header-cart-count').text(0);
				$('.header-cart-count').hide();
			}
			if( obj.gateway == 1 ) {
				$('.alertGateway').hide();
				$('.gatewayError').hide();
			}
		}
	});
}

$(document).ready(function () {
	// console.log(location.hostname);
	// if( location.hostname == "ssadiq.com" ) {
	// 	var url = 'http://ssadiq.com/mobilink/smartbar/smart-bar.php';
	// } else {
	// 	var url = 'http://jazz.com.pk/smartbar/smart-bar.php';
	// }

	// $.post(
	// 	url
	// ).success(function(resp){
	// 	$('#smart-bar').html(resp);
	// });

	//size_li = $(".devices-landing-list").size();
	$(".devices-landing-list > div").hide();
	size_li = $(".devices-landing-list > div").length;
    console.log(size_li);
	var x=9;
	var i=3;
    $(".devices-landing-list > div:lt("+x+")").show();
    
	
	jQuery(".products > div").hide();
	size_li1 = jQuery(".products > div").length;

	var x1=9;
	var i1=3;
	jQuery(".products > div:lt("+(Math.abs(size_li1-x1))+")").hide();
	jQuery(".products > div:lt("+x1+")").show();
	
	
	var h1 = $("#loadMore");

	if($('.products').length < 9){
		h1.hide()
	}

	
	if(size_li > x || size_li1 > x1){}


	$(window).scroll(function() {		
	  if(h1.length != 0){
		  var winHeight = $(window).height() / 2;
		  var window_offset = h1.offset().top -  winHeight;
	  
		  //console.log($(this).scrollTop()  + ' - ScrollTop');
		  //console.log(window_offset  + ' - LoadMore Top');
  
		  if($(this).scrollTop() >= window_offset) {
			  x= (x+i <= size_li) ? x+i : size_li;
			  $('.devices-landing-list > div:lt('+x+')').show();
			  
			  x1= (x1+i1 <= size_li1) ? x1+i1 : size_li1;
			  jQuery('.products > div:lt('+x1+')').show();
	  
			  if(size_li == x || size_li1 == x1){
					  h1.hide()
			  }
		  }
	  }
	});
	
	var media = 820/1024;
	var videos = 8;
	var download = 5;
	var gaming = 375/1024;
	var directions = 7;
	var websites = 1;
	var emails = 250/1024;
	var usage ;
	
    $( "#slider1" ).slider({
      value:0,
      min: 0,
      max: 100,
      //step: 50,
      slide: function( event, ui ) {
        $( ".emails-input-range" ).val( "" + ui.value );
		usage = ($( ".social-input-range" ).val()*media)+($( ".videos-input-range" ).val()*videos)+($( ".download-input-range" ).val()*download)+($( ".gaming-input-range" ).val()*gaming)+($( ".directions-input-range" ).val()*directions)+($( ".websites-input-range" ).val()*websites)+($( ".emails-input-range" ).val()*emails);      
	  $('#usage').html(((usage)).toFixed(2));
	  }
    });
	
	$( "#slider2" ).slider({
      value:0,
      min: 0,
      max: 100,
      //step: 50,
      slide: function( event, ui ) {
        $( ".websites-input-range" ).val( "" + ui.value );
		usage = ($( ".social-input-range" ).val()*media)+($( ".videos-input-range" ).val()*videos)+($( ".download-input-range" ).val()*download)+($( ".gaming-input-range" ).val()*gaming)+($( ".directions-input-range" ).val()*directions)+($( ".websites-input-range" ).val()*websites)+($( ".emails-input-range" ).val()*emails);
		$('#usage').html(((usage)).toFixed(2));
      }
    });
	
	$( "#slider3" ).slider({
      value:0,
      min: 0,
      max: 100,
      //step: 50,
      slide: function( event, ui ) {
        $( ".directions-input-range" ).val( "" + ui.value );
		usage = ($( ".social-input-range" ).val()*media)+($( ".videos-input-range" ).val()*videos)+($( ".download-input-range" ).val()*download)+($( ".gaming-input-range" ).val()*gaming)+($( ".directions-input-range" ).val()*directions)+($( ".websites-input-range" ).val()*websites)+($( ".emails-input-range" ).val()*emails);
		$('#usage').html(((usage)).toFixed(2));
      }
    });
	
	$( "#slider4" ).slider({
      value:0,
      min: 0,
      max: 100,
      //step: 50,
      slide: function( event, ui ) {
        $( ".gaming-input-range" ).val( "" + ui.value );
		usage = ($( ".social-input-range" ).val()*media)+($( ".videos-input-range" ).val()*videos)+($( ".download-input-range" ).val()*download)+($( ".gaming-input-range" ).val()*gaming)+($( ".directions-input-range" ).val()*directions)+($( ".websites-input-range" ).val()*websites)+($( ".emails-input-range" ).val()*emails);
		$('#usage').html(((usage)).toFixed(2));
      }
    });
	$( "#slider5" ).slider({
      value:0,
      min: 0,
      max: 100,
      //step: 50,
      slide: function( event, ui ) {
        $( ".download-input-range" ).val( "" + ui.value );
		usage = ($( ".social-input-range" ).val()*media)+($( ".videos-input-range" ).val()*videos)+($( ".download-input-range" ).val()*download)+($( ".gaming-input-range" ).val()*gaming)+($( ".directions-input-range" ).val()*directions)+($( ".websites-input-range" ).val()*websites)+($( ".emails-input-range" ).val()*emails);
		$('#usage').html(((usage)).toFixed(2));
      }
    });
	$( "#slider6" ).slider({
      value:0,
      min: 0,
      max: 100,
      //step: 50,
      slide: function( event, ui ) {
        $( ".videos-input-range" ).val( "" + ui.value );
		usage = ($( ".social-input-range" ).val()*media)+($( ".videos-input-range" ).val()*videos)+($( ".download-input-range" ).val()*download)+($( ".gaming-input-range" ).val()*gaming)+($( ".directions-input-range" ).val()*directions)+($( ".websites-input-range" ).val()*websites)+($( ".emails-input-range" ).val()*emails);
		$('#usage').html(((usage)).toFixed(2));
      }
    });
	$( "#slider7" ).slider({
      value:0,
      min: 0,
      max: 100,
      //step: 50,
      slide: function( event, ui ) {
        $( ".social-input-range" ).val( "" + ui.value );
		usage = ($( ".social-input-range" ).val()*media)+($( ".videos-input-range" ).val()*videos)+($( ".download-input-range" ).val()*download)+($( ".gaming-input-range" ).val()*gaming)+($( ".directions-input-range" ).val()*directions)+($( ".websites-input-range" ).val()*websites)+($( ".emails-input-range" ).val()*emails);
		$('#usage').html(((usage)).toFixed(2));
		//console.log(usage);
      }
    });
	

	function calcEstimator(pack){
		
		$('.data-calc-row').slideUp();

		$('.recommenced-packs .' + pack).slideDown()

		$('.recommenced-packs .btn.back').fadeIn()

		return;
	}

	$('.recommenced-packs .btn.back').click(function(){
		$('.data-calc-row').slideDown();
		$('.recommenced-packs .packs-cards').slideUp()
		$(this).hide()
	})
	$('.estimate').on('click',function(e){
		est = $('#usage').html();
		if(est < 600){

			calcEstimator('pack-1');

		}else if(est < 1400){

			// $('.cards').fadeOut();
			// $('.pack-2').fadeIn();

			calcEstimator('pack-2');

		}else {
			calcEstimator('pack-3');
			// $('.cards').fadeOut();
			// $('.pack-1').fadeOut();
		}
		
		
	});	

	$('.single_add_to_cart_button').on('click',function(){
		var count = parseInt($('.header-cart-count').text()) + 1;
		
		$('.header-cart-count').show();
		$('.header-cart-count').text(count);
	});
	
});