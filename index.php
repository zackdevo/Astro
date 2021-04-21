<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zodiac Sign</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <!-- Fichiers css et js perso -->
    <script type="text/javascript" src="custom.js"></script>
    <link rel="stylesheet" href="style.css">
    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <!-- AOS CSS -->
    <link rel="stylesheet" href="lib/aos.css">
    <!-- jQuery AOS -->
    <script src="lib/aos.js"></script>
    <!-- Javascript Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    <!-- FULLPAGE CSS -->
    <link rel="stylesheet" type="text/css" href="lib/fullpage.min.css" />
    <!-- FULLPAGE JS -->
    <script type="text/javascript" src="lib/fullpage.extensions.min.js"></script>
    <!-- PARALAX JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
    <!-- jQueryUI CSS -->
    <link rel="stylesheet" type="text/css" href="lib/jquery-ui.min.css" />
    <!-- jQueryUI JS -->
    <script type="text/javascript" src="lib/jquery-ui.min.js"></script>
    <!-- FAVICON -->
    <link rel="icon" type="image/png" href="img/logo_zacch.png" />
</head>

<body>

    <!-- EXOS JAVASCRIPT EN JQUERY BABY -->
    <!-- EXO 9 CALCULER L'IMC -->
    <div id="fullpage">
        <section class="section bg">
            <div class="container">
                <div class="row justify-content-center">
                    <div id="wow" class="col-10 fond">
                        <h1 class="text-center text-light mb-3">Bienvenue sur la meilleure page d'astrologie</h1>
                    </div>
                    <div id="wowp" class="col-9 text-center fond">
                        <p class="my-3">Eh salut, alors comme ça on veut tester le meilleur site du siècle ? <br> Ok, ok, mais que si tu cliques sur le bouton dégeulasse qui vient d'apparaitre. <br> Crazy right ?</p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4 text-center mt-1">
                        <a href="#astro-section"><button class="cool">Bonjour je suis moche</button></a>
                    </div>
                </div>
            </div>

        </section>

        <section id="astro-section" class="section bg">
            <div data-aos="zoom-in" data-aos-duration="1500" class="wrap">
                <button id="astro-btn" class="button">Découvrez votre signe astro</button>
            </div>
            <div data-depth="1.40" id="form-fade" class="container pos-center d-none">
                <div class="row">

                    <div id="step1" class="col-12 bg-form d-none">
                        <h2 class="h4 text-center text-light">Entrez votre date de naissance</h2>
                        <form autocomplete="off" id="astro-form" action="functione.php" method="post">
                            <div class="input-group mb-3 justify-content-center">
                                <input placeholder="JJ/MM/YYYY" name="date" class="text-center" type="text" id="date">
                            </div>

                            <div class="row">
                                <div class="col-12 text-center">
                                    <button type="submit" class="btn astro-btn" id="check-astro">Votre signe</button>
                                </div>
                            </div>
                        </form>
                        <div class="row">
                            <div class="col-12 text-center">
                                <p id="error" class="mt-2 text-light"></p>
                            </div>
                        </div>
                    </div>

                    <div id="step2" class="col-12 bg-form d-none">
                        <div class="row">
                            <div id="sign" class="col-12 text-center text-light">

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 offset-8">
                                <button class="btn astro-btn" id="retour-astro">C'est reparti ?</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- SCENE PARALAX -->
            <div data-aos="zoom-in" data-aos-duration="3500" id="scene">
                <div data-depth="1.20"><img src="img/const1.png" width="900" height="750"></div>
                <div data-depth="1.00"><img src="img/libra.png" width="1080" height="800"></div>
                <div data-depth="1.40"><img src="img/leo.png" width="950" height="700"></div>
                <div data-depth="1.30"><img src="img/scorpio.png" width="1250" height="750"></div>
                <div data-depth="1.40"><img src="img/cancerr.png" width="950" height="650"></div>
                <div data-depth="1.90"><img src="img/gemini.png" width="950" height="650"></div>
                <div data-depth="1.50"><img src="img/aquarius.png" width="1350" height="750"></div>
            </div>
        </section>
    </div>

</body>

</html>