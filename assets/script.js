$(document).ready(function(){

$("#submit").on("click", function(){

    $("#newText").html("");

    let newDiv = $("<div>");
    newDiv.html("<p>yo yo</p>");

    let msg = $("#message").val();

    let pOne = $("<p>").html("<h1>" + msg + "</h1>");
    newDiv.append(pOne);

});

    $("#newText").prepend(newDiv);

})