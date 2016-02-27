$(document).ready(function(){
    $('a[href*=#]').click( function(){ // если в href начинается с # или ., то ловим клик
      var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });
});

$(document).ready(function() {
  var head = $('.nav, .nav>li, .nav>li>a');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 699) {
      head.removeClass('default').addClass('fixed');
    }
    else if ($(this).scrollTop() <= 700) {
      head.removeClass('fixed').addClass('default');
    }
  });
});