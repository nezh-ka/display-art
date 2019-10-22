$(document).ready(function() {
    // Анимация модальных окон
    $("#main").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown',
    });

    $("#section1").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    $("#section2").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    $("#section3").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    $("#section4").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    // Галерея
    baguetteBox.run('.section-1__gallery, .section-2__gallery, .section-3__gallery, .section-4__gallery');

    // Добавление, удаление класса .active
    $('button:contains("ru")').addClass('active');
    $('button:contains("ru")').click(function(e) {
        e.preventDefault();
        $('button:contains("eng"), button:contains("tat")').removeClass('active');
        $('button:contains("ru")').addClass('active');
    });

    $('button:contains("tat")').click(function(e) {
        e.preventDefault();
        $('button:contains("ru"), button:contains("eng")').removeClass('active');
        $('button:contains("tat")').addClass('active');
    });

    $('button:contains("eng")').click(function(e) {
        e.preventDefault();
        $('button:contains("ru"), button:contains("tat")').removeClass('active');
        $('button:contains("eng")').addClass('active');
    });

    // Таймер возврата на главную страницу
    if ($('.main .bg-btn').click()) {
        setInterval(function() {
            $('.close-animatedSections').trigger('click');
        }, 10000);
    }
  });