// ==UserScript==
// @name         YouTube video focuser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enforce focusing on a video element when you are on the top of the page
// @author       https://github.com/ykhr53
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

window.onscroll = function() {
    if (document.documentElement.scrollTop ==0) {
        document.querySelector('#movie_player').focus();
    }
};
