$(document).ready(function(){
    $(document).on('click','.productImages__image', function(){
        var attr = $(this).attr('src');
        $('img.productImages__bigImg').attr('src', attr)
    });
    //$(document).on('click', '.productImages__image--arrow', function(){
    //    c = $("[src=\""+$(".productImages__bigImg")[0].getAttribute('src')+"\"]");
    //});
});

//$(document).ready(function() {
//        var select = $(".productImages__image:eq(0)");
//        $(document).on('click','.productImages__image--arrow', function(){
//        select = select.parent().next().children[0];
//        console.log(select);
//        //if (select.attr("src") == undefined) {
//        //    select = $(".productImages__image:eq(0)");
//        //};
//    });
//
//});
