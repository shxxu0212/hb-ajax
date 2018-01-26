"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    evt.preventDefault();
    $.get("/fortune", function(results) {
        // put the results into the HTML page
        $('#fortune-text').html(results);
    });
}

$('#get-fortune-button').on('click', showFortune);




// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    //formData returns to us a dictionary that has zipcode as key, and another
    // dictionary as value, which contains 'temperature' & 'forecast' as keys.
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, function(results) {
        $('#weather-info').html(results['forecast']);
    });

}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


