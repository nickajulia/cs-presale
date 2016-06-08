// leadpages_input_data variables come from the template.json "variables" section
var leadpages_input_data = {};
var requestedHeight = 600;
var requestedHeight = 3421;




$(function(){
  $(window).on('load', function () {

var getEnvironment = function () {
    var env;

    if (window.location.pathname.indexOf('preview') !== -1) {
        env = 0; // preview
    } else if ((!!window.LeadPage && !!window.LeadPage.editor) || window.location.hostname === 'localhost') {
        env = 1;  // builder
    } else if (window._phantom || window.callPhantom) {
        env = 2; // screenshot service
    } else {
        env = 3; // production / published LeadPage
    }

    return env;
};

//Show the contents during builder mode

if (getEnvironment() === 3) {
    $('.carousel').carousel({
    interval: 3000
});
    $('#exp1').remove();
}




 });
});
