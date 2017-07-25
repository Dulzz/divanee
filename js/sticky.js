  /* sticky */

	 $(document).ready(function(){

	 	$('.js-header').waypoint(function(direction){
	 		if(direction == "down"){
	 			$('nav').addClass('sticky');
	 		}else{
	 			$('nav').removeClass('sticky');
	 		}
	 	}, {
	 		offset: '10%;'
	 	});
	 	/*
	 	var waypoints = $('#handler-first').waypoint(function(direction) {
	  		notify(this.element.id + ' hit 25% from top of window') 
		}, {
	  	offset: '25%'
		})
		*/

  /* */

  /* scroll to the top */

  	

		$("#top").click(function() {
		  $("html, body").animate({ scrollTop: 0 }, "slow");
		  return false;
		});

	

  /* */ 


  /* scroll on navigation */ 

  	$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });



  /* */

  });