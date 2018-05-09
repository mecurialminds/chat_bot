var __lc = {};
__lc.license = 3528751;
__lc.group = 9;

// var LC_API = LC_API || {};
// LC_API.open_chat_window();
//alert("telenor live chat");
var LC_API = LC_API || {};
LC_API.on_after_load = function()
{
	$jq(document).ready(function() {
		$jq('#chat_area').hide();
	});
};


LC_API.on_before_load = function()
{
	LC_API.open_chat_window();
};

(function() {
 var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
 lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
 var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
})();