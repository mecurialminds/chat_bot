new SmartBanner({
  daysHidden: 15,   // days to hide banner after close button is clicked (defaults to 15)
  daysReminder: 0, // days to hide banner after "VIEW" button is clicked (defaults to 90)
  //appStoreLanguage: 'us', // language code for the App Store (defaults to user's browser language)
  title: 'Ooredoo Qatar',
  author: 'Ooredoo Qatar',
  button: 'view',
  store: {
    android: 'In Google Play'
  },
  price: {
    android: 'FREE'
  },
  icon:'https://www.ooredoo.qa/cs/OoredooQatar/Images/app_logo.png'
});

var origHtmlMargin = parseFloat($('html').css('margin-top'));

$(function() {

var iPad = navigator.userAgent.match(/iPad/i) != null;
var iPhone = navigator.userAgent.match(/iPhone/i) != null;
var safari = navigator.userAgent.indexOf("Safari") > -1;
var standalone = navigator.standalone;
var appBannerID = $('meta[name=apple-itunes-app_banner]').attr("content");
if (!standalone && safari) { safari = false};

if (appBannerID != null) {
  appBannerID = appBannerID.replace('app-id=','');
  if ((iPad || iPhone) && (!safari)) {
    if (window.devicePixelRatio < 3) {

      var headNode = document.getElementsByTagName("head")[0];
      var sbNode = document.createElement('meta');
      sbNode.name = 'apple-itunes-app';
      sbNode.content = 'app-id='+ appBannerID;
      headNode.appendChild(sbNode);

      return false;
    }
    $.getJSON('http://itunes.apple.com/lookup?id=' + appBannerID + '&callback=?', function(json) {
      if (json != null) {
        var artistName, artistViewUrl, artworkUrl60, averageUserRating, formattedPrice, trackCensoredName, averageUserRatingForCurrentVersion;
        artistName = json.results[0].artistName;
        artistViewUrl = json.results[0].artistViewUrl;
        artworkUrl60 = json.results[0].artworkUrl60;
        averageUserRating = json.results[0].averageUserRating;
        formattedPrice = json.results[0].formattedPrice;
        averageUserRatingForCurrentVersion = json.results[0].averageUserRatingForCurrentVersion;
        trackCensoredName = json.results[0].trackCensoredName;

        var banner = '<div class="smart-banner">';
        banner += '<a href="#" id="swb-close" onclick="CloseSmartBanner()">X</a>';
        banner += '<img src="' + artworkUrl60 + '" alt="" class="smart-glossy-icon" />';
        banner += '<div id="swb-info"><strong>' + trackCensoredName + '</strong>';
        banner += '<span>' + artistName + '</span>';
        banner += '<span class="rating-static rating-' + averageUserRating.toString().replace(".", "") + '"></span>';
        banner += '<span>' + formattedPrice + '</span></div>';
        banner += '<a href="' + artistViewUrl + '" id="swb-save">View</a></div>';

        $('body').append(banner);
        $('.smart-banner').stop().animate({top:0},300);
        $('html').animate({marginTop:origHtmlMargin+78},300);
      }
    });
  }
}
});

function CloseSmartBanner() {
$('.smart-banner').stop().animate({top:-82},300);
$('html').animate({marginTop:origHtmlMargin},300);
}
