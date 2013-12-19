/*--Responsive nav---*/
$(function () {

      // TinyNav.js 1
      $('#nav').tinyNav({
        active: 'selected'
      });
      
      // TinyNav.js 2
      $('#nav2').tinyNav({
        header: 'Navigation' // Writing any title with this option triggers the header
      });

    });

/*--Responsive nav---*/
 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Released under MIT license: http://www.opensource.org/licenses/mit-license.php
 
$(document).ready(function(){

if(!Modernizr.input.placeholder){

  $('[placeholder]').focus(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
    }
  }).blur(function() {
    var input = $(this);
    if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
    }
  }).blur();
  $('[placeholder]').parents('form').submit(function() {
    $(this).find('[placeholder]').each(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
    }
    })
  });

}

});