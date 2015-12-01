/**
 * Created by Kristina_Patrakova on 12/1/2015.
 */
var Helpers = {
    getFullPath: function(imgName){
        return 'images/' + imgName;
    },
    getPageName() {
        var path = window.location.hash;
        return path.replace(/\?.*/,'');
    }
};