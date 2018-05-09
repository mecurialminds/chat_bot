// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$('a.chgimgsrc').click(function(){
    var href = $(this).attr('imgsrc');
    //alert(href);
    $('img.attachment-shop_single').attr('src', href);
    $('img.attachment-shop_single').attr('srcset', href);
});


productDescriptionHeight = $('#tab-description').outerHeight();
relatedHeight = $('.related.products').outerHeight();
if (productDescriptionHeight > relatedHeight) {
    $('.woocommerce-tabs.wc-tabs-wrapper').addClass('addedborder');
} else {
    $('.related.products').addClass('addedborder');
}

//$('.ivpa_term.ivpa_clicked').click(function(){ return false; });

// Place any jQuery/helper plugins in here.
