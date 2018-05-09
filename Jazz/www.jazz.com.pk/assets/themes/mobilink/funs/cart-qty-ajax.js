// JavaScript Document
var valPlus,valMinus,minus,amount,item_hash,thisProductQuantityID,plus;
var priceChange;
$(document).ready(function() {
	/* More Product */
	$('.plus').off().on('click',function(e){
		valPlus = parseInt($(this).attr('data-qty'));
		thisProductQuantityID = $(this).parent().parent().attr('id');
		$("#"+thisProductQuantityID +' .input-text.qty.text').val( valPlus+1 );

		$(this).attr('data-qty',parseInt($("#"+thisProductQuantityID +' .input-text.qty.text').val()));
		minus = $(this).closest('.quantity').find('.minus').attr('data-qty',valPlus+1);
		amount = $(this).parent().parent().parent().find('.product-subtotal').find('.amount').text();
		priceChange = $(this).parent().parent().parent().find('.product-subtotal').find('.amount');
		item_hash = $( this ).parent().find('.input-text').attr( 'name' ).replace(/cart\[([\w]+)\]\[qty\]/g, "$1");
		updateCart('qty_cart',valPlus+1,item_hash,priceChange,cart_qty_ajax.ajax_url);
	});
	
	/* Less Product */
	$('.minus').off().on('click',function(e){
		valMinus = parseInt($(this).attr('data-qty'));
		thisProductQuantityID = $(this).parent().parent().attr('id');
		if( valMinus > 1 ) {
			$("#"+thisProductQuantityID +' .input-text.qty.text').val( valMinus-1 );
			$(this).attr('data-qty',parseInt($("#"+thisProductQuantityID +' .input-text.qty.text').val()));
			plus = $(this).closest('.quantity').find('.plus').attr('data-qty',valMinus-1);
			priceChange = $(this).parent().parent().parent().find('.product-subtotal').find('.amount');
			item_hash = $( this ).parent().find('.input-text').attr( 'name' ).replace(/cart\[([\w]+)\]\[qty\]/g, "$1");
			
			updateCart('qty_cart',valMinus-1,item_hash,priceChange,cart_qty_ajax.ajax_url);
		}
	});

	/* Update Cart */
	function updateCart( action,quantity,hash,amount,url ){

		var data = {
			action: action,
			quantity: quantity,
			hash : hash
		};

		$.post( url, data, function( response ) {
				var json = $.parseJSON(response);
				amount.text( json.product );
				$('.cart-subtotal').find('td').html(json.sub_total);
				$('.order-total').find('td').html(json.total);
				console.log(hash);
				$('.c-'+hash).find('.quantity').text('Quantity: '+quantity);
				$('.c-'+hash).find('.price').text(json.product);
				$('.span-subtotal-cart').html(json.sub_total);
				$('.cart-count-header').text(json.total_cart_count);
				$('.header-cart-count').text(json.total_cart_count);
			});
	}
});