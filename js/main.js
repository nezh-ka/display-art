$(document).ready(function() {

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

    baguetteBox.run('.section-1__gallery, .section-2__gallery, .section-3__gallery, .section-4__gallery');

  });