var settings = [3, 20, 1, 1];

var main = function() {
  $('.mynav').click(function() {
    var id = $('.mynav').index(this);

    var currentSlide = $('.active_slide');
    var nextSlide = $("#slide"+(id));

    var currentDot = $('.active-dot');
    var nextDot = $('#dot'+(id));

    var currentNav = $('.active');
    var nextNav = $('#list'+(id));

    currentSlide.removeClass('active_slide');
    nextSlide.addClass('active_slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

    currentNav.removeClass('active');
    nextNav.addClass('active');
  });

  $('.btn-option').click(function() {
    $('#list' + $(this).attr('data-setting') + ' span').html( $(this).html() );
    settings[$(this).attr('data-setting')] = $(this).attr('data-option');
  });

  $('.arrow-next').click(function() {
    var currentSlide = $('.active_slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    var currentNav = $('.active');
    var nextNav = currentNav.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
      nextNav = $('.mynav').first();
    }

    currentSlide.removeClass('active_slide');
    nextSlide.addClass('active_slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

    currentNav.removeClass('active');
    nextNav.addClass('active');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active_slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    var currentNav = $('.active');
    var nextNav = currentNav.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
      nextNav = $('.mynav').last();
    }

    currentSlide.removeClass('active_slide');
    prevSlide.addClass('active_slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');

    currentNav.removeClass('active');
    nextNav.addClass('active');
  });

  $('#start-button').click(function(){
    option_setting = settings;
    $('#main-block').load('quest.html');
  });
}

$(document).ready(main);
