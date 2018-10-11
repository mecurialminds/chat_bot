function readCookie(key) {
  var name = key + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ')
      c = c.substring(1);
    if (c.indexOf(name) == 0)
      return c.substring(name.length, c.length);
  }
  return "";
}

/* LIVE CHAT COMPONENT */
function getCurrentLanguage() {
    var nameEQ = "CUSTOMER_CUSTOM_LOCAL=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.__lc = window.__lc || {};
window.__lc.license = 8726056;

if (getCurrentLanguage() == "ar_QA") {
  window.__lc.group = 2;
} else {
  window.__lc.group = 1;
}

(function() {
var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
})();

var LC_API = LC_API || {};
LC_API.on_chat_window_minimized = function()
{
	("#livechat-compact-container").show();
};

window.__lc.on_chat_window_minimized = function()
{
	("#livechat-compact-container").show();
};

/* LIVE CHAT COMPONENT */

$(function () {



  $('form[action="/portal/OoredooQatar/search_page"]').keypress(function (e) {
    if (e.which == 13) {
      $('form[action="/portal/OoredooQatar/search_page"]').submit();
    }
  });

  $(document).on( 'click',
                  '._ooredoo_website_header_ ._ooredoo_website_main_navbar_ .dropdown-menu',
                  function (e) {
    e.stopPropagation();
  });


  $(document).on( 'click',
                  '._ooredoo_website_header_ ._ooredoo_website_main_navbar_ .dropdown-menu a.not_clickable',
                  function (e) {
                    return false;
  });


  $("._ooredoo_website_header_ ._ooredoo_website_main_navbar_ .dropdown-menu a[href*='live-chat-help'] ").attr({
      "onclick":"LC_API.open_chat_window();return false;",
      "href":"#"
  });

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.

  var lastScrollTop  = 0
  function debounce(func, wait, immediate) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  }

    $(window).scroll(debounce(function () {
          actualScroll = $(window).scrollTop();
          if (actualScroll > lastScrollTop) {
              $("._ooredoo_website_header_ ._ooredoo_website_secondary_navbar_").slideUp("fast");

        }
        else {
              $("._ooredoo_website_header_ ._ooredoo_website_secondary_navbar_").slideDown("fast");

          }
          lastScrollTop = $(window).scrollTop();
    }, 500));
 //  $(window).bind('DOMMouseScroll', function(e){
 //   if(e.originalEvent.detail > 0) {
 //      $("._ooredoo_website_header_ ._ooredoo_website_secondary_navbar_").slideUp("fast");
 //   }else {
 //      $("._ooredoo_website_header_ ._ooredoo_website_secondary_navbar_").slideDown("fast");
 //   }
 // });
 //
 // //IE, Opera, Safari
 // $(window).bind('mousewheel', function(e){
 //   if(e.originalEvent.wheelDelta < 0) {
 //     $("._ooredoo_website_header_ ._ooredoo_website_secondary_navbar_").slideUp("fast");
 //  }else {
 //     $("._ooredoo_website_header_ ._ooredoo_website_secondary_navbar_").slideDown("fast");
 //  }
 // });


  $('._ooredoo_website_header_ ._ooredoo_website_main_navbar_ #_ooredoo_website_navbar_collapse>ul>.dropdown').hover(function(e) {
    $(this).addClass('open');
  }, function() {
    $('._ooredoo_website_header_ ._ooredoo_website_main_navbar_ #_ooredoo_website_navbar_collapse>ul>.dropdown').hover(function(e) {
      return false;
    });
    $(this).removeClass('open');
  });



  /* AUTOCOMPLETE SEARCH COMPONENT */
  // Defining the local dataset
  var search_terms_set = [];
  // Constructing the suggestion engine
  var search_terms_set = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: search_terms_set
  });
  // Initializing the typeahead
  $('#_ooredoo_website_main_navbar_search_input_field_,#_ooredoo_website_main_navbar_search_input_field_mobile_').typeahead({
      hint: true,
      highlight: true,
      minLength: 1,
      class: "_ooredoo_website_main_navbar_search_input_field_",
      style: {display: "none"}
  }, {
      name: 'terms',
      source: search_terms_set
  });
  /* AUTOCOMPLETE SEARCH COMPONENT - END */
  $("._ooredoo_website_header_ ._ooredoo_website_secondary_navbar_ #_ooredoo_website_main_navbar_search_btn_").on("click", function () {
    $(this).hide();
    $("._ooredoo_website_header_ ._ooredoo_website_secondary_navbar_ .twitter-typeahead, ._ooredoo_website_header_ ._ooredoo_website_secondary_navbar_  #_ooredoo_website_main_navbar_search_close_btn_").fadeIn("fast").css("display", "inline-block");
  });
  $("._ooredoo_website_header_ ._ooredoo_website_secondary_navbar_  #_ooredoo_website_main_navbar_search_close_btn_").on("click", function () {
    $("._ooredoo_website_header_ ._ooredoo_website_secondary_navbar_ .twitter-typeahead, ._ooredoo_website_header_ ._ooredoo_website_secondary_navbar_  #_ooredoo_website_main_navbar_search_close_btn_").hide();
    $("._ooredoo_website_header_ ._ooredoo_website_secondary_navbar_ #_ooredoo_website_main_navbar_search_btn_").fadeIn("fast");
  });
  //MOBILE
  $("._ooredoo_website_ ._ooredoo_website_header_ .twitter-typeahead input").on("input", function () {
    if ($(this).val()) {
      $("._ooredoo_website_header_ ._ooredoo_website_main_navbar_  #_ooredoo_website_main_navbar_search_close_btn_").show();
    } else {
      $("._ooredoo_website_header_ ._ooredoo_website_main_navbar_  #_ooredoo_website_main_navbar_search_close_btn_").hide();
    }
  });
  $("._ooredoo_website_header_ ._ooredoo_website_main_navbar_  #_ooredoo_website_main_navbar_search_close_btn_").on("click", function () {
    $("._ooredoo_website_ ._ooredoo_website_header_ .twitter-typeahead input").val("");
    $(this).hide();
  });



  if($('#_ooredoo_website_social_media_feeds_').length){
    $('#_ooredoo_website_social_media_feeds_').socialfeed({
      // FACEBOOK
      facebook:{
          accounts: ['@ooredooqatar'],          //Array: Specify a list of accounts from which to pull wall posts
          limit: 3,                             //Integer: max number of posts to load
          access_token: '144093929401401|39cd635cc74e0b09b68c73e3b9af5b0d'       //String: "APP_ID|APP_SECRET"
      },

      // TWITTER
      twitter:{
          accounts: ['@ooredooqatar'],                //Array: Specify a list of accounts from which to pull tweets
          limit: 3,                                   //Integer: max number of tweets to load
          consumer_key: 'ovTF3Yb1gmA1ikSasOtmg',          //String: consumer key. make sure to have your app read-only
          consumer_secret: 'tuv3dr7qjXKSlAW8S7DXtKj6eRt0ZKtRHoErAbnNQ' //String: consumer secret key. make sure to have your app read-only
       },
      // GENERAL SETTINGS
      length:80,                                     //Integer: For posts with text longer than this length, show an ellipsis.
      show_media:false,                                //Boolean: if false, doesn't display any post images

      template_html:
      '<div class="col-xs-12 clearfix social-feed-element {{?!it.moderation_passed}}hidden{{?}}"\
        dt-create="{{=it.dt_create}}" social-feed-id="{{=it.id}}">\
        <div class="content">\
          <a class="pull-left" href="{{=it.author_link}}" target="_blank">\
            <img class="media-object" src="{{=it.author_picture}}">\
          </a>\
          <div class="media-body">\
            <p>\
              <span class="author-title">\
                {{=it.author_name}}\
                | <small class="muted"> {{=it.time_ago}}</small>\
              </span>\
              <i class="pull-right fa fa-{{=it.social_network}}" ></i>\
            </p>\
            <div class="text-wrapper">\
              <p class="social-feed-text"><a href="{{=it.link}}" target="_blank" class="read-button">{{=it.text}}</a></p>\
            </div>\
          </div>\
        </div>\
      </div>',
      date_format: "ll",                              //String: Display format of the date attribute (see http://momentjs.com/docs/#/displaying/format/)
      date_locale: "en",                              //String: The locale of the date (see: http://momentjs.com/docs/#/i18n/changing-locale/)
      moderation: function(content) {                 //Function: if returns false, template will have class hidden
          return  (content.text) ? content.text.indexOf('fuck') == -1 : true;
      },
      callback: function() {                          //Function: This is a callback function which is evoked when all the posts are collected and displayed
          console.log("All posts collected!");
      }
    });
  }



});



