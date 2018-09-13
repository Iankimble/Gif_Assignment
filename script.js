//Array of subjects
var Topics = ['NFL', 'NBA', 'boxing', 'sneakers', 'movies', 'music', 'comics'];

//function that creates button when webpage is clicked
function createButton(Topics){
for(i=0; i<Topics.length; i++){
    var buttons = $('<buttons>')
buttons.addClass('Interests');
$('#Interests').append(buttons);
}
//checking status
console.log(createButton);

}
createButton(Topics);

$(document).on('click', function(){ 

//url to giphy with API key
var URL = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=vGqNVOHVpTq2I38yL5iqbi3Zpg6HYzEB';

//information that will be sent to giphy server 
var search = $(this).attr("data-type");;

$.ajax({
    url: URL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

});

/* I wasn't able to get my buttons to load dynamically or display
any gifs. My console log only returns the block of code for the function.
I intend to complete this assignment so that I can get more confidence
with working with API's at a basic level. It takes me a little longer
to grasp the topics */