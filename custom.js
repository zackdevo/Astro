
jQuery(document).ready(function () {
    jQuery('#wow').delay(2000).fadeIn('slow');
    jQuery('#wowp').delay(4000).fadeIn('slow');
    jQuery('.cool').delay(8000).fadeIn('slow');
    jQuery('a .cool').mouseenter(function () {
        jQuery(this).addClass('glow2');
    })
    // ANIMATIONS AOS 
    AOS.init({
        easing: 'ease-in-out-back'
    });
    // FULLPAGE SCROLL
    jQuery('#fullpage').fullpage({
        scrollBar: true
    });
    // PARALLAX 
    var scene = $('#scene').get(0);
    var parallaxInstance = new Parallax(scene);
    // Animations Astro après click
    jQuery('#astro-btn').click(function () {
        jQuery(this).css("display", "none");
        jQuery('#scene').addClass('waw');
        jQuery('#form-fade').removeClass('d-none');
        jQuery('#step1').removeClass('d-none');
        jQuery('#step1').addClass('waw');
    });
    // BTN RETURN
    jQuery('#return').click(function () {
        jQuery('#step1').removeClass('waw');
        jQuery('#step1').addClass('d-none');
        jQuery('#scene').addClass('waw');
        jQuery('#form-fade').addClass('d-none');
        jQuery('#astro-btn').addClass("waw");
        jQuery('#astro-btn').css("display", "block");
    })

    jQuery("#date").datepicker({
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        yearRange: "c-60:c+0",
        dateFormat: 'dd/mm/yy',
        monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        monthNamesShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"],
        dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
        closeText: "Terminé",
        currentText: "Aujourd'hui"
    });
    // AJAX ASTRO
    jQuery('div#step1 form').on('submit', function (e) {
        e.preventDefault();
        if (jQuery("#date").val() == "") {
            jQuery("#error").html('Veuillez entrer une date please.')
        } else {
            jQuery.ajax({
                url: jQuery(this).attr("action"),
                processData: false,
                type: jQuery(this).attr("method"),
                data: jQuery(this).serialize(),
                success: function (datareturn) {
                    jQuery('#step1').addClass("d-none");
                    jQuery('#step2').removeClass("d-none");
                    jQuery('#step2').addClass('waw');
                    jQuery('#sign').append('<img width="500" height="335" class="img-fluid" src="img/' + datareturn + '.png" </img>');
                    jQuery('#sign').append('<h2 class ="h4 text-light"> Vous êtes ' + datareturn + ' , bravo. </h2>');
                    switch (datareturn) {
                        case 'Verseau':
                            jQuery('#sign').append("<p class='text-light text-center'> Vous êtes un intellectuel, vous pensez au futur avec l'âme d'un révolutionnaire parfois incompris. <br> Un loser en somme. <br> <small> Source : S.L </small> </p>");
                            break;
                        case 'Capricorne':
                            jQuery('#sign').append("<p class='text-light text-center'>Vous êtes un travailleur acharné, ambitieux et réfléchi, vous êtes souvent froid avec les autres. <br> Loser energy. <br> <small> Source : S.L </small></p>");
                            break;
                        case 'Poissons':
                            jQuery('#sign').append("<p class='text-light text-center'>Vous êtes un être sensible, empathique. <br> La spiritualité vous parle et vous êtes capable de vous sacrifier pour autrui, ce qu'un loser ferait. <br> <small> Source : S.L </small> </p>");
                            break;
                        case 'Belier':
                            jQuery('#sign').append("<p class='text-light text-center'>Vous êtes quelqu'un de déterminé, fonceur. <br> Votre caractère de feu fait aussi que vous pouvez vous montrer désagréable avec les autres. <br> S'agirait de faire un effort, loser.<br> <small> Source : S.L </small></p>");
                            break;
                        case 'Taureau':
                            jQuery('#sign').append("<p class='text-light text-center'>La force tranquille, les autres ont confiance en vous. <br> Vous aimez les plaisirs de la vie et être prêt à tout pour les obtenir, creepy loser.<br> <small> Source : S.L </small></p>");
                            break;
                        case 'Sagittaire':
                            jQuery('#sign').append("<p class='text-light text-center'>Vous êtes un optimiste dans l'âme ! <br> Vos proches apprécient votre jovialité et votre volonté, mais ils déplorent votre manque de fidélité et votre susceptibilité, loser.<br> <small> Source : S.L </small></p>");
                            break;
                        case 'Cancer':
                            jQuery('#sign').append("<p class='text-light text-center'>De nature timide, vous êtes une personne introvertie et nostalgique. <br> Votre manque de confiance en soi rend vos relations compliquées. <br> S'agirait de grandir un peu, loser.<br> <small> Source : S.L </small></p>");
                            break;
                        case 'Lion':
                            jQuery('#sign').append("<p class='text-light text-center'>Fier et déterminé, vous êtes le roi du narcissisme. <br> Vous aimez qu'on vous voie, vous ne manquez pas de confiance et cela peut irriter autour de vous, donc calme toi un peu loser.<br> <small> Source : S.L </small></p>");
                            break;
                        case 'Gemeaux':
                            jQuery('#sign').append("<p class='text-light text-center'>De nature sociable, vous êtes un bavard incurable. <br> En constant mouvement, vous détestez la routine ce qui fait de vous une personne éparpillée, moins de blabla plus d'organisation, loser.<br><small> Source : S.L </small> </p>");
                            break;
                        case 'Vierge':
                            jQuery('#sign').append("<p class='text-light text-center'>Vous êtes une personne obsédée par l'ordre. <br> Toujours la première à donner des conseils et des critiques, vous êtes tout de même une personne très serviable. <br> Pas un loser complet finalement.<br> <small> Source : S.L </small></p>");
                            break;
                        case 'Scorpion':
                            jQuery('#sign').append("<p class='text-light text-center'>Entier et loyal, vous êtes une personne volontaire qui termine toujours ce qu'elle a commencé. <br> Vous êtes également dur envers les autres et pouvez même vous montrer violent, un bon petit loser.<br> <small> Source : S.L </small></p>");
                            break;
                        case 'Balance':
                            jQuery('#sign').append("<p class='text-light text-center'>Vous êtes une personne de nature équilibrée, vous tombez souvent dans la facilité pour cacher votre indécision. <br> Vous détestez la solitude et avez le besoin d'être aimé, comportement de loser quoi.<br> <small> Source : S.L </small></p>");
                            break;

                        default:
                            console.log('Yeah');
                    }
                }
            })
        }

    })
    // FIN AJAX ASTRO
    // BTN RETOUR POUR REFAIRE UN TOUR YEAH
    jQuery('#retour-astro').click(function () {
        // FOOKING RESET DU FORM + CLEAR DE LA DIV #SIGN
        jQuery('#sign').empty();
        jQuery("#astro-form").trigger("reset");
        jQuery('#step2').addClass("d-none");
        jQuery('#step2').removeClass('waw');
        jQuery('#step1').removeClass("d-none");
    })

})