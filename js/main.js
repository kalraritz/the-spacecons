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

	var employment_paper = Raphael("employment", $('#employment').width(), 100);

	var man_anim = Raphael.animation({y:30}, 1000)
	for (i = 1; i <= 18; i++) {
		var p = employment_paper.image('img/small-man.gif');
		p.attr({
			x: i * 25,
			y: 10,
			width: 23,
			height: 44
		})
		man_anim = man_anim.delay(500);
		p.animate(man_anim);
		p.hover(function() {
			this.stop();
	    	this.scale(1.3, 1.3, this.cx, this.cy);
		}, function() {
			this.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");
		})
	}

	var t = employment_paper.text(160, 90, "NASA recruits 18 000 employees").attr({font: "16px sans-serif"});

	var budget_pie = Raphael("budget", $('#budget').width(), 300) 
	var pie = budget_pie.piechart(140, 140, 100, [19.3, 0.5], { legend: ["%%.%% - Defence", "%%.%% - NASA"]});
	pie.hover(function () {
	    this.sector.stop();
	    this.sector.scale(1.1, 1.1, this.cx, this.cy);

	    if (this.label) {
	        this.label[0].stop();
	        this.label[0].attr({ r: 7.5 });
	        this.label[1].attr({ "font-weight": 800 });
	    }
	}, function () {
	    this.sector.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");

	    if (this.label) {
	        this.label[0].animate({ r: 5 }, 500, "bounce");
	        this.label[1].attr({ "font-weight": 400 });
	    }
	});
	var budget_t = budget_pie.text(300, 280, "Around 0.5% of the budget was spent on Space Research");
});