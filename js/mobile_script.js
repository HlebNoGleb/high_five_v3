$(".menu_links").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var  top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
});
$('.burger_menu-btn').on('click', function(e) {
	$(this).toggleClass('burger_menu-btn_active');
	$(".burger_menu").toggleClass("burger_menu_active");
});