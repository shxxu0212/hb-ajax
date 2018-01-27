"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
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

    // $.get(url, formData, function(results) {
    //     $('#weather-info').html(results.forecast);
    // });
    $('#weather-info').load(url, formData);
    // .load( url [, data ] [, complete ] )
    // Defaults to POST request if passing a second non-function arg [formData]

    // $('#weather-info').load(url, function(results) {
    //     $('#weather-info').html(results.forecast);
    // }); * This does not key into forecast correctly.
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    // let formData = {"qty": $("#qty-field").val(),
    //                 "melon_type": $("#melon-type-field").val()};

    let formData = $("#order-form").serialize();

    $.post("/order-melons.json", formData, function(results) {
        if (results['code'] === "ERROR") {
            $('#order-status').addClass("order-error").html(results.msg);
        } else {
            $('#order-status').removeClass().html(results.msg);
        }
    });
}

$("#order-form").on('submit', orderMelons);


