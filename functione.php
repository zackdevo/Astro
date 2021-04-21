<?php
function getsign($day, $month)
{
    if (($month == 1 && $day > 20) || ($month == 2 && $day < 20)) {
        $mysign = "Verseau";
    }
    if (($month == 2 && $day > 18) || ($month == 3 && $day < 21)) {
        $mysign = "Poissons";
    }
    if (($month == 3 && $day > 20) || ($month == 4 && $day < 21)) {
        $mysign = "Belier";
    }
    if (($month == 4 && $day > 20) || ($month == 5 && $day < 22)) {
        $mysign = "Taureau";
    }
    if (($month == 5 && $day > 21) || ($month == 6 && $day < 22)) {
        $mysign = "Gemeaux";
    }
    if (($month == 6 && $day > 21) || ($month == 7 && $day < 24)) {
        $mysign = "Cancer";
    }
    if (($month == 7 && $day > 23) || ($month == 8 && $day < 24)) {
        $mysign = "Lion";
    }
    if (($month == 8 && $day > 23) || ($month == 9 && $day < 24)) {
        $mysign = "Vierge";
    }
    if (($month == 9 && $day > 23) || ($month == 10 && $day < 24)) {
        $mysign = "Balance";
    }
    if (($month == 10 && $day > 23) || ($month == 11 && $day < 23)) {
        $mysign = "Scorpion";
    }
    if (($month == 11 && $day > 22) || ($month == 12 && $day < 23)) {
        $mysign = "Sagittaire";
    }
    if (($month == 12 && $day > 22) || ($month == 1 && $day < 21)) {
        $mysign = "Capricorne";
    }
    return $mysign;
}

$date = $_POST["date"];
$astroDay = substr($date, 0, 2);
$astroMonth = substr($date, 3, 2);
$mysign = getsign($astroDay, $astroMonth);

echo $mysign;
