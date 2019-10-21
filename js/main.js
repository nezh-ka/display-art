$(document).ready(function() {
    // Анимация модальных окон
    $("#main-ru").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown',
    });

    $("#main-eng").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown',
    });

    $("#main-tat").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown',
    });

    $("#section1-ru").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    $("#section1-eng").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    $("#section1-tat").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    $("#section2-ru").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    
    $("#section2-eng").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    
    $("#section2-tat").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    $("#section3-ru").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    $("#section3-eng").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    $("#section3-tat").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    $("#section4-ru").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    $("#section4-eng").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });

    $("#section4-tat").animatedModal({
        'color': '#55c57a',
        'animatedIn': 'fadeInUp',
        'animatedOut': 'fadeOutDown'
    });


    // Галерея
    baguetteBox.run('.section-1__gallery, .section-2__gallery, .section-3__gallery, .section-4__gallery');

    // Смена языка

    $('div.eng, div.tat').css('display', 'none');

    $('button:contains("ru")').click(function() {
        $('div.ru').css('display', 'block');
        $('div.eng, div.tat').css('display', 'none')
    });

    $('button:contains("tat")').click(function() {
        $('div.tat').css('display', 'block');
        $('div.eng, div.ru').css('display', 'none');
    });

    $('button:contains("eng")').click(function() {
        $('div.eng').css('display', 'block');
        $('div.tat, div.ru').css('display', 'none');
    });



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
   /*  $('div.eng, div.tat').css('display', 'none');
    // Смена языков на главной странице
    $('.main__langs button:contains("ru")').click(function() {
        $('div.main.ru').css('display', 'block');
        $('div.main.tat, div.main.eng').css('display', 'none');
    });

    $('.main__langs button:contains("tat")').click(function() {
        $('div.main.tat').css('display', 'block');
        $('div.main.ru, div.main.eng').css('display', 'none');
    });

    $('.main__langs button:contains("eng")').click(function() {
        $('div.main.eng').css('display', 'block');
        $('div.main.ru, div.main.tat').css('display', 'none');
    });

    // Смена языков на странице выбора
    $('.sections button:contains("ru")').click(function() {
        $('.sections ru').css('display', 'block');
        $('.sections tat, .sections eng').css('display', 'none');
    });

    $('.sections button:contains("tat")').click(function() {
        $('.sections tat').css('display', 'block');
        $('.sections ru, .sections eng').css('display', 'none');
    });

    $('.sections button:contains("eng")').click(function() {
        $('.sections eng').css('display', 'block');
        $('.sections ru, .sections tat').css('display', 'none');
    }); */

  });