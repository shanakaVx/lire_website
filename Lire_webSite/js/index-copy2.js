(function() {
  var $background = $('.js-background');
  var $backgd = $('.js-backgd');
  var $features = $('.js-features');
  var $objectiveAnchor = $('.js-objective-anchor');
  var $problemAnchor = $('.js-problem-anchor');
  var $featuresAnchor = $('.js-features-anchor');
  var $researchgapAnchor = $('.js-researchgap-anchor');
  var $litAnchor = $('.js-lit-anchor');
  var $topic = $('.js-topic');
  var $content = $('.js-content');
  var $lireLogo = $('.js-lire-logo');
  var $topicDisplay = $('.js-topic-display');
  var $contentheader = $('.js-contentheader');
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
  var $domainsub = $('.js-domainsub');
  var $homenavcontent2 = $('.js-homenavcontent2');


  //initialize
  var valCounter = 0;
  $backgd.css('background-image', 'url(images/bmic.png)');
  $backgd.css('mix-blend-mode', 'soft-light');
  $background.height($(window).height());
  $content.hide();
  $contentheader.hide();
  $homenavcontent2.hide();

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
  demo();
    
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
    else if(valCounter === 5)
    	$icoApi.trigger("click");
    else
    	return;
    setTimeout(demo, 3000);
  }
    
    


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




  $icoMic.click(function(){
    hideAll();
  	$txtmic.fadeIn();
    $backgd.css('background-image', 'url(images/bmic.png)');
  });


  $icoType.click(function(){
    hideAll();
  	$txtType.fadeIn();
    $backgd.css('background-image', 'url(images/btype.png)');
  });

  $icoApi.click(function(){
    hideAll();
  	$txtApi.fadeIn();
    $backgd.css('background-image', 'url(images/bapi.png)');
  });

  $icoLearn.click(function(){
    hideAll();
  	$txtLearn.fadeIn();
    $backgd.css('background-image', 'url(images/blearn.png)');
  });

  $icoSpeak.click(function(){
    hideAll();
  	$txtSpeak.fadeIn();
    $backgd.css('background-image', 'url(images/bspeak.png)');
  });



  $btnDomain.click(function(){
    $content.fadeIn();
    $contentheader.fadeIn();
    $("html, body").animate({ scrollTop: 750 }, "slow");
    $domainsub.slideDown();
  });




  function hideAll(){
    $txtApi.hide();
    $txtLearn.hide();
    $txtSpeak.hide();
    $txtType.hide();
    $txtmic.hide();
  }

  $( window ).scroll(function() {
    //console.log($(document).scrollTop());
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
    
    if(top > 639){
      $contentheader.css('position', 'fixed');
      $contentheader.css('top', '0px');
    } else {
      $contentheader.css('position', 'absolute');
      $contentheader.css('top', '642px');
    }
    
    console.log(top);
    
    if(top > 495)
      $topicDisplay.text("Domain, What is Lire");
    if(top > 796)
      $topicDisplay.text("Domain, What is Lire, Features");
    
  });

  $(window).resize(function(){
  	//console.log($(this).height());
    $background.height($(window).height());
  });
})();