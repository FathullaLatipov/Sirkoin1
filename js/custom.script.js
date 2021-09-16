(function($) {
    "use strict";
    var revapi;
    var clickFlag = true;
    var shift = $(window).width() > 640 ? 350 : 150;

    /*----------  MOBILE DETECT  ----------*/
    var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};
	/*----------  //MOBILE DETECT  ----------*/

	/*----------  PRELOADER  ----------*/
	setTimeout(function(){
		$('#preloader').animate({'opacity' : '0'},300,function(){
			$('#preloader').hide();
			if(0 < $(window).scrollTop()){				
				setTimeout(function(){
					scrolling();
				}, 500)
			}	
		});

		$('.page-wrapper').animate({'opacity' : '1'},500);
	},3000)
	/*----------  //PRELOADER  ----------*/
	
	/*----------  FUNCTION FOR SWITCH THEME COLOR  ----------*/
	if($('.picker-btn').length){
		$('.picker-btn').on('click', function(){
			if(parseInt($('.color-picker').css('right')) == 0){
				$('.color-picker').stop().animate({'right': -160}, 500);
			}else{
				$('.color-picker').stop().animate({'right': 0}, 500);
			}
		});
		$('.color-picker .pwrapper div.color').on('click', function(){
			$('body').removeClass('lightgreen blue green lightred red yellow turquoise pink purple');
			$('body').addClass($(this).attr('data-color'));
		});
	}
	/*----------  //FUNCTION FOR SWITCH THEME COLOR  ----------*/

	/*----------  NAVIGATION ON PAGE  ----------*/
	$.scrollIt();
	/*----------  //NAVIGATION ON PAGE  ----------*/

	$('.images-bg').each(function(){
		$(this).css({
			'background-image': 'url(' +$('>img', this).hide().attr('src') +')'
		});
	});

	function parallaxInit() {
		if (!isMobile.any())
		{
			$('.parallax').parallax("50%", 0.2);
		}
	}	
	parallaxInit();	

	setTimeout(function(){
		/*----------  SKILLS SLIDER  ----------*/
		$('.skills-slider .flexslider').flexslider({slideshowSpeed: 6000});
		/*----------  //SKILLS SLIDER  ----------*/

		/*----------  SINGLE WORK SLIDER  ----------*/
		$('.single-work .flexslider').flexslider({slideshowSpeed: 6000});
		/*----------  //SINGLE WORK SLIDER  ----------*/

		/*----------  SINGLE WORK SLIDER  ----------*/
		$('.blog-block .flexslider').flexslider({slideshowSpeed: 6000});
		/*----------  //SINGLE WORK SLIDER  ----------*/

		/*----------  CLIENTS FEEDBACK SLIDER  ----------*/
		$('.clients-feedback .flexslider').flexslider({slideshowSpeed: 6000});
		/*----------  //CLIENTS FEEDBACK SLIDER  ----------*/

		/*----------  WORK SLIDER  ----------*/
		if($(window).width() < 361){
		$('.work .flexslider').flexslider({
				prevText: "", 
				nextText: "", 
				slideshow: false,
				animation: "slide",
				itemWidth: 200,
				minItems: 1,
		    	maxItems: 1,
			});
		}else if($(window).width() < 801){
			$('.work .flexslider').flexslider({
				prevText: "", 
				nextText: "", 
				slideshow: false,
				animation: "slide",
				itemWidth: 200,
				minItems: 2,
		    	maxItems: 2,
			});
		}else{
			$('.work .flexslider').flexslider({
				prevText: "", 
				nextText: "", 
				slideshow: false,
				animation: "slide",
				itemWidth: 200,
				minItems: 2,
		    	maxItems: 3
			});
		}
		/*----------  //WORK SLIDER  ----------*/
	}, 2000);
	
	if($('.work-block .zoom').length){
		$('.work-block .zoom').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300
			}
		});
	}	

	$('.navbar-link-bg').each(function(){
		var width = $(this).width();
		$(this).css({
			'border-left': width/2 + 'px solid transparent',
			'border-right': width/2 + 'px solid transparent'
		})
		$('span', this).width(width).css('left', width/2*-1);
	})
	/*----------  VIDEO  ----------*/
	var min_w = 300; // minimum video width allowed
    var vid_w_orig;  // original video dimensions
    var vid_h_orig;

	setTimeout(function(){	        
        vid_w_orig = parseInt($('#video-container video').attr('width'));
        vid_h_orig = parseInt($('#video-container video').attr('height'));
        
        $(window).resize(function () { resizeToCover(); });
        $(window).trigger('resize');
    }, 2000);

    function resizeToCover() {

	    // set the video viewport to the window size
	    $('#video-container').width($(window).width());
	    $('#video-container').height($(window).height());

	    // use largest scale factor of horizontal/vertical
	    var scale_h = $(window).width() / vid_w_orig;
	    var scale_v = $(window).height() / vid_h_orig;
	    var scale = scale_h > scale_v ? scale_h : scale_v;

	    // don't allow scaled width < minimum video width
	    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

	    // now scale the video
	    $('#video-container video').width(scale * vid_w_orig);
	    $('#video-container video').height(scale * vid_h_orig);
	    // and center it by scrolling the video viewport
	    $('#video-container').scrollLeft(($('#video-container video').width() - $(window).width()) / 2);
	    $('#video-container').scrollTop(($('#video-container video').height() - $(window).height()) / 2);

    }

    /*----------  //VIDEO  ----------*/
    $('#bs-example-navbar-collapse-1 li > a').on('click',function(){
    	clickFlag = false;
    	$('#bs-example-navbar-collapse-1 li').removeClass('active');
    	
		$(this).parent().addClass('active');
		setTimeout(function(){
			clickFlag = true
		}, 600);
    })
	function scrolling(){
		var scroll = $(window).scrollTop() + $(window).height();

		/*----------  HEADER  ----------*/
		if($(window).scrollTop() > 40){
			$('#haeder').addClass('fixed');
		}else{
			$('#haeder').removeClass('fixed');
			if(clickFlag){
				$('#bs-example-navbar-collapse-1 li').removeClass('active');
				$('#bs-example-navbar-collapse-1 li:eq(0)').addClass('active');
			}
			
		}
		/*----------  //HEADER  ----------*/

		/*----------  ANIMATION FOR ABOUT  ----------*/
		if($('#about').length && parseInt($('#about').offset().top)+shift < scroll){	
			if(clickFlag){
				$('#bs-example-navbar-collapse-1 li').removeClass('active');
				$('#bs-example-navbar-collapse-1 li:eq(1)').addClass('active');
			}
			

			if($('#about').hasClass('animate')){
				$('#about').removeClass('animate');
				var time = -200;
				$('#about .about-block').each(function(){
					time += 200;
					var thiz = this;
					setTimeout(function(){
						$(thiz).addClass('fadeInUp animated').css('opacity',1);
						$(thiz).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(thiz).removeClass('fadeInUp animated');
						});						
					}, time)
				})
			}
		}
		/*----------  //ANIMATION FOR ABOUT  ----------*/
		if($('#team').length && parseInt($('#team').offset().top)+shift < scroll){	
			if(clickFlag){
				$('#bs-example-navbar-collapse-1 li').removeClass('active');
				$('#bs-example-navbar-collapse-1 li:eq(2)').addClass('active');
			}
		}

		if($('#work').length && parseInt($('#work').offset().top)+shift+100 < scroll){	
			if(clickFlag){
				$('#bs-example-navbar-collapse-1 li').removeClass('active');
				$('#bs-example-navbar-collapse-1 li:eq(3)').addClass('active');
			}
		}

		if($('#skills').length && parseInt($('#skills').offset().top)+shift < scroll){	
			if(clickFlag){
				$('#bs-example-navbar-collapse-1 li').removeClass('active');
				$('#bs-example-navbar-collapse-1 li:eq(4)').addClass('active');
			}
		}

		if($('#blog').length && parseInt($('#blog').offset().top)+shift < scroll){	
			if(clickFlag){
				$('#bs-example-navbar-collapse-1 li').removeClass('active');
				$('#bs-example-navbar-collapse-1 li:eq(5)').addClass('active');
			}
		}

		if($('#contact').length && parseInt($('#contact').offset().top)+shift < scroll){	
			if(clickFlag){
				$('#bs-example-navbar-collapse-1 li').removeClass('active');
				$('#bs-example-navbar-collapse-1 li:eq(6)').addClass('active');
			}
		}
		
	}




	/*----------  FUNCTION FOR WINDOW SCROLL  ----------*/
	$(window).on('scroll', function(){
		scrolling();
	});
	/*----------  //FUNCTION FOR WINDOW SCROLL  ----------*/

    /*----------  LOGO SLIDER  ----------*/
    setTimeout(function(){
		$('#logoSlider').carouFredSel({
			mousewheel: true,
			swipe: {
				onMouse: true,
				onTouch: true
			},
			items: 6,
			responsive: true,
			scroll: 1
		});
    }, 2000);    
	/*----------  //LOGO SLIDER  ----------*/

    revapi = jQuery('.tp-banner').revolution(
	{
		delay:9000,
		startwidth:1170,
		startheight:610,
		hideThumbs:10,
		fullWidth:"off",
		fullScreen:"on",
		fullScreenOffsetContainer: "",
		navigationStyle:"preview4" 
	});

    /*----------  WORKS SLIDER  ----------*/
	setTimeout(function(){
		var $container = $('#worksContent');

	    $container.isotope({
	      itemSelector : '.slide',
	      getSortData : {
	        category : function( $elem ) {
	          return $elem.attr('data-category');
	        }
	      }
	    });

	    var $optionSets = $('.works-category'),
	      $optionLinks = $optionSets.find('a');

		$optionLinks.click(function(){
			var $this = $(this);
			// don't proceed if already selected
			if ( $this.hasClass('active') ) {
				return false;
			}
			var $optionSet = $this.parents('.works-category');
			$optionSet.find('.active').removeClass('active');
			$this.addClass('active');

			// make option object dynamically, i.e. { filter: '.my-filter-class' }
			var options = {},
			key = $optionSet.attr('data-option-key'),
			value = $this.attr('data-option-value');
			// parse 'false' as false boolean
			value = value === 'false' ? false : value;
			options[ key ] = value;
			$container.isotope( options );

			return false;
		});
	}, 1000);
	/*----------  //WORKS SLIDER  ----------*/

	/*----------  SUBMIT FUNCTION  ----------*/
    $('.contact form .button').on('click', function(){
		var thiz = this;
		var flag = true;

		if(/\D/.test($('.contact input[name="phone"]').val()) || !$('.contact input[name="phone"]').val().length){
            $('.contact input[name="phone"]').val('').attr('placeholder','please enter phone number').addClass('error');
            flag = false;
        }
        if(!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test($('.contact input[name="email"]').val())){
            $('.contact input[name="email"]').val('').attr('placeholder','please enter correct e-mail').addClass('error');;
            flag = false;
        }


        if(flag){
            $(thiz).parents('form').submit(); 
            $(thiz).addClass('success').html('success'); 
            $('.contact input').removeClass('error');      	
        }else{
        	$(thiz).addClass('error').html('error'); 
        }

        setTimeout(function(){
        	$(thiz).removeClass('error success').html('send message'); 
        }, 3000)
        
        return false;
    });

	$("#ajax-contact-form").submit(function() {
		var str = $(this).serialize();		
		var href = location.href.replace(/index\.html/g,'');
		$.ajax({
			type: "POST",
			url: href + "contact_form/contact_process.php",
			data: str,
			success: function(msg) {
				// Message Sent - Show the 'Thank You' message and hide the form
				if(msg == 'OK') {
					$(this).addClass('success').find('span:eq(1)').html('success'); 
				} else {
					$(this).addClass('error').find('span:eq(1)').html('error'); 
				}
			}
		});
		return false;
	});
	/*----------  //SUBMIT FUNCTION  ----------*/

})(jQuery); 