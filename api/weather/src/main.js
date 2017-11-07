//console.log('main.js is connected!');


$(document).ready(function() {
  //console.log('script loaded.')


// the makeCALL function makes the ajax call to get JSON
// then passes the data to the getDATA function



  var makeCall = function(zipcode){
  let url = "http://api.openweathermap.org/data/2.5/weather?zip="+zipcode+"&units=imperial&appid=5af0320b9917cd01193d15669c155064"
  $.getJSON(url, function(data) {
    getData(data)
   })

}



var getData = function(data){
    //debugger;

    //console.log("inside get data: ", data);
    //console.log(data.results[0])
    //var first_name = data.results[0].name.first
    var temp = data.main.temp;

    var max_temp = data.main.temp_max;
    //console.log(max_temp);
    var min_temp = data.main.temp_min;
    //console.log(min_temp);
    var city = data.name;
    //console.log(city);
    var description = data.weather[0].description;
    //console.log(description)
// populated existing HTML elements with the data (values)
    manipulateDom(city, temp, description, max_temp, min_temp)
  }

var manipulateDom = function(city, temp, description, max_temp, min_temp){
    $('#citydiv').text(city);
    $('#tempdiv').text(`${Math.round(temp)}${String.fromCharCode(176)}`);
    $('#weatherdiv').text(description);
    $('#maxdiv').text(`Max: ${max_temp}${String.fromCharCode(176)}`);
    $('#mindiv').text(`Min: ${min_temp}${String.fromCharCode(176)}`);
    changeColor(temp);


  }

function changeColor(tempHere) {
  if (tempHere > 90) {
    $($('#tempdiv')).css('color', 'red');

  } else if (tempHere < 40) {
    $($('#tempdiv')).css('color', 'blue');

  }
}


    $( "#form-id" ).submit(function( event) {
 const input = $('#inputzip').val();

      event.preventDefault();
      makeCall(input);
      $( "#flexsearch" ).removeClass( "inputflexcontainer" ).addClass( "inputflexcontainer2" );
     $('input[type="text"], text').val('');
     $($("#min_maxcontainer")).css("border-color", "black");


});

})



  //var addEventListeners = function(){


  //}()







//})