/**
 * This plugin do the magic to match heights of the boxes with the same value in data-mh attribute
 * add data-mh="unified-value" to the boxes that need to match their heights
 * Author : http://brm.io/jquery-match-height
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){var b=-1,c=-1,d=function(a){return parseFloat(a)||0},e=function(b){var e=a(b),f=null,g=[];return e.each(function(){var b=a(this),e=b.offset().top-d(b.css("margin-top")),h=g.length>0?g[g.length-1]:null;null===h?g.push(b):Math.floor(Math.abs(f-e))<=1?g[g.length-1]=h.add(b):g.push(b),f=e}),g},f=function(b){var c={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof b?a.extend(c,b):("boolean"==typeof b?c.byRow=b:"remove"===b&&(c.remove=!0),c)},g=a.fn.matchHeight=function(b){var c=f(b);if(c.remove){var d=this;return this.css(c.property,""),a.each(g._groups,function(a,b){b.elements=b.elements.not(d)}),this}return this.length<=1&&!c.target?this:(g._groups.push({elements:this,options:c}),g._apply(this,c),this)};g.version="master",g._groups=[],g._throttle=80,g._maintainScroll=!1,g._beforeUpdate=null,g._afterUpdate=null,g._rows=e,g._parse=d,g._parseOptions=f,g._apply=function(b,c){var h=f(c),i=a(b),j=[i],k=a(window).scrollTop(),l=a("html").outerHeight(!0),m=i.parents().filter(":hidden");return m.each(function(){var b=a(this);b.data("style-cache",b.attr("style"))}),m.css("display","block"),h.byRow&&!h.target&&(i.each(function(){var b=a(this),c=b.css("display");"inline-block"!==c&&"flex"!==c&&"inline-flex"!==c&&(c="block"),b.data("style-cache",b.attr("style")),b.css({display:c,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),j=e(i),i.each(function(){var b=a(this);b.attr("style",b.data("style-cache")||"")})),a.each(j,function(b,c){var e=a(c),f=0;if(h.target)f=h.target.outerHeight(!1);else{if(h.byRow&&e.length<=1)return void e.css(h.property,"");e.each(function(){var b=a(this),c=b.attr("style"),d=b.css("display");"inline-block"!==d&&"flex"!==d&&"inline-flex"!==d&&(d="block");var e={display:d};e[h.property]="",b.css(e),b.outerHeight(!1)>f&&(f=b.outerHeight(!1)),c?b.attr("style",c):b.css("display","")})}e.each(function(){var b=a(this),c=0;h.target&&b.is(h.target)||("border-box"!==b.css("box-sizing")&&(c+=d(b.css("border-top-width"))+d(b.css("border-bottom-width")),c+=d(b.css("padding-top"))+d(b.css("padding-bottom"))),b.css(h.property,f-c+"px"))})}),m.each(function(){var b=a(this);b.attr("style",b.data("style-cache")||null)}),g._maintainScroll&&a(window).scrollTop(k/l*a("html").outerHeight(!0)),this},g._applyDataApi=function(){var b={};a("[data-match-height], [data-mh]").each(function(){var c=a(this),d=c.attr("data-mh")||c.attr("data-match-height");b[d]=d in b?b[d].add(c):c}),a.each(b,function(){this.matchHeight(!0)})};var h=function(b){g._beforeUpdate&&g._beforeUpdate(b,g._groups),a.each(g._groups,function(){g._apply(this.elements,this.options)}),g._afterUpdate&&g._afterUpdate(b,g._groups)};g._update=function(d,e){if(e&&"resize"===e.type){var f=a(window).width();if(f===b)return;b=f}d?-1===c&&(c=setTimeout(function(){h(e),c=-1},g._throttle)):h(e)},a(g._applyDataApi);var i=a.fn.on?"on":"bind";a(window)[i]("load",function(a){g._update(!1,a)}),a(window)[i]("resize orientationchange",function(a){g._update(!0,a)})});



/**
    Toggle active class for panels
 */
