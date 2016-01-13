/**
 * Created by Кристина on 30.11.2015.
 */
var Page = React.createClass({
    getInitialState: function(){
        return {
            currentPage: Helpers.getPageName(),
            params: Helpers.getUrlParams(),
            cart: []
        }
    },
    getDefaultProps: function() {
        return {
            categories: [
                {description:'Класc. гитары',img:'gklass.jpg',href:'#itemslist?cat=classic'},
                {description:'Акк. гитары',img:'gakust3.jpg',href:'#itemslist?cat=acoustic'},
                {description:'Электро-акк. гитары',img:'gelecakust.jpg',href:'#itemslist?cat=elacc'},
                {description:'Электрогитары',img:'gelectro.jpg',href:'#itemslist?cat=electro'},
                {description:'Басс. гитары',img:'gbass.jpg',href:'#itemslist?cat=bass'},
                {description:'Укулеле',img:'gukulele.jpg',href:'#itemslist?cat=ukulele'},
                {description:'Банджо',img:'gbanjo.jpg',href:'#itemslist?cat=bango'},
                {description:'Балалайки',img:'gbalalaika.png',href:'#itemslist?cat=balalaikis'}
            ],
            products: [
                {id:0, href:'#itemscard?id=0', category:'classic', src:'gklass.jpg', name:'Martin D35', price: 500,
                    description:'Именная модель легендарного Джонни Кэша, ключевой фигуры в музыке кантри и рокабилли, и одного из самых влиятельных музыкантов XX века.',
                    fulldescription:'Гитара базируется на модели D-35 и выполнена в чёрном цвете с перламутровыми звёздами в качестве маркеров грифа. Martin D35 - известная своими мощными басами модель дредноут, нижняя дека изготовлена из 3-х частей индийского палисандра, верх из ели.                    Только массивы ценных пород, профессиональная гитара для ценителей качественного живого звука с насыщенным тембром.'},
                {id:1, href:'#itemscard?id=1', category:'classic', src:'gklass.jpg', name:'Martin D35', price: 600,
                    description:'Именная модель легендарного Джонни Кэша, ключевой фигуры в музыке кантри и рокабилли, и одного из самых влиятельных музыкантов XX века.',
                    fulldescription:'Гитара базируется на модели D-35 и выполнена в чёрном цвете с перламутровыми звёздами в качестве маркеров грифа. Martin D35 - известная своими мощными басами модель дредноут, нижняя дека изготовлена из 3-х частей индийского палисандра, верх из ели.                    Только массивы ценных пород, профессиональная гитара для ценителей качественного живого звука с насыщенным тембром.'},

                {id:2, href:'#itemscard?id=2', category:'acoustic', src:'gakust.jpg', name:'FENDER F-1020S', price: 600,
                    description:'Модель FENDER F-1020S DREADNOUGHT NATURAL представляет собой одну из лучших акустических гитар, обладающих массивным и особенно твердым корпусом.',
                    fulldescription:'Модель FENDER F-1020S DREADNOUGHT NATURAL представляет собой одну из лучших акустических гитар, обладающих массивным и особенно твердым корпусом и, вероятно, один из наиболее доступных вариантов инструментов данной категории на рынке.'},

                {id:3, href:'#itemscard?id=2', category:'acoustic', src:'gakust.jpg', name:'FENDER F-1020S', price: 600,
                    description:'Модель FENDER F-1020S DREADNOUGHT NATURAL представляет собой одну из лучших акустических гитар, обладающих массивным и особенно твердым корпусом.',
                    fulldescription:'Модель FENDER F-1020S DREADNOUGHT NATURAL представляет собой одну из лучших акустических гитар, обладающих массивным и особенно твердым корпусом и, вероятно, один из наиболее доступных вариантов инструментов данной категории на рынке.'},

                {id:4, href:'#itemscard?id=4', category:'elacc', src:'gelecakust.jpg', name:'YAMAHA APX 700II-12 BL', price: 600,
                    description:'Главным отличием электроакустических гитар Yamaha является великолепное усиленное звучание в сочетании с удобством игры и настроек.',
                    fulldescription:'Главным отличием электроакустических гитар Yamaha является великолепное усиленное звучание в сочетании с удобством игры и настроек. Идеальное решение, если нужен идеальный результат! При разработке гитар серии APX основной акцент делался на игровые качества. Тонкий корпус и вырезы обеспечивают удобный доступ к верхним ладам и плавный переход между электрическим и акустическим звучанием. Специальный дизайн креплений в серии APX обеспечивает великолепный отклик и звучание с крепкой серединой и верхами. Также особенностью гитар серии APX, в дополнение к прекрасному звучанию, является то, что они отлично подходят для соло-исполнения.'},

                {id:5, href:'#itemscard?id=5', category:'electro', src:'gelectro.jpg', name:'SCHECTER SYNYSTER CUSTOM-S BLK/SILV', price: 600,
                    description:'Компания SCHECTER очень гордиться не только многочисленным списком артистов, но и своей коллекцией моделей 2014 Artist.',
                    fulldescription:'Компания SCHECTER очень гордиться не только многочисленным списком артистов, но и своей коллекцией моделей 2014 Artist. В этой серии представлены только качественные модели с дизайном и точностью исполнения гитар, на которых эти парни играют на сцене. Здесь те же самые гитары какие украшают сцену и студии таких артистов как The Cure, Avenged Sevenfold, Jeff Loomis и других. '},

                {id:6, href:'#itemscard?id=6', category:'bass', src:'gbass.jpg', name:'SCHECTER HELLRAISER EXTREME-4 STBLS', price: 600,
                    description:'Вдохновленные Hellraiser Extreme гитарами, эти бас-гитары такие же угрожающие. ',
                    fulldescription:'Вдохновленные Hellraiser Extreme гитарами, эти бас-гитары такие же угрожающие. Характеризуясь цельным корпусом из махагона с кленовым верхом и EMG звукоснимателями, эти бас-гитары имеют ударный нижний регистр и в дополнение к кленовому верху черная/белая/черная окантовка и готический крест дают ошеломительный вид, который прекрасно сочетается с мощным тоном.'},

                {id:7, href:'#itemscard?id=7', category:'ukulele', src:'gukulele.jpg', name:'HOHNER LANIKAI UCKTEQ', price: 600,
                    description:'UCKTEQ – тенор электроакустическое укулеле, которое характеризуется корпусом из дерева Коа, накладкой из палисандра, литыми колками и кленовыми кантами на корпусе. ',
                    fulldescription:'UCKTEQ – тенор электроакустическое укулеле, которое характеризуется корпусом из дерева Коа, накладкой из палисандра, литыми колками и кленовыми кантами на корпусе. Укулеле имеет вырез и звукосниматель Shadow® JW2 active Nanoflex.Коа – редкое гавайское дерево, которое знаменито своими особенными волнистыми волокнами. Дерево произрастает только на острове Оаху, это великолепное дерево красной породы используется на всей Lanikai серии.'},

                {id:8, href:'#itemscard?id=8', category:'bango', src:'gbanjo.jpg', name:'FENDER CONCERT TONE BANJO', price: 600,
                    description:'Fender Concert Tone Banjo – это современная интерпретация классических банджо FENDER Concert Tone 60-х годов прошлого века.',
                    fulldescription:'Fender Concert Tone Banjo – это современная интерпретация классических банджо FENDER Concert Tone 60-х годов прошлого века. Серия Concert Tone ведет свою историю с 1968 года, уже тогда она стала очень популярной. Как и модели банджо от Fender конца 1960-х годов, новая модель была тщательно продумана и разработана, имеет элегантный внешний вид, красивый и богатый звук, а также отличается удобством при игре. Не важно, являетесь ли Вы начинающим музыкантом или опытным профессионалом, банджо производства Fender способны порадовать своим четким, резким, звенящим, «искрящимся» звуком.Данная модель Concert Tone Banjo представляет из себя блюграсс-банджо, имеет пять струн и длинную мензуру (69,6 см). Пятая струна – укороченная, натянута на отдельном колке, расположенном на грифе, на пятом ладу.Для производства инструмента были использованы самые высококачественные материалы и комплектующие. Корпус и гриф выполнены из древесины красного дерева с глянцевой полиуретановой отделкой. Резонатор – также из красного дерева, ламинированный. На грифе 22 лада, накладка - палисандровая. Верхний порожек сделан из искусственной кости, бридж - клен/черное дерево.Новая модель Concert Tone Banjo имеет стильный внешний вид «не стареющей классики». Элегантный облик банджо гармонично дополняет хромированная фурнитура и инкрустация ладов классическими белыми точками. Голова грифа – контрастная черная, с акриловым покрытием и золотым логотипом «Fender».'},

                {id:9, href:'#itemscard?id=9', category:'balalaikis', src:'gbalalaika.png', name:'VASCO BAS-80', price: 600,
                    description:'Именная модель легендарного Джонни Кэша, ключевой фигуры в музыке кантри и рокабилли, и одного из самых влиятельных музыкантов XX века.',
                    fulldescription:'Балалайка-бас VASCO BAS-80 - 3-х струнная,верхняя дека – ель массив, корпус и гриф – махагон массив,накладка на гриф – африканское черное дерево,накладной панцирь, отделка - глянцевый лак,Производство: Португалия'}

            ],
            navigation: [
                {href:'',name:'Класcические гитары'},
                {href:'',name:'Аккустические гитары'},
                {href:'',name:'Электро-акк. гитары'},
                {href:'',name:'Электрогитары'},
                {href:'',name:'Басс. гитары'},
                {href:'',name:'Укулеле'},
                {href:'',name:'Банджо'},
                {href:'',name:'Балалайки'},
            ],
            cardImages: [
                {id:0, bigimage:'git.jpg',smallimg1:'gakust3.jpg',smallimg2:'git2.jpg',smallimg3:'gakust5.jpg',arrowRigth:'arrow_rigth.png',arrowLeft:'arrow_left.png'},
                {id:1, bigimage:'git.jpg',smallimg1:'gakust3.jpg',smallimg2:'git2.jpg',smallimg3:'gakust5.jpg',arrowRigth:'arrow_rigth.png',arrowLeft:'arrow_left.png'},
                {id:2, bigimage:'git.jpg',smallimg1:'gakust3.jpg',smallimg2:'git2.jpg',smallimg3:'gakust5.jpg',arrowRigth:'arrow_rigth.png',arrowLeft:'arrow_left.png'},
                {id:3, bigimage:'git.jpg',smallimg1:'gakust3.jpg',smallimg2:'git2.jpg',smallimg3:'gakust5.jpg',arrowRigth:'arrow_rigth.png',arrowLeft:'arrow_left.png'},
                {id:4, bigimage:'git.jpg',smallimg1:'gakust3.jpg',smallimg2:'git2.jpg',smallimg3:'gakust5.jpg',arrowRigth:'arrow_rigth.png',arrowLeft:'arrow_left.png'},
                {id:5, bigimage:'git.jpg',smallimg1:'gakust3.jpg',smallimg2:'git2.jpg',smallimg3:'gakust5.jpg',arrowRigth:'arrow_rigth.png',arrowLeft:'arrow_left.png'},
                {id:6, bigimage:'git.jpg',smallimg1:'gakust3.jpg',smallimg2:'git2.jpg',smallimg3:'gakust5.jpg',arrowRigth:'arrow_rigth.png',arrowLeft:'arrow_left.png'},
                {id:7, bigimage:'git.jpg',smallimg1:'gakust3.jpg',smallimg2:'git2.jpg',smallimg3:'gakust5.jpg',arrowRigth:'arrow_rigth.png',arrowLeft:'arrow_left.png'},
                {id:8, bigimage:'git.jpg',smallimg1:'gakust3.jpg',smallimg2:'git2.jpg',smallimg3:'gakust5.jpg',arrowRigth:'arrow_rigth.png',arrowLeft:'arrow_left.png'},
                {id:9, bigimage:'git.jpg',smallimg1:'gakust3.jpg',smallimg2:'git2.jpg',smallimg3:'gakust5.jpg',arrowRigth:'arrow_rigth.png',arrowLeft:'arrow_left.png'}
            ],
            cart: [
                {img:'u1.jpg',name:'Martin Guitars D351'},
                {img:'u1.jpg',name:'Martin Guitars D352'},
                {img:'u1.jpg',name:'Martin Guitars D353'},
                {img:'u1.jpg',name:'Martin Guitars D354'}
            ]
        }
    },
    updatePage: function(e){
        window.location.assign(e.target.getAttribute('href'));
        this.setState({
            currentPage: Helpers.getPageName(),
            params: Helpers.getUrlParams(),
            cart: this.state.cart
        });
        e.preventDefault();
    },
    getProductsByCategory: function(cat){
        var result = [];
        this.props.products.map(function(product){
            if(product.category == cat){
                result.push(product);
            }
        });
        return result;
    },
    getProductById: function(id){
        for(var i=0; i<this.props.products.length; i++){
            if(this.props.products[i].id == id){
                return this.props.products[i];
            }
        }
    },
    getImagesById: function(id){
        for(var i=0; i<this.props.cardImages.length; i++){
            if(this.props.cardImages[i].id == id){
                return this.props.cardImages[i];
            }
        }
    },
    addToCart: function(e){
        var id = e.target.getAttribute('data-prodid');
        var selectValue = (e.target.form) ? e.target.form.getElementsByClassName('quantity_selection')[0].value : null;

        for(var i=0; i<this.state.cart.length; i++){
            if(this.state.cart[i].id == id){
                var updatedCart = this.state.cart;
                updatedCart[i].quantity += (selectValue) ? +selectValue : 1;

                this.setState({
                    currentPage: this.state.currentPage,
                    params: this.state.params,
                    cart: updatedCart
                });

                console.log(this.state.cart);
                return;
            }
        }
        for(var i=0; i<this.props.products.length; i++){
            if(this.props.products[i].id == id){
                var updatedCart = this.state.cart;
                var product = this.props.products[i];
                product.quantity = parseInt(selectValue);

                updatedCart.push(product);

                this.setState({
                    currentPage: this.state.currentPage,
                    params: this.state.params,
                    cart: updatedCart
                });

                console.log(this.state.cart);
            }
        }
    },
    deleteCartBlock: function(){
        var updatedCart = this.state.cart;
        if(updatedCart){
            var cartItem = document.getElementById("outer");
            cartItem.parentNode.removeChild(cartItem);
        }
        this.setState({
            currentPage: this.state.currentPage,
            params: this.state.params,
            cart: updatedCart

        });
        this.sumToCart();
        console.log(this.state.cart);
    },
    sumToCart: function(){
        var objects = this.state.cart;
        var result = 0;
        for(var i =0; i<objects.length; i++){
            result = result + objects[i].quantity * objects[i].price;
        }
        document.getElementsByClassName("total__header")[0].innerHTML = "ИТОГО: " + result;

      },
    render: function(){
        return (
            <div className='page'>
                <Header headerButtonClickHandler={this.updatePage} />
                <main className="page__main main" >
                    {this.state.currentPage == '' ? <Categories categories={this.props.categories} categoryLinkClickHandler={this.updatePage} /> : null }
                    {this.state.currentPage == '#itemslist' ? <Navigation navigation={this.props.categories} categoryLinkClickHandler={this.updatePage} /> : null }
                    {this.state.currentPage == '#itemslist' ? <ProductsList products={this.getProductsByCategory(this.state.params.cat)} addToCartHandler={this.addToCart} productLinkClickHandler={this.updatePage} /> : null }
                    {this.state.currentPage == '#itemscard' ? <BreadCrumbs product={this.getProductById(this.state.params.id)} crumbsLinkClickHandler={this.updatePage}/> : null }
                    {this.state.currentPage == '#itemscard' ? <CardImages cardImages={this.getImagesById(this.state.params.id)} /> : null }
                    {this.state.currentPage == '#itemscard' ? <CardDescription product={this.getProductById(this.state.params.id)} addToCartHandler={this.addToCart} itemcardLinkClickHandler={this.updatePage}/> : null }
                    {this.state.currentPage == '#cart' ? <Cart cart={this.state.cart} cartLinkClickHandler={this.updatePage} cartButtonDeleteBLock={this.deleteCartBlock} cartSum={this.sumToCart}/> : null }
                    {this.state.currentPage == '#cart' ? <CartTotal cart={this.props.cart} cartLinkClickHandler={this.updatePage} cartSum={this.sumToCart}/> : null }
                    {this.state.currentPage == '#addressform' ? <Addressform addresLinkClickHandler={this.updatePage} /> : null }
                    {this.state.currentPage == '#orderform' ? <Orderform orderLinkClickHandler={this.updatePage} /> : null }
                    {this.state.currentPage == '#success' ? <Success /> : null }
                    {this.state.currentPage == '#login' ? <Login loginButtonClickHandler={this.updatePage}/> : null }
                    {this.state.currentPage == '#register' ? <Register  loginButtonClickHandler={this.updatePage} /> : null }
                </main>
                <Footer />
            </div>
        );
    }
});


