var Categories = [];

function Category(name, imgSrc, url){
    this.name = name;
    this.imgSrc = imgSrc;
    this.url = url;
}
function getCategories(){

    Categories.push(new Category('Класc. гитары','gklass.jpg','Itemsgrid.html'));
    Categories.push(new Category('Акк. гитары','gakust3.jpg','Itemsgrid.html'));
    Categories.push(new Category('Электро-акк. гитары','gelecakust.jpg','Itemsgrid.html'));
    Categories.push(new Category('Электрогитары','gelectro.jpg','Itemsgrid.html'));
    Categories.push(new Category('Басс. гитары','gbass.jpg','Itemsgrid.html'));
    Categories.push(new Category('Укулеле','gukulele.jpg','Itemsgrid.html'));
    Categories.push(new Category('Банджо','gbanjo.jpg','Itemsgrid.html'));
    Categories.push(new Category('Балалайки','gbalalaika.png','Itemsgrid.html'));
}
function createCategoryHTML(category){
    var itemBlock = document.createElement('figure');
    var imageBlock = document.createElement('div');
    var image = document.createElement('img');
    var figcaption = document.createElement('figcaption');
    var a = document.createElement('a');
    
    itemBlock.className = "categories__itemBlock";
    imageBlock.className = "categories__imageBlock";
    image.className = "categories__image";
    image.setAttribute('src', 'images/'+category.imgSrc);
    figcaption.className = 'categories__titleBlock';
    a.className = 'categories__title';
    a.setAttribute('href', category.url);
    a.innerText = category.name;
    
    imageBlock.appendChild(image);
    figcaption.appendChild(a);
    itemBlock.appendChild(imageBlock);
    itemBlock.appendChild(figcaption);
    
    return itemBlock;
}
function pushToCategories(element){
    var list = document.getElementById('CategoriesList');
    
    list.appendChild(element);
}
function initCategories(){
    getCategories();
    for(var i=0; i<Categories.length; i++){
        var elem = createCategoryHTML(Categories[i]);
        pushToCategories(elem);
    }
}



window.onload = function(){
    initCategories();
}