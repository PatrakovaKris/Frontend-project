/**
 * Created by Kristina_Patrakova on 12/4/2015.
 */
$(document).ready(function() {
    $('#small a').click(function(eventObject) {
        $('#big img').hide().attr('src',$(this).attr('href'));
        $('#big img').load(function() {
            $(this).fadeIn(1000);
        });
        eventObject.preventDefault();
    });
});