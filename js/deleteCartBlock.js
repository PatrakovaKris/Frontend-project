/**
 * Created by �������� on 03.12.2015.
 */

$('.gitarChoose__delete').on('click', function () {
    var $outer = $('#outer'),
        $section = $outer.find('.cart');
    $section.each(function () {
        $(this).remove();
    });
});
