var constant1 = 1, constant2=0;
$("ul").on("click", "li", function() {
var colours = $(this).css("background-color");
if(constant1==1){constant1=0;
var hah = pass();
constant2 = hah;
}
$(".h4").html("The Colour You Clicked is '"+colours+"'.");
$(".h5").html("The Colour You Need to Click is '"+constant2+"'.");
if(colours == constant2){
$(".h6").html("YOU ARE CORRECT!!!.");}
else{
$(".h6").html("You Guessed it Wrong.");
}

});
function happy() { 
var rand = Math.floor(Math.random()*10);
return (rand);	}
function pass(){
var ha = happy();
var alfa = $("."+ha).css("background-color");
return (alfa);
};
$("li").ready(function () {
$("li").each(function(){
	var r = Math.floor(Math.random()*300);
	var g = Math.floor(Math.random()*300);
	var b = Math.floor(Math.random()*300);
	var colours = "rgb("+r+", "+g+", "+b+")";
	$(this).css("background-color", colours);
	var ans = $(this).css("background-color");
});});
