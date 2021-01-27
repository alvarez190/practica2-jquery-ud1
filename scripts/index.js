$(document).ready(function() {

    /****** Style: ul#selected-play ***** */
    $('#selected-plays>li').addClass("horizontal");
    $('#selected-plays li ul').addClass("sub-level");
    $('#selected-plays li ul li a[href^=mailto]').addClass("mailto");
    $('#selected-plays li ul li a[href$=pdf]').addClass("pdflink");
    $('#selected-plays a[href*=http]').addClass("henrylink");
    /*************end************************ */

    /**************style: table */
    $('table:first tr:even').addClass("alt");
    $('table:last tr:even').addClass("alt");
    /**************end*************** */

    /*******Estilos a todo lo relacionado con 'henry' */
    $("table tr td:contains('Henry')").addClass("highlight");

    /*********** Practica 3 - jQuery**************** */
    // css en columna dos
    $("table tr td:contains('Henry')").next().addClass("highlight");

    $("table tr td:contains('Tragedy')").addClass("highlight");
    $("table tr td:contains('Tragedy')").next().addClass("highlight");
});