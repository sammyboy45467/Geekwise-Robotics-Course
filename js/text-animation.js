(function($){
    var a = '@-webkit-keyframes b { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } } @-moz-keyframes b { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } } @keyframes b { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } } ';var c;var d;var e = "";var f;var k;var o;$.fn.typewriting = function(g,h,i){this.text("A");var j=this.height();this.text("");d=0;e=g;f=$.extend({typing_interval:150,blink_interval:"0.7s",cursor_color:"black"},h);k=i;var l='.typingCursor::after{content:"";width:10px;height:'+j+'px;margin-left:5px;display:inline-block;vertical-align:bottom;background-color:'+f.cursor_color+';-webkit-animation:b '+f.blink_interval+' infinite;-moz-animation:b '+f.blink_interval+' infinite;animation:b '+f.blink_interval+' infinite;}';$('head').append('<style type="text/css">'+a+l+'</style>');c=this.addClass("typingCursor");mm();};$.fn.rewrite=function(g,i){d=0;e=g;k=i;mm();};function mm(){if(d<=e.length){var n=getText();if(n.slice(-1)=="<")o=true;if(n.slice(-1)==">")o=false;c.html(n);if(o)mm();else setTimeout(function(){mm();},f.typing_interval);}else{if(k)k();}}function getText(){var p=e.slice(0,d);d++;return p;}
}(jQuery));
$(document).ready( function(){
    setTimeout( function(){
        $('.terminal').typewriting( "LOADING>>>", {
            "typing_interval": 200,
            "blink_interval": "0.5s",
            "cursor_color": "#447799"
        }, function() {
            console.log( "END" );
        });
        setTimeout( function(){
            $('.terminal').rewrite( ">>>>>>>>>>", function(){
                console.log( "END, 2." );
            });
        }, 3300);
    }, 1000);
});