$('.panel-heading a').click(function() {
    var thisHeading = $(this).parents('.panel-heading');
    thisHeading.toggleClass('active')
    $(this).parents('.panel-group').find('.panel-heading').not(thisHeading).removeClass('active');
});




/* THE BELOW IS A COMPONENT FOR THE PROMOTIONAL POPUPS WHICH APPERS ON THE CORNER, WE USE IT FOR THE SURVEY POPUP FOR EXAMPLE */
function disable_promotional_popup() {
  var d = new Date();
  d.setTime(d.getTime() + (90 * 24 * 60 * 60 * 1000));
  document.cookie = "disable_promotional_popup=disabled;expires="+ d.toUTCString();
  return true;
}

function creatPromotionalPopup (options) {

  if (readCookie("CUSTOMER_CUSTOM_LOCAL") == "ar_QA") {
    var actionsArea = '';
    $.each( options.buttons, function( i, l ){
      var el = '';
      var attributes = '';
      if (l.action == "dismiss") {
        if (l.url != "") {
          attributes = 'onclick="disable_promotional_popup(); window.location.href=\''+l.url+'\';"';
        } else {
          attributes = 'onclick="disable_promotional_popup();" data-dismiss="modal" ';
        }
        el = '<button type="button" class="btn ' + l.classes + '" ' + attributes + '>' + l.titleAr + '</button>'
      } else {
        if (l.url != "") {
          attributes = 'onclick="window.location.href=\''+l.url+'\';"';
        }
      }
      actionsArea += el;
    });
    var html = '<div class="modal fade" tabindex="-1" role="dialog" data-backdrop="false" id="_ooredoo_promotional_corner_popup_">'
                  +'<div class="modal-dialog" role="document">'
                    +'<div class="modal-content">'
                      +'<div class="modal-header">'
                        + (options.hasClose ? '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' : '')
                        +'<h4 class="modal-title">' + options.titleAr + '</h4>'
                      +'</div>'
                      +'<div class="modal-body">'
                        +'<p>' + options.contentAr + '</p>'
                      +'</div>'
                      +'<div class="modal-footer">' + actionsArea + '</div>'
                    +'</div>'
                  +'</div>'
                +'</div>';

  } else {
    var actionsArea = '';
    $.each( options.buttons, function( i, l ){
      var el = '';
      var attributes = '';
      if (l.action == "dismiss") {
        if (l.url != "") {
          attributes = 'onclick="disable_promotional_popup(); window.location.href=\''+l.url+'\';"';
        } else {
          attributes = 'onclick="disable_promotional_popup();" data-dismiss="modal" ';
        }
        el = '<button type="button" class="btn ' + l.classes + '" ' + attributes + '>' + l.title + '</button>'
      } else {
        if (l.url != "") {
          attributes = 'onclick="window.location.href=\''+l.url+'\';"';
        }
      }
      actionsArea += el;
    });
    var html = '<div class="modal fade" tabindex="-1" role="dialog" data-backdrop="false" id="_ooredoo_promotional_corner_popup_">'
                  +'<div class="modal-dialog" role="document">'
                    +'<div class="modal-content">'
                      +'<div class="modal-header">'
                        + (options.hasClose ? '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' : '')
                        +'<h4 class="modal-title">' + options.title + '</h4>'
                      +'</div>'
                      +'<div class="modal-body">'
                        +'<p>' + options.content + '</p>'
                      +'</div>'
                      +'<div class="modal-footer">' + actionsArea + '</div>'
                    +'</div>'
                  +'</div>'
                +'</div>';
  }
  if (readCookie("disable_promotional_popup") != "disabled") {
    $("body").append(html);
    $("#_ooredoo_promotional_corner_popup_").modal();
  }
}
/* THE ABOVE IS A COMPONENT FOR THE PROMOTIONAL POPUPS WHICH APPERS ON THE CORNER, WE USE IT FOR THE SURVEY POPUP FOR EXAMPLE */
/* END OF PROMOTIONAL CONPONENT*/





