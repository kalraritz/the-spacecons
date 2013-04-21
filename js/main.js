$(document).ready(function() {
	$('#myCarousel').carousel();
			// The default axis is 'y', but in this demo, I want to scroll both
			// You can modify any default like this

	$('.navbar-wrapper').localScroll({
           target:'body',
           offset: { top: -60, left: 0 }
    });


	$('.btn-primary').click(function(e) {
		e.preventDefault();
		$("#joyRideTipContent").joyride({
			'tipLocation': 'top'
		});
	});

	var paper = Raphael("employment", document.width, 400);

	paper.image('../img/small-man.gif', 10, 10, 23, 44)
	for (i = 1; i <= 18; i++) {
		// radius = 20;
		// i_x = i % 5;
		// i_y = i / 5;
		// c_x = (i_x + 2) * radius;
		// c_y = (i_y + 2) * radius;
		// paper.add([
		//     {
		//         type: "circle",
		//         fill: "red",
		//         stroke: "black",
		//         cx: c_x,
		//         cy: c_y,
		//         r: radius
		//     }
		// ]);
	}
});