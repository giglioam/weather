$(function() {
  var handleWeatherResponse = function(data) {
    // "data" is an object that holds all the information you need. Here, we
    // write it out to the console for easy viewing.
    console.log(data);

    // We also set a window-level variable so we can use it in the console,
    // by typing data
    window.data = data;
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    
    var markup = "<p>The weather today is " + data.currently.summary + ", with a temperature of " + data.currently.temperature + " degrees.</p>" + "<p> </p><p>This week the weather will be " + data.daily.summary + "</p><p>Thank you for using this website. Have a nice ()#&*@$(#$ day.</p>";
    // End of your code. No, really. Don't change anything below this, or above line 11.
    // and write it out to the page.

    // Takes the contents of the "markup" variable (which should contain HTML) 
    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
