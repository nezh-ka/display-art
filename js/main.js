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

    // Таймер возврата на главную страницу
    console.log("opacity =", $('.sections').css('opacity'), +$('.sections').css('opacity'));
    // if (+$('.sections').css('opacity') == 0) {
    //     setInterval(function() {
    //         $('.close-animatedSectionsRu').trigger('click');
    //     }, 5000);
    // }

    // Добавление, удаление класса .active

   /*  if ($('div:has(.ru)').css('display') == 'block') {
        $('button:contains("ru")').addClass('active');
        $('button:contains("eng"), button:contains("tat")').removeClass('active');
    }

    if ($('div:has(.tat)').css('display') == 'block') {
        $('button:contains("tat")').addClass('active');
        $('button:contains("ru"), button:contains("eng")').removeClass('active');
    }

    if ($('div:has(.eng)').css('display') == 'block') {
        $('button:contains("eng")').addClass('active');
        $('button:contains("ru"), button:contains("tat")').removeClass('active');
    } */

//     $('button:contains("ru"), button:contains("eng"), button:contains("tat")').addClass('active');

//     if ($('div:has(.ru)').css('display') == 'block') {
//         $('button:contains("ru")').addClass('active');
//         $('button:contains("eng"), button:contains("tat")').removeClass('active');
//     }

//     if ($('div:has(.tat)').css('display') == 'block') {
//         $('button:contains("tat")').addClass('active');
//         $('button:contains("ru"), button:contains("eng")').removeClass('active');
//     }

//     if ($('div:has(.eng)').css('display') == 'block') {
//         $('button:contains("eng")').addClass('active');
//         $('button:contains("ru"), button:contains("tat")').removeClass('active');
//     }

  });