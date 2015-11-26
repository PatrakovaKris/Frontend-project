var Categories = [];

function Category(name, imgSrc, url){
    this.name = name;
    this.imgSrc = imgSrc;
    this.url = url;
}
function getCategories(){
    Categories.push(new Category('Классические гитары','gklass.jpg','Itemsgrid.html'));
    Categories.push(new Category('Классические гитары','gklass.jpg','Itemsgrid.html'));
    Categories.push(new Category('Классические гитары','gklass.jpg','Itemsgrid.html'));
    Categories.push(new Category('Классические гитары','gklass.jpg','Itemsgrid.html'));
    Categories.push(new Category('Классические гитары','gklass.jpg','Itemsgrid.html'));
    Categories.push(new Category('Классические гитары','gklass.jpg','Itemsgrid.html'));
    Categories.push(new Category('Классические гитары','gklass.jpg','Itemsgrid.html'));
    Categories.push(new Category('Классические гитары','gklass.jpg','Itemsgrid.html'));
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