/* THE BELOW IS A COMPONENT FOR THE ERROR NOTIFICATION STICKED AREA WHICH APPERS ON THE TOP, WE USE IT FOR THE SHOWING THE DOWNTIME ERROR FOR EXAMPLE */
/* GETTING THE SERVER TIME */
var xmlHttp;
function srvTime(){
  try {
    //FF, Opera, Safari, Chrome
    xmlHttp = new XMLHttpRequest();
  }
  catch (err1) {
    //IE
    try {
      xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
    }
    catch (err2) {
      try {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
      }
      catch (eerr3) {
        alert("AJAX not supported");
      }
    }
  }
  xmlHttp.open('HEAD',window.location.href.toString(),false);
  xmlHttp.setRequestHeader("Content-Type", "text/html");
  xmlHttp.send('');
  return xmlHttp.getResponseHeader("Date");
}

function createAlertNotificaiton (errorText, errorTextArabic, time_start, time_end) {
  var error = readCookie("CUSTOMER_CUSTOM_LOCAL") == "ar_QA" ? errorTextArabic : errorText ;
  var html = '<div class="alert alert-danger  alert-dismissible" role="alert" style="border-radius: 0px;">\
                <div class="container">\
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                  <div class="row"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> <strong>Oops!</strong>, ' + error + '</div>\
                </div>\
              </div>';
  var server_timestamp = srvTime();
  var server_date = new Date(server_timestamp);
  var currentDateTime = new Date(
      server_date.getFullYear(),
      server_date.getMonth(),
      server_date.getDate(),
      server_date.getHours(),
      server_date.getMinutes(),
      server_date.getSeconds()
  );
  if(currentDateTime.getTime() >= time_start && currentDateTime.getTime() <=time_end) {
    $("._ooredoo_website_>nav._ooredoo_website_header_").prepend(html);
  }
}
/* THE ABOVE IS A COMPONENT FOR THE ERROR NOTIFICATION STICKED AREA WHICH APPERS ON THE TOP, WE USE IT FOR THE SHOWING THE DOWNTIME ERROR FOR EXAMPLE */
/* END OF ERROR NOTIFICATION CONPONENT*/
$(document).ready( function() {

  // add GTM

  var GTMscript = "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T9Z8ST');</script>";
  var GTMiframe = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T9Z8ST" height="0" width="0" style="display:none;visibility:hidden"></iframe>'
  $('head').prepend(GTMscript);
  $('body').prepend(GTMiframe);


  //handle google data layer on call to action
  dataLayer = dataLayer || [];
  //login link desktop
  $('.container._ooredoo_website_main_navbar_ ul.nav.navbar-nav._ooredoo_website_authentication_btns_ a.btn.btn-primary').click(function(e){
     e.preventDefault();
     dataLayer.push({
       'event' : 'fire_event',
       'category' :' portal/OoredooQatar/home',
       'action' : ' Button Click ',
       'label' : 'Login',
       'eventCallback': function() {
         location.href = $('.container._ooredoo_website_main_navbar_ ul.nav.navbar-nav._ooredoo_website_authentication_btns_ a.btn.btn-primary').attr('href');
       }
    });

  });
  //login link Mobile
  $('#_ooredoo_website_navbar_collapse ._direct_link_._grey_background_.hidden.visible-xs:eq(1) a').click(function(e){
     e.preventDefault();
     dataLayer.push({
       'event' : 'fire_event',
       'category' :' portal/OoredooQatar/home',
       'action' : ' Button Click ',
       'label' : 'Login',
       'eventCallback': function() {
         location.href = $('#_ooredoo_website_navbar_collapse ._direct_link_._grey_background_.hidden.visible-xs:eq(1) a').attr('href');
       }
    });

  });
  //Register link
  $('.container._ooredoo_website_main_navbar_ ul.nav.navbar-nav._ooredoo_website_authentication_btns_ a.btn.btn-inverse').click(function(e){
     e.preventDefault();
     dataLayer.push({'event' :'fire_event',
                      'category' :'portal/OoredooQatar/home',
                      'action' :'Button Click ',
                      'label' :'Register',
                      'eventCallback': function() {
                        location.href = $('.container._ooredoo_website_main_navbar_ ul.nav.navbar-nav._ooredoo_website_authentication_btns_ a.btn.btn-inverse').attr('href');
                      }
                     });
  });

  //top up
  $('section.container .row .col-xs-12.col-sm-4.clearfix:nth-child(1) ._ooredoo_box_link_ a').click(function(e){
     e.preventDefault();
     dataLayer.push({'event' :'fire_event',
                      'category' :'Top-Up',
                      'action' :'Button Click ',
                      'label' :'Hala Service',
                      'eventCallback': function() {
                        location.href = $('section.container .row .col-xs-12.col-sm-4.clearfix:nth-child(1) ._ooredoo_box_link_ a').attr('href');
                      }
                     });
  });
  //pay bill
  $('section.container .row .col-xs-12.col-sm-4.clearfix:nth-child(2) ._ooredoo_box_link_ a').click(function(e){
     e.preventDefault();
     dataLayer.push({'event' :'fire_event',
                      'category' :'portal/OoredooQatar/home',
                      'action' :'Button Click ',
                      'label' :'PayBill',
                      'eventCallback': function() {
                        location.href = $('section.container .row .col-xs-12.col-sm-4.clearfix:nth-child(2) ._ooredoo_box_link_ a').attr('href');
                      }
                     });
  });
  //buy now
  $('#_ooredoo_desktop_grids_mobile_carousel_ .carousel-inner .thumbnail._ooredoo_thumbnail_box_ .caption p a').click(function(e){
     e.preventDefault();
     targetLink = $(this).attr('href');
     dataLayer.push({'event' :'fire_event',
                      'category' :'portal/OoredooQatar/home',
                      'action' :'Button Click ',
                      'label' :'PayBill',
                      'eventCallback': function() {
                        location.href = targetLink;
                      }
                     });
  });

})
