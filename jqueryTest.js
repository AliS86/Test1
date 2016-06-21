//this function takes the first letter of the element and makes it bold
$(function() {
    var words = $('#bol').text().split(' ');
    var html = '';
    $.each(words, function() {
        html += '<span style="font-weight:bold">' + this.substring(0, 1) + '</span>' + this.substring(1) + ' ';
    });
    $("#bol").html(html);
});
//-----------------------------------------------------------------------------------------------------------------

// what happens on a single click
$("#myClick").click(function() {
    $("#numClick").html("The paragraph was clicked.");
});
//what happens on a double click
$("#myClick").dblclick(function() {
    $("#numClick").html("The paragraph was double-clicked");
});
//-----------------------------------------------------------------------------------------------------------------

//slides and hides titles
$(document).ready(function() {
    //the flip is the head
    $("#flip").click(function() {
        //the panel are the headings that are sliding in and out
        $("#panel").slideToggle("slow");
    });
});
//-----------------------------------------------------------------------------------------------------------------
//this function changes the color of the paragraph to green when the button is clicked
$(document).ready(function() {
    $("#cClick").on("click", function() {
        $("#bColor").css("background-color", "green");
    })
});
//-----------------------------------------------------------------------------------------------------------------
//this function fades the text in a speed of 4000 milisecond
$(function() {
    $("#myElement").fadeOut(4000);
});
