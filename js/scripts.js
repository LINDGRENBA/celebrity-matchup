// Must be 18 or older to use celebrity matchin app, if younger, get different page/message

//enter age in prompt
//if 18+ go to form
//on submit form, show results, with img of celebrity

// if less than 18
//show sorry message, hide form and do not show results

$(document).ready(function() {

  $("#age-check").submit(function(event) {
    event.preventDefault();
    let age = parseInt($("#age").val());

    if(age >= 18) {
      $(".old-enough").show();
      $("#age-check").hide();
    } else {
      $(".too-young").show();
      $("#age-check").hide();
    }
  });

  $("#match-form").submit(function(event) {
    event.preventDefault();

    let movieGenre = $("#favMovieGenre").val();
    let firstDate = $("#firstDate").val();
    let animalType = $("#dogOrCat").val();

    if(movieGenre === "comedy" && firstDate === "wrestle" || movieGenre === "comedy" && animalType === "cat" || firstDate === "wrestle" && animalType === "cat") {
      $(".brie").show();
      $(".dinklage").hide();
    } else {
      $(".dinklage").show();
      $(".brie").hide();
    }

  });
  
});

// comedy fantasy , dragon wrestle , dog cat