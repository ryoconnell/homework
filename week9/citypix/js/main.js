//pseudocode
//1.  Review previous exercies about entering input and if/else statements.
//2.  Write an if statement for each city.
//3.  Each city can have 1 or 2 ||'s for the city.
//4.  Have an update box using css to style.
//5.  Post the local address for the pictures to be displayed.
//6.  Add jQuery web address above the js file that is created.

var city;

$(document).ready(function() {

  $('#submit').click(enterCity);

  function enterCity() {
    var input = $('#city-type').val();

    if (input = "New York" || "New York City" || "NCY") {
      var city = New York;
      return  "../images/nyc.jpg";
    }
    else if (input = "San Francisco" || "SF" || "Bay Area") {
      var city = San Francisco;
      return "../images/sf.jpg";
    }
    else if (input = "Los Angeles" || "LA" || "LAX"){
      var city = Los Angeles;
      return "../images/la.jpg";
    }
    else if (input = "Austin" || "ATX") {
      var city = Austin;
      return "../images/austin.jpg";
    }
    else if (input = "Sydney" || "SYD") {
      var city = Sydney;
      return "../images/sydney.jpg";
    }
    else {
      return "../images/citipix_skyline.jpg";
    }
    };
  });
