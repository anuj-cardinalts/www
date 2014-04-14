// mycode.js

// <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
// <script type="text/javascript" charset="utf-8" src="childbrowser.js"></script>


function init() {
    document.addEventListener("deviceready", deviceInfo, true);
    
    cordova.addConstructor(function() {

        cordova.addPlugin("childBrowser", new ChildBrowser());

    });
}

function RCS_news()
{
//    alert("RCS Newsletter displays here");

	window.plugins.childBrowser.showWebPage("http://www.rainbowcs.org", { showLocationBar: true });
//	window.plugins.childbrowser.showWebPage("http://www.rainbowcs.org/web/news/newsletter.php", { showLocationBar: true });
}

function RCS_cal()
{
    alert("RCS Calendar displays here");

//    window.plugins.childbrowser.showWebPage("http://www.rainbowcs.org/web/calendar.php", { showLocationBar: true });
}
