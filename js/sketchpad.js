var length = 50;

$(document).ready(function() {

createGrid();

	$("#button").click(function(){
		$("#grid").empty();
		length = prompt("What would you like the new size to be?");
		createGrid();
	});

});


function createGrid(){
	var bSize = (960/length)-2;
	for(var y = 0; y < length; y++){
		for(var x = 0; x < length; x++){
			$("<div/>", {
				"class": "square",
				"style": "float: left;",
				"onmouseout": "draw(this)"
			}).appendTo("#grid");
		}
		$("<div/>", {
			"style": "clear: both"
		}).appendTo("#grid");
	}
	$(".square").css({"height" : bSize +"px", "width" : bSize +"px"});
}

function draw(thing){

	var bSize = (960/length)-2;
	$(thing).removeClass("square");
	$(thing).addClass("coloredSquare");
	$(".coloredSquare").css({"margin" : "1px", "height" : bSize, "width" : bSize});

}

