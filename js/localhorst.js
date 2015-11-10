/*
 * LOCALHORST
 * js-handler for localhorst startpage
 *
 * file: js/localhorst.js
 * v0.1 / 2015.11.10
 *
 * (c) 2015 Bernd Busse
 */

var GOOGLE_URL = "http://googl.com/#"

function search_google() {
    var args = $("#google_search").serialize();
    if (args == "q=") { // empty query
        return false;
    }
    window.location = GOOGLE_URL + args;
}

