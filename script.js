$(document).ready(function(e){

// $('.bxslider').bxSlider({
// 	minSlides: 1,
// 	maxSlides: 6,
// 	slideWidth: 147,
// 	slideHeight: 147,
// 	slideMargin: 45,
// 	moveSlides: 1,
// });

/* ����� �������� ����� */
// $(".header_contact button").click(function(){	
// 	$("#leave_application").slideDown("normal");
// 	$(".background").fadeIn(500);
// });
// $(".footer_telephone_application").click(function(){	
// 	$("#leave_application").slideDown("normal");
// 	$(".background").fadeIn(500);
// });
// $(".header_email p a").click(function(){	
// 	$("#request_call").slideDown("normal");
// 	$(".background").fadeIn(500);
// });
// $(".footer_telephone_request").click(function(){	
// 	$("#request_call").slideDown("normal");
// 	$(".background").fadeIn(500);
// });
// $(".exit_form").click(function(){
// 	$(".leave_application").slideUp("normal");
// 	$(".background").fadeOut(500);
// 	$("#leave_application").slideUp("normal");
// 	$("#request_call").slideUp("normal");
// });
// $("#leave_application").css({"margin-left": "-"+$("#leave_application").outerWidth() / 2+"px","margin-top":"-"+$("#leave_application").outerHeight() / 2+"px"});
// $("#request_call").css({"margin-left": "-"+$("#request_call").outerWidth() / 2+"px","margin-top":"-"+$("#request_call").outerHeight() / 2+"px"});


// /* �������� ��� �������� �� ������� �������� */
// $("#slides .slide_text .title").addClass("fadeInRight animated_one");
// $("#slides .slide_text .description").addClass("fadeInRight animated_second");
// $("#slides .slide_text .feedback_form_slider").addClass("fadeInRight animated_three");


// /* ����������� ������ footer � hFooter */
// $(".hFooter").height($("footer").innerHeight());
// $("footer").css("margin-top","-"+$("footer").innerHeight()+"px");


// /* ������� */
// $("#slides .slide_text").css({"margin-top":"-"+$("#slides .slide_text").height() / 2 +"px"});
// $("#slides .slides_images").css({"width":$(window).width()+"px"});
// $(window).resize(function(){
// 	$("#slides .slides_images").css({"width":$(window).width()+"px"});
// 	$("#slides .slide_text").css({"margin-top":"-"+$("#slides .slide_text").height() / 2 +"px"});
// 	$(".hFooter").height($("footer").innerHeight());
// 	$("footer").css("margin-top","-"+$("footer").innerHeight()+"px");
// });
// $(".prev, .next").css({"margin-top":"-"+$(".prev").height() / 2+"px"});


// /* � �������� �������� ��� �������� */
// $(".projects").on('click', 'button', function(){
// 	startLoadingAnimation();
// 	$.ajax({
// 		async: false,
// 		type: "POST",
// 		url: $(this).attr("data-site-id")+"ajax_script/projects.php",
// 		data: "ajax_array="+$(this).attr("data-all-count")+"&section_id="+$(this).attr("data-section-id"),
// 		dataType: "html",
// 		success:function(data){
// 			setTimeout(function(){
// 				$(".projects").html("");
// 				$(".loadImg").hide();
// 				$(".projects").html(data);
// 			}, 1000);
// 		} 
// 	});
// });

// function startLoadingAnimation()
// {
// 	var imgObj = $(".loadImg");
// 	var bgObj = $(".load_bg");
// 	imgObj.fadeIn();
// 	bgObj.fadeIn();
// 	imgObj.css({"margin-left": "-"+imgObj.width() / 2+"px", "margin-top": "-"+imgObj.height() / 2+"px"});
// }


// /* ���� �������� ����� � ������������ */
// $(".calculator tbody .column_5 input").keyup(function(){
// 	var total_price = 0;
// 	$(".calculator tbody .column_5 input").each(function(){
// 		var count = $(this).val();
// 		var price = parseInt($(this).attr("data-price"));
// 		total_price = total_price + (price * count);
// 		$(".total_price span").text(total_price);
// 		$(".total_price_bottom span").text(total_price);
// 	});
// });
// $(".calculator tbody .column_5 input").keyup(function(){
// 	var count = $(this).val();
// 	var rub_val = $("#rub_val").val();
// 	var price = parseInt($(this).attr("data-price"));
// 	var parent = $(this).parentsUntil("tbody");
// 	$("> .column_6 span", parent).text(count * price + rub_val);
// });


// /* ��������� ��������� �� ����������� ��������� */
// var url = window.location.search;
// var arrayVar = (url.substr(1)).split('&');
// var valueAndKey = [];
// var resultArray = [];
// for (i = 0; i < arrayVar.length; i++) {
// 	valueAndKey = arrayVar[i].split('=');
// 	resultArray[valueAndKey[0]] = valueAndKey[1];
// 	if(valueAndKey[0] == "success"){
// 		$('.dialog').css("display","block").removeClass("dialog-close").addClass("dialog-open");
// 		$(".background").css("display","block");
// 		window.history.pushState(null, null, "/index.php");
// 	}
// }

// /* ���� �� �������� �������� ��������� */
// $(".dialog").css({"margin-left": "-"+$(".dialog").outerWidth() / 2+"px","margin-top":"-"+$(".dialog").outerHeight() / 2+"px"});
// $(".dialog button").click(function(){
// 	$(".dialog").removeClass("dialog-open").addClass("dialog-close");
// 	$(".background").fadeOut(500);
// 	$(".dialog").fadeOut(500);
// });
// $(".background").click(function(){
// 	$(".dialog").removeClass("dialog-open").addClass("dialog-close");
// 	$(this).fadeOut(500);
// 	$(".dialog").fadeOut(500);
// 	$("#leave_application").slideUp("normal");
// 	$("#request_call").slideUp("normal");
// });

// /* ������������� ���� */
// var $menu = $("#top_menu");
// $(window).scroll(function(){
// 	if((device.windows() || device.fxos()) && $(window).width() > '1023') {
// 		if ( $(this).scrollTop() > 180 && $menu.hasClass("default") ){
// 			$menu.removeClass("default").addClass("fixed_menu");
// 		} else if($(this).scrollTop() <= 180 && $menu.hasClass("fixed_menu")) {
// 			$menu.removeClass("fixed_menu").addClass("default");
// 		}
// 	}
// });

// /* ��������� ������ */
// var offset = 300,
// offset_opacity = 1200,
// scroll_top_duration = 700,
// $back_to_top = $('.top_map');
// $(window).scroll(function(){
// 	( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd_is_visible') : $back_to_top.removeClass('cd_is_visible cd_fade_out');
// 	if( $(this).scrollTop() > offset_opacity ) { 
// 		$back_to_top.addClass('cd_fade_out');
// 	}
// });
// $back_to_top.on('click', function(event){
// 	event.preventDefault();
// 	$('body,html').animate({
// 		scrollTop: 0 ,
// 		}, scroll_top_duration
// 	);
// });


// $(".projects_photo a").fancybox();


// $('#slides').slides({
// 	preload: true,
// 	preloadImage: '/bitrix/templates/site/css/themes/images/slider/loading.gif',
// 	play: 5000,
// 	hoverPause: false,
// 	animationComplete: function(current){if (window.console && console.log) {};}
// });


var pull = $('#mobile_menu');
var menu = $('header nav ul');
$(pull).on('click', function(e) {
	e.preventDefault();
	menu.slideToggle();
});	

var touchHover = function() {
    $('[data-hover]').click(function(e){
        e.preventDefault();
        var $this = $(this);
        var onHover = $this.attr('data-hover');
        var linkHref = $this.attr('href');
        if (linkHref && $this.hasClass(onHover)) {
            location.href = linkHref;
            return false;
        }
        $this.toggleClass(onHover);
    });
};
touchHover();


// /* ������������� ���� � ������������� */		
// var a = document.querySelector('.calculator .total_price'), b = null;  // �������� �����, ������� ����� ���������
// if(a){
// 	window.addEventListener('scroll', Ascroll, false);
// 	document.body.addEventListener('scroll', Ascroll, false);  // ���� � html � body ������ ����� 100%
// 	function Ascroll() {
// 	  if (b == null) {  // �������� �������-������, ����� ������ ����������� � ��������
// 		var Sa = getComputedStyle(a, ''), s = '';
// 		for (var i = 0; i < Sa.length; i++) {  // ����������� ����� CSS, ������� ����� ����������� � ��������
// 		  if (Sa[i].indexOf('padding') == 0) {
// 			s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
// 		  }
// 		}
// 		b = document.createElement('div');  // ������� �������
// 		//b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
// 		a.insertBefore(b, a.firstChild);  // ��������� ������� � ����������� ���� ������
// 		var l = a.childNodes.length;
// 		for (var i = 1; i < l; i++) {  // ����������� �� ����� ���������� ������� ���� ��������� �������� (�����: ������ �������-������, ������ �������� �� �������� �������� �������)
// 		  b.appendChild(a.childNodes[1]);
// 		}
// 		//a.style.height = b.getBoundingClientRect().height + 'px';  // ���� ��� ���������� ��������� ���� ������ �����, ����� ��� ��������
// 		//a.style.padding = '0';
// 		//a.style.border = '0';
// 	  }
// 	  if (a.getBoundingClientRect().top <= 0) { // elem.getBoundingClientRect() ���������� � px ���������� �������� ������������ �������� ������ ���� ������� ��������� ���� ��������
// 		b.className = 'total_fixed_price';
// 	  } else {
// 		b.className = '';
// 	  }
// 	  window.addEventListener('resize', function() {
// 		a.children[0].style.width = getComputedStyle(a, '').width
// 	  }, false);  // ���� �������� ������ ���� ��������, ���������� ������ ��������
// 	}
// }


// /* ���� ������������ ����� */
// $('.style-switcher .switch').click(function(e){
// 	e.preventDefault();
// 	var styleswitcher = $(this).closest('.style-switcher');
// 	if(styleswitcher.hasClass('active')){
// 		styleswitcher.animate({left: '-' + styleswitcher.outerWidth() + 'px'}, 300).removeClass('active');
// 	}
// 	else{
// 		styleswitcher.animate({left: '0'}, 300).addClass('active');
// 		var pos = styleswitcher.offset().top;
// 		if($(window).scrollTop() > pos){
// 			$('html, body').animate({scrollTop: pos}, 500);
// 		}
// 	}
// });
// $('.style-switcher .options li').click(function(e){
// 	$(this).addClass('active').siblings().removeClass('active');
// 	var name_color = $("> a",this).attr("data-option-value");
// 	//alert(name_color);
// 	var link_color = "/bitrix/templates/sait/css/themes/styles_"+name_color+".css";
// 	$("[data-color = 'true']").attr("href",link_color);
// 	$.cookie('color_theme', name_color, { expires: 7, path: '/' });
// });

// });

// /*������ ���������� ����� �� �����*/

// $(document).ready(function(){
// 	//Examples of how to assign the Colorbox event to elements
// 	$(".group1").colorbox({rel:'group1'});
// 	$(".group2").colorbox({rel:'group2', transition:"fade"});
// 	$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
// 	$(".group4").colorbox({rel:'group4', slideshow:true});
// 	$(".ajax").colorbox();
// 	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
// 	$(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
// 	$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
// 	$(".inline").colorbox({inline:true, width:"50%"});
// 	$(".callbacks").colorbox({
// 		onOpen:function(){ alert('onOpen: colorbox is about to open'); },
// 		onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
// 		onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
// 		onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
// 		onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
// 	});

// 	$('.non-retina').colorbox({rel:'group5', transition:'none'})
// 	$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
	
// 	//Example of preserving a JavaScript event for inline calls.
// 	$("#click").click(function(){ 
// 		$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
// 		return false;
// 	});
});
		