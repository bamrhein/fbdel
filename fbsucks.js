// Run: paste into console. Then do "dp.main();"
var dp = (function () {
    var api = {};

    function is_delete(e) {
        // console.log("is_delete");
        try {
            var ajaxify = e.getAttribute("ajaxify") || "";
            return ajaxify.indexOf("delete") !== -1 || e.innerHTML.indexOf("Delete") !== -1;
        } catch (e) {
            return false;
        }
    }

    function clickable(e) {
        // console.log("clickable");
        return e && (typeof(e.click) !== "undefined");
    }

    api.load_del_buttons = function () {
        console.log("loading delete buttons");
        var els = document.getElementsByClassName("_42ft _42fu _4-s1 _2agf _p _42gx");
        for (var k in els) {
            if (clickable(els[k])) { els[k].click(); }
        }
    };

    api.delete_shit = function () {
        var els = document.getElementsByClassName("_54nc");
        for (var k in els) {
            if (is_delete(els[k]) && clickable(els[k])) {
                console.log("clicking delete butan!");
                els[k].click();
            }
        }
    };

    api.load_more = function () {
        var more = document.getElementsByClassName("pam uiBoxLightblue  uiMorePagerPrimary");
        if (typeof more != 'undefined' && clickable(more[0])) {
            more[0].click();
            console.log("attempting to load more posts");
           //  setTimeout(function(){
           //      api.load_del_buttons();
           //      api.delete_shit();
           // }, 1000);
        }
    };

    api.main = function () {
        setInterval(function () {
            api.load_del_buttons();
            api.delete_shit();
            api.load_more();
        }, 1000);
    };

    return api;
})();