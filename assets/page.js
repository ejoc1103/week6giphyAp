// need an array for all the gif subjects chosen by user
// need an input box for user to put in subjects

var subjects = [];
var subject;

// append buttons onto html
$("#submit").on("click", function(e){
    e.preventDefault();
    console.log("submit on click works")
    var hold = $("#subject").val().trim();
    subjects.push(hold);
    console.log(subjects);
    $("#choices").html("");
    for(var j = 0; j < subjects.length; j++){
    // $("#choices").append("<button class = 'gifButton'>" + subjects[j] + "</button>");
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("gifButton");
          // Adding a data-attribute
          a.attr("data-name", subjects[j]);
          // Providing the initial button text
          a.text(subjects[j]);
          // Adding the button to the buttons-view div
          $("#choices").append(a);
    }
})
function renderGifs(){
      $("#gifs").html("");
      console.log("gif button works")
      subject = $(this).attr("data-name");
      console.log(subject);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=Zn8rB06xiKzP2HJj94MLI7DG5S0YipD5";
    
    $.ajax({
      url: queryURL,
      method: "GET"
      })
        // After data comes back from the request
        .done(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          console.log(results);

          for(var i = 0; i < 10; i++){
          var chosenImage = $("<img>");

          chosenImage.addClass("gif");
          // Setting the src attribute of the image to a property pulled off the result item
          chosenImage.attr("src", results[i].images.fixed_height_still.url);
          
          $("#gifs").append(chosenImage);
          }
        });
}

    $(".gif").on("click", function() {
      console.log("Am I entering this function?");

      var newHold = $("#.gif").val();

      console.log(newHold);
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = "still";
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {

      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });

$(document).on("click", ".gifButton", renderGifs);


// need code for stopping and starting gifs