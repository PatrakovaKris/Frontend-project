
$(document).ready(function() {
    $('#smallImage').click(function(eventObject) {
        $('#bigImage').hide().attr('src',$(this).attr('src'));
        $('#bigImage').load(function() {
            $(this).fadeIn(1000);
        });
        eventObject.preventDefault();
    });
});
//
//
//    $('#productImages').on('click',function(){
//        var slider = $('#smallImage');
//        var attr = $(this).closest(slider).attr('src');
//        $('#bigImage').attr('src', attr)
//    });

//$(document).ready(function(){
//
//    $(document).on('click', 'div.slider-img .min-img--style',  function(){
//        var slider = $('div.slider-img .min-img--style');
//        var attr = $(this).closest(slider).attr('src');
//        $('img.big-img__positioner').attr('src', attr)
//    });
//});/**
