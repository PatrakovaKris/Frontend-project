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
    }
};
var Categories = React.createClass({
    displayName: "Categories",

    render: function () {
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
                        { className: "categories__title", href: category.href },
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
                    { className: "header__logoLink", href: "Categories.html" },
                    React.createElement("img", { className: "header__logoImage", src: "images/flogo.png", alt: "logo", title: "" })
                )
            ),
            React.createElement(
                "div",
                { className: "header__links" },
                React.createElement(
                    "a",
                    { href: "Cart.html", className: "header__link" },
                    ""
                ),
                React.createElement(
                    "a",
                    { href: "Login.html", className: "header__link" },
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
var Navigation = React.createClass({
    displayName: "Navigation",

    render: function () {
        var navigation = this.props.navigation.map(function (nav, key) {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "main__navigation navigation" },
                    React.createElement(
                        "ul",
                        { className: "navigation__list" },
                        React.createElement(
                            "li",
                            { className: "navigation__item" },
                            React.createElement(
                                "a",
                                { href: nav.href, className: "navigation__link" },
                                nav.name
                            )
                        )
                    )
                )
            );
        });

        return React.createElement(
            "div",
            { className: "main__navigation navigation" },
            navigation
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
            currentPage: Helpers.getPageName()
        };
    },
    getDefaultProps: function () {
        return {
            categories: [{ description: 'Класc. гитары', img: 'gklass.jpg', href: '#itemslist' }, { description: 'Акк. гитары', img: 'gakust3.jpg', href: '#itemslist' }, { description: 'Электро-акк. гитары', img: 'gelecakust.jpg', href: '' }, { description: 'Электрогитары', img: 'gelectro.jpg', href: '' }, { description: 'Басс. гитары', img: 'gbass.jpg', href: '' }, { description: 'Укулеле', img: 'gukulele.jpg', href: '' }, { description: 'Банджо', img: 'gbanjo.jpg', href: '' }, { description: 'Балалайки', img: 'gbalalaika.png', href: '' }],
            products: [{ href: 'Itemcard.html', src: '1.jpg', name: 'Fender AC-560', price: ' 600',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart: 'Добавить в корзину' }, { href: 'Itemcard.html', src: '1.jpg', name: 'Fender AC-560', price: ' 600',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart: 'Добавить в корзину' }, { href: 'Itemcard.html', src: '1.jpg', name: 'Fender AC-560', price: ' 600',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart: 'Добавить в корзину' }, { href: 'Itemcard.html', src: '1.jpg', name: 'Fender AC-560', price: ' 600',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart: 'Добавить в корзину' }, { href: 'Itemcard.html', src: '1.jpg', name: 'Fender AC-560', price: ' 600',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart: 'Добавить в корзину' }, { href: 'Itemcard.html', src: '1.jpg', name: 'Fender AC-560', price: ' 600',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart: 'Добавить в корзину' }, { href: 'Itemcard.html', src: '1.jpg', name: 'Fender AC-560', price: ' 600',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitisi ut aliquip ex ea commodo consequat.', cart: 'Добавить в корзину' }],
            navigation: [{ href: '', name: 'Класcические гитары' }, { href: '', name: 'Класcические гитары' }, { href: '', name: 'Класcические гитары' }, { href: '', name: 'Класcические гитары' }, { href: '', name: 'Класcические гитары' }, { href: '', name: 'Класcические гитары' }]
        };
    },
    render: function () {
        return React.createElement(
            'div',
            { className: 'page' },
            React.createElement(Header, null),
            React.createElement(
                'main',
                { className: 'page__main main' },
                this.state.currentPage == '' ? React.createElement(Categories, { categories: this.props.categories }) : null,
                this.state.currentPage == '#itemslist' ? React.createElement(Navigation, { navigation: this.props.navigation }) : null,
                this.state.currentPage == '#itemslist' ? React.createElement(Products, { products: this.props.products }) : null
            ),
            React.createElement(Footer, null)
        );
    }
});
var Products = React.createClass({
    displayName: "Products",

    render: function () {
        var products = this.props.products.map(function (product, key) {
            return React.createElement(
                "li",
                { className: "products__item", key: key },
                React.createElement(
                    "a",
                    { href: product.href, className: "products__figure" },
                    React.createElement("img", { className: "products__img", src: Helpers.getFullPath(product.src) })
                ),
                React.createElement(
                    "a",
                    { href: product.href, className: "products__name" },
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
                    { href: "Itemcard.html", className: "products__addtoCart" },
                    product.cart
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
                    { href: "Itemsgrid.html", className: "products__viewOption products__viewOption--current" },
                    "Отобразить сеткой"
                ),
                React.createElement(
                    "a",
                    { href: "Itemslist.html", className: "products__viewOption" },
                    "Отобразить списком"
                )
            ),
            React.createElement(
                "ul",
                { className: "products__list products__list--grid" },
                products
            )
        );
    }
});
//# sourceMappingURL=app.js.map
