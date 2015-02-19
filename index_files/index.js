var windowsInternetExplorer = false;
function detectBrowser()
{
    windowsInternetExplorer = false;
    var appVersion = navigator.appVersion;
    if ((appVersion.indexOf("MSIE") != -1) &&
        (appVersion.indexOf("Macintosh") == -1))
    {
        windowsInternetExplorer = true;
    }
}

function onPageLoad()
{
    detectBrowser();
    fixupIEPNG("id1", "index_files/transparent.gif");
    fixupIEPNG("id2", "index_files/transparent.gif");
    fixupIEPNG("id3", "index_files/transparent.gif");
    fixupIEPNG("id4", "index_files/transparent.gif");
    fixupIEPNG("id5", "index_files/transparent.gif");
    fixupIEPNG("id6", "index_files/transparent.gif");
    fixupIEPNG("id7", "index_files/transparent.gif");
    fixupIEPNG("id8", "index_files/transparent.gif");
    fixupIEPNG("id9", "index_files/transparent.gif");
    fixupIEPNG("id10", "index_files/transparent.gif");
    fixupIEPNG("id11", "index_files/transparent.gif");
    return true;
}

var inImgPropertyChanged = false;
function imgPropertyChanged()
{
    if ((window.event.propertyName == "src") && (! inImgPropertyChanged))
    {
        inImgPropertyChanged = true;
        var el = window.event.srcElement;
        if (el.src != smallTransparentGif)
        {
            el.filters.item(0).src = el.src;
            el.src = smallTransparentGif;
        }
        inImgPropertyChanged = false;
    }
}

var smallTransparentGif = "";
function fixupIEPNG(strImageID, transparentGif) 
{
    smallTransparentGif = transparentGif;
    if (windowsInternetExplorer)
    {
        var img = document.getElementById(strImageID);
        if (img)
        {
            var src = img.src;
            img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')";
            img.src = transparentGif;
            img.attachEvent("onpropertychange", imgPropertyChanged);
        }
    }
}

