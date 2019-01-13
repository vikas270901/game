var constant1 = 1, constant2=0, points=9,final=0;
$(".box").on("click", "div", function() {
var colours = $(this).css("background-color");
if(constant1==1){constant1=0;
constant2 = pass();
}
$(".h4").html("The Colour You Clicked is '"+colours+"'.");
$(".h5").html("The Colour You Need to Click is '"+constant2+"'.");
if(colours == constant2){
final = 9-final;
$(".h6").html("YOU ARE CORRECT!!!. "+final+" points");
$(".h6").css("background-color", colours);
$(".box > div").css("background-color", colours);
$(".box > div").html("");
}
else{
points=points-1;final=9-points;
$(".h6").html("You Guessed it Wrong, Try Again!!");
$(this).html("Try Again!! (-1)");
$(this).css("background-color", "yellow");
}});
function pass(){
var ha = Math.floor(Math.random()*10);
var alfa = $("."+ha).css("background-color");
return (alfa);};
function shuffle(){
	$(".box > div").each(function(){
	var r = Math.floor(Math.random()*300);
	var g = Math.floor(Math.random()*300);
	var b = Math.floor(Math.random()*300);
	var colours = "rgb("+r+", "+g+", "+b+")";
	$(this).css("background-color", colours);
});}
$(".new").on("click", function(){
	points=0,final=0;
	shuffle();
	constant2 = pass();
	$(".h6").html("Select Again.");
});
$(".box > div").ready(function () {
shuffle();
});
