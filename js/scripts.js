$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1 = $("input#person1").val();
    var person2 = $("input#person2").val();
    var animal = $("input#animal").val();
    var exclamation = $("input#exclamation").val();
    var verb = $("input#verb").val();
    var noun = $("input#noun").val();


    // var person1 = "ohhhh";

    
    // $(".person1").text(person1);
    
    $(".person1").text(person1);
    $(".person2").text(person2);
    $(".animal").text(animal);
    $(".exclamation").text(exclamation);
    $(".verb").text(verb);
    $(".noun").text(noun);

    $("#story").show();
    event.preventDefault();
  });
});

