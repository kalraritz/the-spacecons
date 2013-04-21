var ppp;
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


	var budget_pie = Raphael("budget", $('#budget').width(), 500) 
	var pie = budget_pie.piechart(230, 230, 200, [779, 712, 579, 845, 139, 79, 42, 23, 17, 224, 129, 102, 62, 56, 32, 31, 19, 13], {
		legend: ["%%.% - Social Security",
		"%%.% - Defence",
		"%%.% - Income Security",
		"%%.% - Health & Medicare",
		"Education",
		"Housing Credit",
		"Environment",
		"Energy",
		"%%.% - NASA",
		"Net Interest",
		"Veteran Services",
		"Transport",
		"Justice",
		"International affairs",
		"General Government",
		"Community Development",
		"Agriculture",
		"Other Sciences"]
	});
	var nasalogo = budget_pie.image('img/nasalogo.jpg', 700, 50, 0, 0);
	var budget_t = budget_pie.text(500, 360, "Try to find NASA").attr({font: "16px sans-serif"});
	var found = false;
	pie.hover(function () {
	    this.sector.stop();
	    this.sector.scale(1.1, 1.1, this.cx, this.cy);

    	ppp=this;

	    if (this.label) {
	        this.label[0].stop();
	        this.label[0].attr({ r: 7.5 });
	        this.label[1].attr({ "font-weight": 800 });
	    }
	    if (this.label[1].attrs.text.indexOf("Others") !== -1 && found == false) {
	    	found = true;
	    	// found nasa

			var found_t = budget_pie.text(800, 360, "NASA only receives 0.5% of the budget").attr({font: "16px sans-serif"});
			budget_t.hide();
	    	nasalogo.animate({width: 340, height: 293}, 2000, ">", function() {
		    	nasalogo.animate({width: 30, height: 25, x:100, y:100}, 2000, ">")
	    	});

	    	// animate logo bigger
	    	// move it into pie chart

	    }
	}, function () {
	    this.sector.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");

	    if (this.label) {
	        this.label[0].animate({ r: 5 }, 500, "bounce");
	        this.label[1].attr({ "font-weight": 400 });
	    }
	});

	$('#responsibility a').lightBox(); // Select all links in object with gallery ID
	
});