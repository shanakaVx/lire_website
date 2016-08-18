(function() {
  var $background = $('.js-background');
  var $backgd = $('.js-backgd');
  var $btnContacts = $('.js-btn-contacts');
  var $btnAbout = $('.js-btn-about');
  var $btnDomain = $('.js-btn-domain');
  var $btnMilestones = $('.js-btn-milestones');
  var $btnDocuments = $('.js-btn-documents');
  var $homenavcontent = $('.js-homenavcontent');
  var $icoSpeak = $('.js-ico-speak');
  var $icoLearn = $('.js-ico-learn');
  var $icoApi = $('.js-ico-api');
  var $icoMic = $('.js-ico-mic');
  var $icoType = $('.js-ico-type');
  var $txtmic = $('.js-txtmic');
  var $txtType = $('.js-txt-type');
  var $txtSpeak = $('.js-txt-speak');
  var $txtLearn = $('.js-txt-learn');
  var $txtApi = $('.js-txt-api');
  var $lireLogo = $('.js-lire-logo');
  var $face = $('.js-face');
  var $faceInfo = $('.js-face-info');
  var $profile = $('.js-profile');
  var $sidedecor = $('.js-sidedecor');
  var $documentsAnchor = $('.js-documents-anchor');
  var $features = $('.js-features');
  var $milestonesAnchor = $('.js-milestones-anchor');
  var $objectiveAnchor = $('.js-objective-anchor');
  var $problemAnchor = $('.js-problem-anchor');
  var $researchgapAnchor = $('.js-researchgap-anchor');
  var $litAnchor = $('.js-lit-anchor');
  var $featuresAnchor = $('.js-features-anchor');
  var $topic = $('.js-topic');
  var $content = $('.js-content');
  var $topicDisplay = $('.js-topic-display');
  var $contentheader = $('.js-contentheader');
  var $domainsub = $('.js-domainsub');
  var $homenavcontent2 = $('.js-homenavcontent2');


  //initialize demo counter
  var valCounter = 0;

  //initialize background element sizes
  $background.height($(window).height());
  $backgd.height($(window).height());
  $domainsub.hide();
  $content.css('top', $(window).height()+"px");
  //$contentheader.css('top', $(window).height()+"px");

  //initialze back ground images
  $backgd.css('background-image', 'url(images/bmic.jpg)');
  $sidedecor.css('background-image', 'url(images/bmic.jpg)');
  $contentheader.css('background-image', 'url(images/bmic.jpg)');

  //$backgd.css('mix-blend-mode', 'soft-light');

  //initialize element stylings
  $content.hide();
  $contentheader.hide();
  $homenavcontent2.hide();

  //sub menus
  $backgd.click(function(){
  	$domainsub.slideUp();
  });

  $background.click(function(){
  	$domainsub.slideUp();
  });

  $content.click(function(){
  	$domainsub.slideUp();
  });

  //smooth scroll to anchors
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });


  hideAll();  
  //demo();
    
  function demo(){
    valCounter++;
    if(valCounter === 1)
    	$icoMic.trigger("click");
    else if(valCounter === 2)
    	$icoType.trigger("click");
    else if(valCounter === 3)
    	$icoSpeak.trigger("click");
    else if(valCounter === 4)
    	$icoLearn.trigger("click");
    else if(valCounter === 5){
      //valCounter = 0;
    	$icoApi.trigger("click");
    }
    else
      return;
    setTimeout(demo, 5000);
  }
    
    
  //mouse hover

  $icoMic.mouseenter(function(){
  	$(this).css('transform', 'rotate(360deg)');	
  });

  $icoMic.mouseleave(function(){
  	$(this).css('transform', 'rotate(0deg)');	
  });

  $icoType.mouseenter(function(){
  	$(this).css('transform', 'rotate(360deg)');	
  });

  $icoType.mouseleave(function(){
  	$(this).css('transform', 'rotate(0deg)');	
  });

  $icoApi.mouseenter(function(){
  	$(this).css('transform', 'rotate(360deg)');	
  });

  $icoApi.mouseleave(function(){
  	$(this).css('transform', 'rotate(0deg)');	
  });

  $icoLearn.mouseenter(function(){
  	$(this).css('transform', 'rotate(360deg)');	
  });

  $icoLearn.mouseleave(function(){
  	$(this).css('transform', 'rotate(0deg)');	
  });

  $icoSpeak.mouseenter(function(){
  	$(this).css('transform', 'rotate(360deg)');	
  });

  $icoSpeak.mouseleave(function(){
  	$(this).css('transform', 'rotate(0deg)');	
  });



  //click events

  $icoMic.click(function(){
    hideAll();
  	$txtmic.fadeIn();
    $backgd.css('background-image', 'url(images/bmic.jpg)');
    $sidedecor.css('background-image', 'url(images/bmic.jpg)');
    $contentheader.css('background-image', 'url(images/bmic.jpg)');
  });


  $icoType.click(function(){
    hideAll();
  	$txtType.fadeIn();
    $backgd.css('background-image', 'url(images/btype.jpg)');
    $sidedecor.css('background-image', 'url(images/btype.jpg)');
    $contentheader.css('background-image', 'url(images/btype.jpg)');
  });

  $icoApi.click(function(){
    hideAll();
  	$txtApi.fadeIn();
    $backgd.css('background-image', 'url(images/bapi.jpg)');
    $sidedecor.css('background-image', 'url(images/bapi.jpg)');
    $contentheader.css('background-image', 'url(images/bapi.jpg)');
  });

  $icoLearn.click(function(){
    hideAll();
  	$txtLearn.fadeIn();
    $backgd.css('background-image', 'url(images/blearn.jpg)');
    $sidedecor.css('background-image', 'url(images/blearn.jpg)');
    $contentheader.css('background-image', 'url(images/blearn.jpg)');
  });

  $icoSpeak.click(function(){
    hideAll();
  	$txtSpeak.fadeIn();
    $backgd.css('background-image', 'url(images/bspeak.jpg)');
    $sidedecor.css('background-image', 'url(images/bspeak.jpg)');
    $contentheader.css('background-image', 'url(images/bspeak.jpg)');
  });



  $btnDomain.click(function(){
    $content.fadeIn();
    $contentheader.fadeIn();
    var sctop = $(window).height() + 40;
    $("html, body").animate({ scrollTop: sctop }, "slow");
  });

  $btnDomain.hover(function(){
  	//$domainsub.css('height', '241px');
    $domainsub.slideDown();
  });

  $domainsub.mouseleave(function(){
  	$domainsub.slideUp();
  });

  $btnMilestones.click(function(){
    $content.fadeIn();
    $contentheader.fadeIn();
    var etop = $milestonesAnchor.offset().top;
    var wtop = $(document).scrollTop();
    
    $("html, body").animate({ scrollTop: (etop - wtop) }, "slow");
    
  });



  function hideAll(){
    $txtApi.hide();
    $txtLearn.hide();
    $txtSpeak.hide();
    $txtType.hide();
    $txtmic.hide();
  }


  //events bound to window scroll

  $( window ).scroll(function() {
    var top = $(document).scrollTop();
    
    if(top > 500){
      $homenavcontent.fadeOut();
      $homenavcontent2.fadeIn();
    } else {
      //$("html, body").animate({ scrollTop: 0 }, "slow");
    	$homenavcontent.fadeIn();
      $homenavcontent2.fadeOut();
      //$content.fadeOut();
    }
    if(top == 0){
    	$content.slideUp();
      $contentheader.slideUp();
    }
    
    var ctop = $content.offset().top;
    console.log(top+" - "+ctop);
    console.log("windowH - "+$(window).height());
    
    if((ctop - top) <= 0){
      $contentheader.css('position', 'fixed');
      $contentheader.css('top', '0px');
    } else {
      $contentheader.css('position', 'absolute');
      $contentheader.css('top', ctop+"px");
    }
    
    //call topic changer
    if(top > 495)
      changeSubTopic(top, "Domain");
      
  });


  //events bound to window resize
  $(window).resize(function(){
    
    $background.height($(window).height());
    $backgd.height($(window).height());
    $content.css('top', $(window).height()+"px");
    $contentheader.css('top', $(window).height()+"px");
  });


  function changeSubTopic(top, topic){
      $('#content').find('.subtopic').each(function(){
        var ele = $(this).offset().top;
        if((ele - top)<500 && (ele - top)>0){
          var subtopic = $(this).text();
          $topicDisplay.text(topic+", "+subtopic);
        }
      });
  }
})();