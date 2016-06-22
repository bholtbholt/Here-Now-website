$(document).ready(function(){
		//loop through cities
		var cityHook = $('span[id^="city-switcher-"]').hide(),
				mapHook = $('img[id^="map-switcher-"]').hide(),
				i = 0
				c = 0;
		$('span[id^="city-switcher-1"]').show();
		$('img[id^="map-switcher-1"]').show();
		(function cycle() { 
			cityHook.eq(i).fadeIn(200)
			          .delay(3000)
			          .fadeOut(200, cycle);

			i = ++i % cityHook.length; // increment i, and reset to 0 when it equals cities.length
		})();
		(function cycle() { 
			mapHook.eq(c).fadeIn(200)
			          .delay(3000)
			          .fadeOut(200, cycle);

			c = ++c % mapHook.length;
		})();

		//pop over message
		$('#exactly-one-email').popover();

		//ajax form
		$('#email-signup-form').submit(function(){

			//check if the form is submitting
			if($(this).data('formstatus') !== 'submitting'){

				//set up variables
				var	form = $('#email-signup-form');
						email = $('#email-signup').val(),
						city = $('#city-signup').val(),
		        formData = 'email-signup='+email+'&city-signup='+city;

		    //add data class to prevent resubmissions
		    $(this).data('formstatus','submitting');

        $.ajax({
        	type:'POST',
        	url:'php/form.php',
        	data:formData,
        	success:function(){
        		form.html('<p class="lead">Thanks! Talk soon.</p>').delay(3000).fadeOut(200);
        	}
        });
      }

      return false;

		});
})