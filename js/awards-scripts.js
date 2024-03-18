   /*
    * jQuery hashchange event - v1.3 - 7/21/2010
    * http://benalman.com/projects/jquery-hashchange-plugin/
    *
    * Copyright (c) 2010 "Cowboy" Ben Alman
    * Dual licensed under the MIT and GPL licenses.
    * http://benalman.com/about/license/
    */
    (function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}(document.documentMode != undefined)&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);

       // SLIDE PANEL SCRIPT
       jQuery(document).ready(function($){

           // On clicking a target update the hash
          $('#page-container, #sponsor-panel, #content-panel').on('click', '.panelTrigger', function(event){
              var hash = $( this ).attr('data-hash');
              location.hash = hash;
          });

           // Close the SPONSOR panel
           $('#sponsor-panel').on('click', function(event){
               if( $(event.target).is('#sponsor-panel') || $(event.target).is('#sponsor-panel-close') ) {
                   history.pushState("", document.title, window.location.pathname);
                   $('#sponsor-panel').removeClass('is-visible');

                   event.preventDefault();
               }
           });

           // Close the CONTENT panel
           $('#content-panel').on('click', function(event){
               if( $(event.target).is('#content-panel') || $(event.target).is('#content-panel-close') ) {
                   history.pushState("", document.title, window.location.pathname);
                   $('#content-panel').removeClass('is-visible');

                   event.preventDefault();
               }
           });


           // When the hash changes fill panel content and open, or close
           $(window).hashchange( function(event){
               var hash = window.location.hash.substring(1);
                   // Exclude any page hash that matches the below options
                   // These are placeholders to be updated as needed
                   // if (hash.match("^sponsor") && hash != "option1" && hash != "option2") {

                    // Check if there is a hash in URL and whether a corresponding element with data attribute exists.
               if ( (hash != "") && ($('*[data-hash="' + hash + '"]').length) ) {
                  var panelTitle = $('*[data-hash="' + hash + '"]').attr('data-title');
                  var htmlString = $('*[data-content="' + hash + '"]').html();
                  var sponsorHtmlString = $('*[data-hash="' + hash + '"]').html();
                  // console.log( htmlString );
                  if (hash.match("^sponsor")) {
                      $( '#sponsor-panelTitle' ).html( panelTitle );
                      $( '#sponsor-profilePanelContent' ).html( sponsorHtmlString );
                      $( '#sponsor-panel' ).addClass('is-visible');
                  } else {
                      $( '#content-panelTitle' ).html( panelTitle );
                      $( '#content-profilePanelContent' ).html( htmlString );
                      $( '#content-panel' ).addClass('is-visible');
                      $( '#sponsor-panel' ).removeClass('is-visible');
                  }
                  event.preventDefault();

               } else {
                   $( '#sponsor-panel' ).removeClass('is-visible');
                   $( '#content-panel' ).removeClass('is-visible');
                   // Check if an in page ID exits for internal ancor link
                   // And scroll to it
                   if( $(window.location.hash).length ) {
                      $('html, body').animate({
                              scrollTop: $(window.location.hash).offset().top
                          }, 'slow');
                   }
               }
           })
           $(window).hashchange();
       });


// ALSO MISC FUNCTIONS

// See https://akveo.github.io/eva-icons
eva.replace();
