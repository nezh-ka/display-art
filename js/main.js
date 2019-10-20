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


/* $('div.eng, div.tat').css('opacity', '0');

$('button:contains("ru")').click(function() {
    $('div.ru').css('opacity', '1');
    $('div.eng, div.tat').css('opacity', '0');
});

$('button:contains("tat")').click(function() {
    $('div.tat').css('opacity', '1');
    $('div.eng, div.ru').css('opacity', '0');
});

$('button:contains("eng")').click(function() {
    $('div.eng').css('opacity', '1');
    $('div.tat, div.ru').css('opacity', '0');
}); */


   /*  $('div[lang="en"], div[lang="tt"]').css('display', 'none');

   // $('button:contains("ru")').addClass('active');

    $('button:contains("ru")').click(function() {
        // $(this).addClass('active');
        // $('button:contains("tat"), button:contains("eng")').removeClass('active');
        $('div[lang="ru"]').css('display', 'block');
        $('div[lang="en"], div[lang="tt"]').css('display', 'none');
    });

    $('button:contains("eng")').click(function() {
        // $(this).addClass('active');
        // $('button:contains("ru"), button:contains("tat")').removeClass('active');
        $('div[lang="en"]').css('display', 'block');
        $('div[lang="ru"], div[lang="tt"]').css('display', 'none');
    });

    $('button:contains("tat")').click(function() {
        // $(this).addClass('active');
        // $('button:contains("ru"), button:contains("eng")').removeClass('active');
        $('div[lang="tt"]').css('display', 'block');
        $('div[lang="ru"], div[lang="en"]').css('display', 'none');
    });
 */
    // Таймер возврата на главную страницу
    // console.log("opacity =", $('.sections').css('opacity'), +$('.sections').css('opacity'));
    // if (+$('.sections').css('opacity') == 0) {
    //     setTimeout(function() {
    //         $('.close-animatedSectionsRu').trigger('click');
    //     }, 5000);
    // }

  });