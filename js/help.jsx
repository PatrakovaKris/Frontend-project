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
    },
    getUrlParams() {
        var path = window.location.hash;
        path = path.replace(/.*?\?/,'');

        var params = path.split('&');
        var result = {};
        for(var i=0; i<params.length; i++){
            var pair = params[i].split('=');
            result[pair[0]] = pair[1];
        }

        return result;
    },
    getCategoryName(cat) {
        switch(cat){
            case "classic":
                return "Клаcсические";
            case "acoustic":
                return "Аккустические";
            case "elacc":
                return "Электро-аккустические";
            case "electro":
                return "Электрические";
            case "bass":
                return "Басс";
            case "ukulele":
                return "Укулеле";
            case "bango":
                return "Банджо";
            case "balalaikis":
                return "Балалайки";
        }
    },
    getCategoryUrl(cat) {
        switch(cat){
            case "classic":
                return "#itemslist?cat=classic";
            case "acoustic":
                return "#itemslist?cat=acoustic";
            case "elacc":
                return "#itemslist?cat=elacc";
            case "electro":
                return "#itemslist?cat=electro";
            case "bass":
                return "#itemslist?cat=bass";
            case "ukulele":
                return "#itemslist?cat=ukulele";
            case "bango":
                return "#itemslist?cat=bango";
            case "balalaikis":
                return "#itemslist?cat=balalaikis";
        }
    }
};