
var home_menu_break = 820;
var nav_menu_break = 400;

$(document).ready(function() {

  //initiating jQuery
  jQuery(function($) {
    $(document).ready( function() {
      $('.stickyNavBar').stickUp();
    });
  });

  if($(window).width() < home_menu_break) {
      $('#home-menu-links').hide();
  }

    if($(window).width() < nav_menu_break) {
      $('.hide-on-nav-break').hide();
  }

    var nav_height = $('.nav-bar-wrapper').height();

    var location_offset = $('.nav-bar').offset().top- nav_height/2;
    var meet_offset = $('#meet').offset().top  - nav_height;
    var mdate_offset = $('#meet-date').offset().top  - nav_height;
    var social_offset = $('#love').offset().top  - nav_height;

    var stickyNav = function(){

        var scrollTop = $(window).scrollTop();

        if ((scrollTop >= 0) && (scrollTop < location_offset)) {
            $('.item-selected').removeClass('item-selected');
            $('.ni-notify').addClass('item-selected');
        } else if ((scrollTop > location_offset) && (scrollTop < meet_offset)) {
            $('.item-selected').removeClass('item-selected');
            $('.ni-coverage').addClass('item-selected');
        } else if ((scrollTop > meet_offset) && (scrollTop < mdate_offset)) {
            $('.item-selected').removeClass('item-selected');
            $('.ni-inspectors').addClass('item-selected');
        } else if ((scrollTop > mdate_offset) && (scrollTop < social_offset)) {
            $('.item-selected').removeClass('item-selected');
            $('.ni-events').addClass('item-selected');
        } else if (scrollTop > social_offset) {
            $('.item-selected').removeClass('item-selected');
            $('.ni-love').addClass('item-selected');
        }
    };

    $(window).scroll(function() {
        // $('#logo').text(stickyNavTop)
        stickyNav();
    });

    stickyNav();
});


$(window).resize(function() {

    var width = $(window).width();

    console.log(width, home_menu_break);

    if(width < 470) {
        $('.hide-on-nav-break').hide(400);
    } else {
        $('.hide-on-nav-break').show(400);
    }

    if(width < 820) {
        $('#home-menu-links').hide(400);
    } else {
        $('#home-menu-links').show(400);
    }
});