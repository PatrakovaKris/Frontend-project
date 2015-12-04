window.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(React.createElement(Page), document.body);
});
/**
 * Created by Kristina_Patrakova on 12/1/2015.
 */
var Helpers = {
    getFullPath: function (imgName) {
        return 'images/' + imgName;
    },
    getPageName() {
        var path = window.location.hash;
        return path.replace(/\?.*/, '');
    },
    getUrlParams() {
        var path = window.location.hash;
        path = path.replace(/.*?\?/, '');

        var params = path.split('&');
        var result = {};
        for (var i = 0; i < params.length; i++) {
            var pair = params[i].split('=');
            result[pair[0]] = pair[1];
        }

        return result;
    },
    getCategoryName(cat) {
        switch (cat) {
            case "classic":
                return "Классические";
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
        switch (cat) {
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
var Addressform = React.createClass({
    displayName: "Addressform",

    render: function () {
        return React.createElement(
            "form",
            { className: "main__addressForm addressForm" },
            React.createElement(
                "div",
                { className: "addressForm__section addressForm__section--shipping" },
                React.createElement(
                    "h3",
                    { className: "addressForm__subheader" },
                    "Адрес доставки"
                ),
                React.createElement(
                    "label",
                    { className: "addressForm__label" },
                    "Страна"
                ),
                React.createElement("input", { className: "addressForm__input", type: "text", placeholder: "" }),
                React.createElement(
                    "label",
                    { className: "addressForm__label" },
                    "Город"
                ),
                React.createElement("input", { className: "addressForm__input", type: "text", placeholder: "" }),
                React.createElement(
                    "label",
                    { className: "addressForm__label" },
                    "Адрес"
                ),
                React.createElement("input", { className: "addressForm__input", type: "text", placeholder: "" }),
                React.createElement(
                    "label",
                    { className: "addressForm__label" },
                    "Почтовый индекс"
                ),
                React.createElement("input", { className: "addressForm__input", type: "text", placeholder: "" })
            ),
            React.createElement(
                "div",
                { className: "addressForm__section addressForm__section--billing" },
                React.createElement(
                    "h3",
                    { className: "addressForm__subheader" },
                    "Адрес представления счета"
                ),
                React.createElement(
                    "label",
                    { className: "addressForm__label" },
                    "Страна"
                ),
                React.createElement("input", { className: "addressForm__input", type: "text", placeholder: "" }),
                React.createElement(
                    "label",
                    { className: "addressForm__label" },
                    "Город"
                ),
                React.createElement("input", { className: "addressForm__input", type: "text", placeholder: "" }),
                React.createElement(
                    "label",
                    { className: "addressForm__label" },
                    "Адрес"
                ),
                React.createElement("input", { className: "addressForm__input", type: "text", placeholder: "" }),
                React.createElement(
                    "label",
                    { className: "addressForm__label" },
                    "Почтовый индекс"
                ),
                React.createElement("input", { className: "addressForm__input", type: "text", placeholder: "" }),
                React.createElement(
                    "label",
                    { className: "addressForm__label addressForm__label--big" },
                    "Адрес представления счета совпадает с адресом доставки"
                ),
                React.createElement("input", { className: "addressForm__checkbox", type: "checkbox" })
            ),
            React.createElement(
                "div",
                { className: "addressForm__section addressForm__section--submit" },
                React.createElement("input", { href: "#orderform", onClick: this.props.addresLinkClickHandler, className: "addressForm__submit", type: "submit", value: "Перейти к оплате" })
            )
        );
    }
});
var BreadCrumbs = React.createClass({
    displayName: "BreadCrumbs",

    render: function () {
        var that = this;

        return React.createElement(
            "nav",
            { className: "main__navigation breadCrumbs" },
            React.createElement(
                "ul",
                { className: "breadCrumbs__list" },
                React.createElement(
                    "li",
                    { className: "breadCrumbs__listCategory" },
                    React.createElement(
                        "a",
                        { className: "breadCrumbs__listLink", href: "", onClick: this.props.crumbsLinkClickHandler },
                        "Главная"
                    )
                ),
                React.createElement(
                    "li",
                    { className: "breadCrumbs__listCategory" },
                    React.createElement(
                        "a",
                        { className: "breadCrumbs__listLink", href: Helpers.getCategoryUrl(this.props.product.category), onClick: this.props.crumbsLinkClickHandler },
                        Helpers.getCategoryName(this.props.product.category)
                    )
                ),
                React.createElement(
                    "li",
                    { className: "breadCrumbs__listCategory" },
                    React.createElement(
                        "a",
                        { className: "breadCrumbs__listLink", href: this.props.product.href, onClick: this.props.crumbsLinkClickHandler },
                        this.props.product.name
                    )
                )
            )
        );
    }
});
var CardDescription = React.createClass({
    displayName: "CardDescription",

    render: function () {
        var that = this;
        return React.createElement(
            "section",
            { className: "main__description productDescription" },
            React.createElement(
                "h2",
                { className: "descriptionBlock__header" },
                this.props.product.name
            ),
            React.createElement(
                "p",
                { className: "descriptionBlock__text" },
                this.props.product.fulldescription
            ),
            React.createElement(
                "div",
                { className: "descriptionBlock__infoPrice" },
                "Цена: ",
                this.props.product.price
            ),
            React.createElement(
                "div",
                { className: "descriptionBlock__quantity quantity" },
                React.createElement(
                    "form",
                    { className: "quantity__form", onSubmit: function (e) {
                            e.preventDefault();
                        } },
                    React.createElement(
                        "p",
                        { className: "quantity__header" },
                        "Количество"
                    ),
                    React.createElement(
                        "select",
                        { className: "quantity_selection", name: "menu", size: "1" },
                        React.createElement(
                            "option",
                            { selected: "selected", value: "1" },
                            "1"
                        ),
                        React.createElement(
                            "option",
                            { value: "2" },
                            "2"
                        ),
                        React.createElement(
                            "option",
                            { value: "3" },
                            "3"
                        ),
                        React.createElement(
                            "option",
                            { value: "4" },
                            "4"
                        )
                    ),
                    React.createElement(
                        "a",
                        { className: "quantity__incarlink" },
                        React.createElement("input", { "data-prodid": this.props.product.id, onClick: that.props.addToCartHandler, type: "submit", className: "quantity__incartButton", value: "Добавить в корзину" })
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "descriptionBlock__icons icons" },
                React.createElement(
                    "div",
                    { className: "icons__IconBlock" },
                    React.createElement(
                        "ul",
                        { className: "icons__listIcon" },
                        React.createElement(
                            "li",
                            { className: "icons__iconItem" },
                            React.createElement("img", { className: "icons__image", src: Helpers.getFullPath("twitter.png"), alt: "twitter" })
                        ),
                        React.createElement(
                            "li",
                            { className: "icons__iconItem" },
                            React.createElement("img", { className: "icons__image", src: Helpers.getFullPath("facebook.png"), alt: "facebook" })
                        ),
                        React.createElement(
                            "li",
                            { className: "icons__iconItem" },
                            React.createElement("img", { className: "icons__image", src: Helpers.getFullPath("gmail.png"), alt: "gmail" })
                        )
                    )
                )
            )
        );
    }
});
var CardImages = React.createClass({
    displayName: "CardImages",

    render: function () {
        return React.createElement(
            "section",
            { className: "main__itemcard productImages" },
            React.createElement(
                "div",
                { className: "productImages__bigImage" },
                React.createElement("img", { className: "productImages__bigImg", src: Helpers.getFullPath(this.props.cardImages.bigimage), width: "80%", height: "75%", alt: "gitar" })
            ),
            React.createElement(
                "div",
                { className: "productImages__smallImage" },
                React.createElement(
                    "ul",
                    { className: "productImages__imageList" },
                    React.createElement(
                        "li",
                        { className: "productImages__imageItem" },
                        React.createElement("img", { className: "productImages__image", src: Helpers.getFullPath(this.props.cardImages.arrowLeft), alt: "cart" })
                    ),
                    React.createElement(
                        "li",
                        { className: "productImages__imageItem" },
                        React.createElement("img", { className: "productImages__image", src: Helpers.getFullPath(this.props.cardImages.smallimg1), alt: "cart" })
                    ),
                    React.createElement(
                        "li",
                        { className: "productImages__imageItem" },
                        React.createElement("img", { className: "productImages__image", src: Helpers.getFullPath(this.props.cardImages.smallimg2), alt: "cart" })
                    ),
                    React.createElement(
                        "li",
                        { className: "productImages__imageItem" },
                        React.createElement("img", { className: "productImages__image", src: Helpers.getFullPath(this.props.cardImages.smallimg3), alt: "cart" }),
                        " "
                    ),
                    React.createElement(
                        "li",
                        { className: "productImages__imageItem" },
                        React.createElement("img", { className: "productImages__image", src: Helpers.getFullPath(this.props.cardImages.arrowRigth), alt: "cart" }),
                        " "
                    )
                )
            )
        );
    }
});
var Cart = React.createClass({
    displayName: "Cart",

    render: function () {
        var that = this;
        var cartlist = this.props.cart.map(function (cart, key) {
            var options = [];
            for (var i = 1; i <= cart.quantity + 3; i++) {
                var n = +i;
                options.push(React.createElement(
                    "option",
                    { value: i, selected: i == cart.quantity ? true : false },
                    i
                ));
            }
            return React.createElement(
                "section",
                { id: "outer", className: "main__cartList cartList", key: key },
                React.createElement(
                    "div",
                    { className: "cartList__gitarDescription gitarDescription" },
                    React.createElement(
                        "div",
                        { className: "gitarDescription__imageBlock" },
                        React.createElement("img", { className: "gitarDescription__image", src: Helpers.getFullPath(cart.src) })
                    ),
                    React.createElement(
                        "div",
                        { className: "gitarDescription__nameBlock" },
                        React.createElement(
                            "a",
                            { className: "gitarDescription__name", href: cart.href },
                            cart.name
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "cartList__gitarChoose gitarChoose" },
                    React.createElement(
                        "div",
                        { className: "gitarChoose__quantity" },
                        React.createElement(
                            "form",
                            { className: "gitarChoose__quantityForm" },
                            "Количество",
                            React.createElement(
                                "select",
                                { name: "menu", size: "1" },
                                options
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "gitarChoose__cartPrice" },
                        React.createElement(
                            "h3",
                            { className: "gitarChoose__header" },
                            cart.price
                        ),
                        React.createElement(
                            "a",
                            { className: "gitarChoose__delete", href: "#", onClick: that.props.cartButtonDeleteBLock },
                            "Удалить"
                        )
                    )
                )
            );
        });

        return React.createElement(
            "section",
            { className: "cart" },
            cartlist,
            React.createElement(
                "div",
                { className: "main__total total" },
                React.createElement(
                    "h3",
                    { className: "total__header" },
                    "Итого: 1800$"
                ),
                React.createElement(
                    "div",
                    { className: "total__buttons" },
                    React.createElement(
                        "div",
                        { className: "total__checkout" },
                        React.createElement(
                            "form",
                            { className: "total__checkoutForm" },
                            React.createElement("input", { href: "", type: "submit", id: "Checkout-btn", value: "Продолжить покупки", className: "total__checkoutBtn", onClick: that.props.cartLinkClickHandler })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "total__continue" },
                        React.createElement(
                            "form",
                            { className: "total__continueForm" },
                            React.createElement("input", { href: "#addressform", type: "submit", id: "Continue-btn", value: "Перейти к оформлению заказа", className: "total__continueBtn", onClick: this.props.cartLinkClickHandler })
                        )
                    )
                )
            )
        );
    }
});
var CartTotal = React.createClass({
    displayName: "CartTotal",

    render: function () {
        var that = this;
        return React.createElement(
            "div",
            { className: " main__cartSum cartSum" },
            React.createElement(
                "p",
                { className: "cartSum__header" },
                "Итого"
            ),
            React.createElement("hr", null),
            React.createElement(
                "h3",
                { className: "cartSum__summary" },
                "1800$"
            ),
            React.createElement(
                "div",
                { className: "cartSum__checkoutBlock" },
                React.createElement(
                    "form",
                    { "class": "cartSum__form" },
                    React.createElement("input", { href: "#addressform", className: "cartSum__cartButton", type: "submit", value: "Перейти к оформлению заказа", onClick: this.props.cartLinkClickHandler })
                )
            )
        );
    }
});
var Categories = React.createClass({
    displayName: "Categories",

    render: function () {
        var that = this;
        var categories = this.props.categories.map(function (category, key) {
            return React.createElement(
                "figure",
                { className: "categories__itemBlock", key: key },
                React.createElement(
                    "div",
                    { className: "categories__imageBlock" },
                    React.createElement("img", { src: Helpers.getFullPath(category.img), alt: "klass", className: "categories__image" })
                ),
                React.createElement(
                    "figcaption",
                    { className: "categories__titleBlock" },
                    React.createElement(
                        "a",
                        { className: "categories__title", href: category.href, onClick: that.props.categoryLinkClickHandler },
                        category.description
                    )
                )
            );
        });

        return React.createElement(
            "div",
            { className: "main__categories categories" },
            categories
        );
    }
});
/**
 * Created by Kristina_Patrakova on 11/30/2015.
 */

var Footer = React.createClass({
    displayName: "Footer",

    render: function () {
        return React.createElement(
            "footer",
            { className: "page__footer footer" },
            "© EPAM Izhevsk, Patrakova-Vitkovskii, 2015"
        );
    }
});
var Header = React.createClass({
    displayName: "Header",

    render: function () {
        return React.createElement(
            "header",
            { className: "page__header header" },
            React.createElement(
                "div",
                { className: "header__logo" },
                React.createElement(
                    "a",
                    { className: "header__logoLink", href: "" },
                    React.createElement("img", { className: "header__logoImage", src: "images/flogo.png", alt: "logo", title: "" })
                )
            ),
            React.createElement(
                "div",
                { className: "header__links" },
                React.createElement(
                    "a",
                    { href: "#cart", className: "header__link", onClick: this.props.headerButtonClickHandler },
                    ""
                ),
                React.createElement(
                    "a",
                    { href: "#login", className: "header__link", onClick: this.props.headerButtonClickHandler },
                    ""
                )
            ),
            React.createElement(
                "div",
                { className: "header__searchForm searchForm" },
                React.createElement(
                    "form",
                    { className: "searchForm__form" },
                    React.createElement("input", { className: "searchForm__input", type: "text", maxlength: "128", placeholder: "Найти..." }),
                    React.createElement("input", { className: "searchForm__button", type: "submit", value: "" })
                )
            )
        );
    }
});
var Login = React.createClass({
    displayName: "Login",

    render: function () {
        return React.createElement(
            "div",
            { className: "main__loginForm loginForm" },
            React.createElement(
                "form",
                { className: "loginForm__form" },
                React.createElement(
                    "h3",
                    { className: "loginForm__header" },
                    "Вход"
                ),
                React.createElement("input", { className: "loginForm__input", type: "email", placeholder: "Email address" }),
                React.createElement("input", { className: "loginForm__input", type: "password", placeholder: "Password" }),
                React.createElement(
                    "label",
                    { className: "loginForm__label loginForm__label--checkbox" },
                    React.createElement("input", { className: "loginForm__checkbox", type: "checkbox" }),
                    "Запомнить меня"
                ),
                React.createElement("input", { href: "", className: "loginForm__submit", type: "submit", value: "Войти", onClick: this.props.loginButtonClickHandler }),
                React.createElement(
                    "div",
                    { className: "loginForm__register" },
                    React.createElement(
                        "a",
                        { className: "loginForm__registerLink", href: "#register", onClick: this.props.loginButtonClickHandler },
                        "Регистрация"
                    )
                )
            )
        );
    }
});
var Navigation = React.createClass({
    displayName: "Navigation",

    render: function () {
        var that = this;
        var navigation = this.props.navigation.map(function (nav, key) {
            return React.createElement(
                "li",
                { className: "navigation__item", key: key },
                React.createElement(
                    "a",
                    { href: nav.href, className: "navigation__link", onClick: that.props.categoryLinkClickHandler },
                    nav.description
                )
            );
        });

        return React.createElement(
            "div",
            { className: "main__navigation navigation" },
            React.createElement(
                "div",
                { className: "main__navigation navigation" },
                React.createElement(
                    "ul",
                    { className: "navigation__list" },
                    navigation
                )
            )
        );
    }
});
var Orderform = React.createClass({
    displayName: "Orderform",

    render: function () {
        return React.createElement(
            "form",
            { className: "main__orderForm orderForm" },
            React.createElement(
                "label",
                { className: "orderForm__label" },
                "Имя держателя карты"
            ),
            React.createElement("input", { className: "orderForm__input orderForm__input--name", type: "text" }),
            React.createElement(
                "label",
                { className: "orderForm__label" },
                "Номер карты"
            ),
            React.createElement("input", { className: "orderForm__input orderForm__input--number", type: "text" }),
            React.createElement(
                "label",
                { className: "orderForm__label" },
                "Действительна до (месяц)"
            ),
            React.createElement("input", { className: "orderForm__input orderForm__input--expireMonth", type: "text" }),
            React.createElement(
                "label",
                { className: "orderForm__label" },
                "Действительна до (год)"
            ),
            React.createElement("input", { className: "orderForm__input orderForm__input--expireYear", type: "text" }),
            React.createElement(
                "label",
                { className: "orderForm__label" },
                "Код CSV"
            ),
            React.createElement("input", { className: "orderForm__input orderForm__input--csv", type: "text" }),
            React.createElement("input", { href: "#success", className: "orderForm__input orderForm__submit", type: "submit", value: "Завершить оплату", onClick: this.props.orderLinkClickHandler })
        );
    }
});
/**
 * Created by Кристина on 30.11.2015.
 */
var Page = React.createClass({
    displayName: 'Page',

    getInitialState: function () {
        return {
            currentPage: Helpers.getPageName(),
            params: Helpers.getUrlParams(),
            cart: this.state && this.state.cart ? this.state.cart : []
        };
    },
    getDefaultProps: function () {
        return {
            categories: [{ description: 'Класc. гитары', img: 'gklass.jpg', href: '#itemslist?cat=classic' }, { description: 'Акк. гитары', img: 'gakust3.jpg', href: '#itemslist?cat=acoustic' }, { description: 'Электро-акк. гитары', img: 'gelecakust.jpg', href: '#itemslist?cat=elacc' }, { description: 'Электрогитары', img: 'gelectro.jpg', href: '#itemslist?cat=electro' }, { description: 'Басс. гитары', img: 'gbass.jpg', href: '#itemslist?cat=bass' }, { description: 'Укулеле', img: 'gukulele.jpg', href: '#itemslist?cat=ukulele' }, { description: 'Банджо', img: 'gbanjo.jpg', href: '#itemslist?cat=bango' }, { description: 'Балалайки', img: 'gbalalaika.png', href: '#itemslist?cat=balalaikis' }],
            products: [{ id: 0, href: '#itemscard?id=0', category: 'classic', src: 'gklass.jpg', name: 'Martin D35', price: ' 500$',
                description: 'Именная модель легендарного Джонни Кэша, ключевой фигуры в музыке кантри и рокабилли, и одного из самых влиятельных музыкантов XX века.',
                fulldescription: 'Гитара базируется на модели D-35 и выполнена в чёрном цвете с перламутровыми звёздами в качестве маркеров грифа. Martin D35 - известная своими мощными басами модель дредноут, нижняя дека изготовлена из 3-х частей индийского палисандра, верх из ели.                    Только массивы ценных пород, профессиональная гитара для ценителей качественного живого звука с насыщенным тембром.' }, { id: 1, href: '#itemscard?id=1', category: 'classic', src: 'gklass.jpg', name: 'Martin D35', price: ' 600$',
                description: 'Именная модель легендарного Джонни Кэша, ключевой фигуры в музыке кантри и рокабилли, и одного из самых влиятельных музыкантов XX века.',
                fulldescription: 'Гитара базируется на модели D-35 и выполнена в чёрном цвете с перламутровыми звёздами в качестве маркеров грифа. Martin D35 - известная своими мощными басами модель дредноут, нижняя дека изготовлена из 3-х частей индийского палисандра, верх из ели.                    Только массивы ценных пород, профессиональная гитара для ценителей качественного живого звука с насыщенным тембром.' }, { id: 2, href: '#itemscard?id=2', category: 'acoustic', src: 'gakust.jpg', name: 'FENDER F-1020S', price: ' 600$',
                description: 'Модель FENDER F-1020S DREADNOUGHT NATURAL представляет собой одну из лучших акустических гитар, обладающих массивным и особенно твердым корпусом.',
                fulldescription: 'Модель FENDER F-1020S DREADNOUGHT NATURAL представляет собой одну из лучших акустических гитар, обладающих массивным и особенно твердым корпусом и, вероятно, один из наиболее доступных вариантов инструментов данной категории на рынке.' }, { id: 3, href: '#itemscard?id=2', category: 'acoustic', src: 'gakust.jpg', name: 'FENDER F-1020S', price: ' 600$',
                description: 'Модель FENDER F-1020S DREADNOUGHT NATURAL представляет собой одну из лучших акустических гитар, обладающих массивным и особенно твердым корпусом.',
                fulldescription: 'Модель FENDER F-1020S DREADNOUGHT NATURAL представляет собой одну из лучших акустических гитар, обладающих массивным и особенно твердым корпусом и, вероятно, один из наиболее доступных вариантов инструментов данной категории на рынке.' }, { id: 4, href: '#itemscard?id=4', category: 'elacc', src: 'gelecakust.jpg', name: 'YAMAHA APX 700II-12 BL', price: ' 600$',
                description: 'Главным отличием электроакустических гитар Yamaha является великолепное усиленное звучание в сочетании с удобством игры и настроек.',
                fulldescription: 'Главным отличием электроакустических гитар Yamaha является великолепное усиленное звучание в сочетании с удобством игры и настроек. Идеальное решение, если нужен идеальный результат! При разработке гитар серии APX основной акцент делался на игровые качества. Тонкий корпус и вырезы обеспечивают удобный доступ к верхним ладам и плавный переход между электрическим и акустическим звучанием. Специальный дизайн креплений в серии APX обеспечивает великолепный отклик и звучание с крепкой серединой и верхами. Также особенностью гитар серии APX, в дополнение к прекрасному звучанию, является то, что они отлично подходят для соло-исполнения.' }, { id: 5, href: '#itemscard?id=5', category: 'electro', src: 'gelectro.jpg', name: 'SCHECTER SYNYSTER CUSTOM-S BLK/SILV', price: ' 600$',
                description: 'Компания SCHECTER очень гордиться не только многочисленным списком артистов, но и своей коллекцией моделей 2014 Artist.',
                fulldescription: 'Компания SCHECTER очень гордиться не только многочисленным списком артистов, но и своей коллекцией моделей 2014 Artist. В этой серии представлены только качественные модели с дизайном и точностью исполнения гитар, на которых эти парни играют на сцене. Здесь те же самые гитары какие украшают сцену и студии таких артистов как The Cure, Avenged Sevenfold, Jeff Loomis и других. ' }, { id: 6, href: '#itemscard?id=6', category: 'bass', src: 'gbass.jpg', name: 'SCHECTER HELLRAISER EXTREME-4 STBLS', price: ' 600$',
                description: 'Вдохновленные Hellraiser Extreme гитарами, эти бас-гитары такие же угрожающие. ',
                fulldescription: 'Вдохновленные Hellraiser Extreme гитарами, эти бас-гитары такие же угрожающие. Характеризуясь цельным корпусом из махагона с кленовым верхом и EMG звукоснимателями, эти бас-гитары имеют ударный нижний регистр и в дополнение к кленовому верху черная/белая/черная окантовка и готический крест дают ошеломительный вид, который прекрасно сочетается с мощным тоном.' }, { id: 7, href: '#itemscard?id=7', category: 'ukulele', src: 'gukulele.jpg', name: 'HOHNER LANIKAI UCKTEQ', price: ' 600$',
                description: 'UCKTEQ – тенор электроакустическое укулеле, которое характеризуется корпусом из дерева Коа, накладкой из палисандра, литыми колками и кленовыми кантами на корпусе. ',
                fulldescription: 'UCKTEQ – тенор электроакустическое укулеле, которое характеризуется корпусом из дерева Коа, накладкой из палисандра, литыми колками и кленовыми кантами на корпусе. Укулеле имеет вырез и звукосниматель Shadow® JW2 active Nanoflex.Коа – редкое гавайское дерево, которое знаменито своими особенными волнистыми волокнами. Дерево произрастает только на острове Оаху, это великолепное дерево красной породы используется на всей Lanikai серии.' }, { id: 8, href: '#itemscard?id=8', category: 'bango', src: 'gbanjo.jpg', name: 'FENDER CONCERT TONE BANJO', price: ' 600$',
                description: 'Fender Concert Tone Banjo – это современная интерпретация классических банджо FENDER Concert Tone 60-х годов прошлого века.',
                fulldescription: 'Fender Concert Tone Banjo – это современная интерпретация классических банджо FENDER Concert Tone 60-х годов прошлого века. Серия Concert Tone ведет свою историю с 1968 года, уже тогда она стала очень популярной. Как и модели банджо от Fender конца 1960-х годов, новая модель была тщательно продумана и разработана, имеет элегантный внешний вид, красивый и богатый звук, а также отличается удобством при игре. Не важно, являетесь ли Вы начинающим музыкантом или опытным профессионалом, банджо производства Fender способны порадовать своим четким, резким, звенящим, «искрящимся» звуком.Данная модель Concert Tone Banjo представляет из себя блюграсс-банджо, имеет пять струн и длинную мензуру (69,6 см). Пятая струна – укороченная, натянута на отдельном колке, расположенном на грифе, на пятом ладу.Для производства инструмента были использованы самые высококачественные материалы и комплектующие. Корпус и гриф выполнены из древесины красного дерева с глянцевой полиуретановой отделкой. Резонатор – также из красного дерева, ламинированный. На грифе 22 лада, накладка - палисандровая. Верхний порожек сделан из искусственной кости, бридж - клен/черное дерево.Новая модель Concert Tone Banjo имеет стильный внешний вид «не стареющей классики». Элегантный облик банджо гармонично дополняет хромированная фурнитура и инкрустация ладов классическими белыми точками. Голова грифа – контрастная черная, с акриловым покрытием и золотым логотипом «Fender».' }, { id: 9, href: '#itemscard?id=9', category: 'balalaikis', src: 'gbalalaika.png', name: 'VASCO BAS-80', price: ' 600$',
                description: 'Именная модель легендарного Джонни Кэша, ключевой фигуры в музыке кантри и рокабилли, и одного из самых влиятельных музыкантов XX века.',
                fulldescription: 'Балалайка-бас VASCO BAS-80 - 3-х струнная,верхняя дека – ель массив, корпус и гриф – махагон массив,накладка на гриф – африканское черное дерево,накладной панцирь, отделка - глянцевый лак,Производство: Португалия' }],
            navigation: [{ href: '', name: 'Класcические гитары' }, { href: '', name: 'Аккустические гитары' }, { href: '', name: 'Электро-акк. гитары' }, { href: '', name: 'Электрогитары' }, { href: '', name: 'Басс. гитары' }, { href: '', name: 'Укулеле' }, { href: '', name: 'Банджо' }, { href: '', name: 'Балалайки' }],
            cardImages: [{ id: 0, bigimage: 'git.jpg', smallimg1: 'gakust3.jpg', smallimg2: 'git2.jpg', smallimg3: 'gakust5.jpg', arrowRigth: 'arrow_rigth.png', arrowLeft: 'arrow_left.png' }, { id: 1, bigimage: 'git.jpg', smallimg1: 'gakust3.jpg', smallimg2: 'git2.jpg', smallimg3: 'gakust5.jpg', arrowRigth: 'arrow_rigth.png', arrowLeft: 'arrow_left.png' }, { id: 2, bigimage: 'git.jpg', smallimg1: 'gakust3.jpg', smallimg2: 'git2.jpg', smallimg3: 'gakust5.jpg', arrowRigth: 'arrow_rigth.png', arrowLeft: 'arrow_left.png' }, { id: 3, bigimage: 'git.jpg', smallimg1: 'gakust3.jpg', smallimg2: 'git2.jpg', smallimg3: 'gakust5.jpg', arrowRigth: 'arrow_rigth.png', arrowLeft: 'arrow_left.png' }, { id: 4, bigimage: 'git.jpg', smallimg1: 'gakust3.jpg', smallimg2: 'git2.jpg', smallimg3: 'gakust5.jpg', arrowRigth: 'arrow_rigth.png', arrowLeft: 'arrow_left.png' }, { id: 5, bigimage: 'git.jpg', smallimg1: 'gakust3.jpg', smallimg2: 'git2.jpg', smallimg3: 'gakust5.jpg', arrowRigth: 'arrow_rigth.png', arrowLeft: 'arrow_left.png' }, { id: 6, bigimage: 'git.jpg', smallimg1: 'gakust3.jpg', smallimg2: 'git2.jpg', smallimg3: 'gakust5.jpg', arrowRigth: 'arrow_rigth.png', arrowLeft: 'arrow_left.png' }, { id: 7, bigimage: 'git.jpg', smallimg1: 'gakust3.jpg', smallimg2: 'git2.jpg', smallimg3: 'gakust5.jpg', arrowRigth: 'arrow_rigth.png', arrowLeft: 'arrow_left.png' }, { id: 8, bigimage: 'git.jpg', smallimg1: 'gakust3.jpg', smallimg2: 'git2.jpg', smallimg3: 'gakust5.jpg', arrowRigth: 'arrow_rigth.png', arrowLeft: 'arrow_left.png' }, { id: 9, bigimage: 'git.jpg', smallimg1: 'gakust3.jpg', smallimg2: 'git2.jpg', smallimg3: 'gakust5.jpg', arrowRigth: 'arrow_rigth.png', arrowLeft: 'arrow_left.png' }],
            cart: [{ img: 'u1.jpg', name: 'Martin Guitars D351', price: '450$' }, { img: 'u1.jpg', name: 'Martin Guitars D352', price: '450$' }, { img: 'u1.jpg', name: 'Martin Guitars D353', price: '450$' }, { img: 'u1.jpg', name: 'Martin Guitars D354', price: '450$' }]
        };
    },
    updatePage: function (e) {
        window.location.assign(e.target.getAttribute('href'));
        this.setState({
            currentPage: Helpers.getPageName(),
            params: Helpers.getUrlParams(),
            cart: this.state.cart
        });
        e.preventDefault();
    },
    getProductsByCategory: function (cat) {
        var result = [];
        this.props.products.map(function (product) {
            if (product.category == cat) {
                result.push(product);
            }
        });
        return result;
    },
    getProductById: function (id) {
        for (var i = 0; i < this.props.products.length; i++) {
            if (this.props.products[i].id == id) {
                return this.props.products[i];
            }
        }
    },
    getImagesById: function (id) {
        for (var i = 0; i < this.props.cardImages.length; i++) {
            if (this.props.cardImages[i].id == id) {
                return this.props.cardImages[i];
            }
        }
    },
    deleteCartBlock: function () {
        $('.gitarChoose__delete').on('click', function () {
            $('#outer').remove();
        });
    },
    addToCart: function (e) {
        var id = e.target.getAttribute('data-prodid');
        var selectValue = e.target.form ? e.target.form.getElementsByClassName('quantity_selection')[0].value : null;

        for (var i = 0; i < this.state.cart.length; i++) {
            if (this.state.cart[i].id == id) {
                var updatedCart = this.state.cart;
                updatedCart[i].quantity += selectValue ? +selectValue : 1;

                this.setState({
                    currentPage: this.state.currentPage,
                    params: this.state.params,
                    cart: updatedCart
                });

                console.log(this.state.cart);
                return;
            }
        }
        for (var i = 0; i < this.props.products.length; i++) {
            if (this.props.products[i].id == id) {
                var updatedCart = this.state.cart;
                var product = this.props.products[i];
                product.quantity = 1;

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
    render: function () {
        return React.createElement(
            'div',
            { className: 'page' },
            React.createElement(Header, { headerButtonClickHandler: this.updatePage }),
            React.createElement(
                'main',
                { className: 'page__main main' },
                this.state.currentPage == '' ? React.createElement(Categories, { categories: this.props.categories, categoryLinkClickHandler: this.updatePage }) : null,
                this.state.currentPage == '#itemslist' ? React.createElement(Navigation, { navigation: this.props.categories, categoryLinkClickHandler: this.updatePage }) : null,
                this.state.currentPage == '#itemslist' ? React.createElement(ProductsList, { products: this.getProductsByCategory(this.state.params.cat), addToCartHandler: this.addToCart, productLinkClickHandler: this.updatePage }) : null,
                this.state.currentPage == '#itemscard' ? React.createElement(BreadCrumbs, { product: this.getProductById(this.state.params.id), crumbsLinkClickHandler: this.updatePage }) : null,
                this.state.currentPage == '#itemscard' ? React.createElement(CardImages, { cardImages: this.getImagesById(this.state.params.id) }) : null,
                this.state.currentPage == '#itemscard' ? React.createElement(CardDescription, { product: this.getProductById(this.state.params.id), addToCartHandler: this.addToCart, itemcardLinkClickHandler: this.updatePage }) : null,
                this.state.currentPage == '#cart' ? React.createElement(Cart, { cart: this.state.cart, cartLinkClickHandler: this.updatePage, cartButtonDeleteBLock: this.deleteCartBlock }) : null,
                this.state.currentPage == '#cart' ? React.createElement(CartTotal, { cart: this.props.cart, cartLinkClickHandler: this.updatePage }) : null,
                this.state.currentPage == '#addressform' ? React.createElement(Addressform, { addresLinkClickHandler: this.updatePage }) : null,
                this.state.currentPage == '#orderform' ? React.createElement(Orderform, { orderLinkClickHandler: this.updatePage }) : null,
                this.state.currentPage == '#success' ? React.createElement(Success, null) : null,
                this.state.currentPage == '#login' ? React.createElement(Login, { loginButtonClickHandler: this.updatePage }) : null,
                this.state.currentPage == '#register' ? React.createElement(Register, { loginButtonClickHandler: this.updatePage }) : null
            ),
            React.createElement(Footer, null)
        );
    }
});
var ProductsList = React.createClass({
    displayName: "ProductsList",

    getInitialState: function () {
        return {
            view: "grid"
        };
    },
    changeView: function () {
        this.setState({
            view: this.state.view == "grid" ? "list" : "grid"
        });
    },
    render: function () {
        var that = this;
        var products = this.props.products.map(function (product, key) {
            return React.createElement(
                "li",
                { className: "products__item", key: key },
                React.createElement(
                    "a",
                    { href: product.href, onClick: that.props.productLinkClickHandler, className: "products__figure" },
                    React.createElement("img", { className: "products__img", src: Helpers.getFullPath(product.src), href: product.href, onClick: that.props.productLinkClickHandler })
                ),
                React.createElement(
                    "a",
                    { href: product.href, onClick: that.props.productLinkClickHandler, className: "products__name" },
                    product.name
                ),
                React.createElement(
                    "span",
                    { className: "products__price" },
                    product.price
                ),
                React.createElement(
                    "p",
                    { className: "products__description" },
                    product.description
                ),
                React.createElement(
                    "a",
                    { "data-prodid": product.id, onClick: that.props.addToCartHandler, className: "products__addtoCart" },
                    "Добавить в корзину"
                )
            );
        });

        return React.createElement(
            "div",
            { className: "main__products products" },
            React.createElement(
                "div",
                { className: "products__changeView" },
                React.createElement(
                    "a",
                    { className: that.state.view == "grid" ? "products__viewOption products__viewOption--current" : "products__viewOption", onClick: that.changeView },
                    "Отобразить сеткой"
                ),
                React.createElement(
                    "a",
                    { className: that.state.view == "list" ? "products__viewOption products__viewOption--current" : "products__viewOption", onClick: that.changeView },
                    "Отобразить списком"
                )
            ),
            React.createElement(
                "ul",
                { className: that.state.view == "grid" ? "products__list products__list--grid" : "products__list products__list--list" },
                products
            )
        );
    }
});
var Register = React.createClass({
    displayName: "Register",

    render: function () {
        return React.createElement(
            "div",
            { className: "main__loginForm loginForm" },
            React.createElement(
                "form",
                { className: "loginForm__form", action: "Categories.html" },
                React.createElement("input", { className: "loginForm__input", type: "email", placeholder: "Email address" }),
                React.createElement("input", { className: "loginForm__input", type: "password", placeholder: "Password" }),
                React.createElement(
                    "label",
                    { className: "loginForm__label loginForm__label--checkbox" },
                    React.createElement("input", { className: "loginForm__checkbox", type: "checkbox" }),
                    "Запомнить меня"
                ),
                React.createElement("input", { className: "loginForm__submit", type: "submit", value: "Зарегистрироваться", href: "#login", onClick: this.props.loginButtonClickHandler }),
                React.createElement(
                    "div",
                    { className: "loginForm__register" },
                    React.createElement(
                        "a",
                        { className: "loginForm__registerLink", href: "#login", onClick: this.props.loginButtonClickHandler },
                        "Войти"
                    )
                )
            )
        );
    }
});
var Success = React.createClass({
    displayName: "Success",

    render: function () {
        return React.createElement(
            "div",
            { className: "main__message message" },
            React.createElement(
                "h2",
                { className: "message__header" },
                "Оплата завершена успешно"
            ),
            React.createElement(
                "p",
                { className: "message__text" },
                "Мы благодарим вас за выбор нашего магазина."
            ),
            React.createElement(
                "p",
                { className: "message__text" },
                "Ваш заказ когда-нибудь дойдет до вас."
            )
        );
    }
});
//# sourceMappingURL=app.js.map
