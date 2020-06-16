(function () {
  'use strict';

  $(document).ready(function() {

    // enable fanybox for content images
    $('.fancybox').fancybox({
      padding : 5
    });

    // mobile navigation handling
    $('.mobile-dropdown-toggle').bind('touchstart click', function(){
      $(this).parent().toggleClass('open');
    });

    // Isotope: List View Filters
    var grid = $('.tx-ncprojects .projects');
    grid.isotope({
      filter: '.project-item',
      layoutMode: 'fitRows',
      initLayout: true,
      resize: true
    });

    $('ul.project-filter li').click(function(){
      $('ul.project-filter li').removeClass('active');

      if ($(this).attr('class') == "item-all") {
        var filter = '*';
      } else {
        var filter = '.' + $(this).attr('class');
      }
      grid.isotope({ filter: filter });
      $(this).addClass('active');
    });

    // smooth-scroll to top
    $('.to-top a, .logo-desktop a, .navbar-brand').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });

    // change on scroll
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $("#header-section").addClass("scrolled");
      }else{
        $("#header-section").removeClass("scrolled");
      }
    });

    // transform svg inline
    $('img.svg').each(function(){
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

    });

   setTimeout("$('ul.project-filter li.item-all').click()",600);

  });
})();
