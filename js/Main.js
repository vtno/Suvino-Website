		var check = true;
		$(document).ready(function() {
		    $(window).scroll(function() {
		        if ($(window).scrollTop() > 400 && check) {
		            $(".header").css("position", "fixed");
		            $(".header").css("top", "-80px");
		            $(".header").animate({
		                "top": "0"
		            }, 1000);
		            $("#logo").css("position", "absolute");
		            $("#logo").css("height", "40px");
		            $("#logo").css("top", "0");
		            $("#logo").css("width", "auto");
		            $(".header").css("height", "45px");
		            $(".lg").hide();
		            $(".navbar-default").addClass("navbar-right");
		            check = false;
		        }
		        if ($(window).scrollTop() < 400) {
		            $(".header").css("position", "absolute");
		            $(".header").css("height", "45px");
		            $("#logo").css("position", "static");
		            $("#logo").css("height", "70px");
		            $("#logo").css("width", "180");
		            $("#logo").css("display", "inline");
		            $(".navbar-default").removeClass("navbar-right");
		            $(".navbar-default").addClass("navbar-left");
		            $(".header").css("height", "120");
		            $(".header").css("top", "0");
		            $(".lg").show();
		            check = true;
		        }
		    });
		});