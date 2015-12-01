window.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(React.createElement(Page), document.getElementById('page'));
});
/**
 * Created by Kristina_Patrakova on 12/1/2015.
 */
var Helpers = {
  getFullPath: function (imgName) {}
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
                    React.createElement("img", { src: category.img, alt: "klass", className: "categories__image" })
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
/**
 * Created by Кристина on 30.11.2015.
 */
var Page = React.createClass({
    displayName: 'Page',

    getDefaultProps: function () {
        return {
            categories: [{ description: 'Класc. гитары', img: 'gklass.jpg', href: 'Itemsgrid.html' }, { description: 'Акк. гитары', img: 'gakust3.jpg', href: 'Itemsgrid.html' }, { description: 'Электро-акк. гитары', img: 'gelecakust.jpg', href: 'Itemsgrid.html' }, { description: 'Электрогитары', img: 'gelectro.jpg', href: 'Itemsgrid.html' }, { description: 'Басс. гитары', img: 'gbass.jpg', href: 'Itemsgrid.html' }, { description: 'Укулеле', img: 'gukulele.jpg', href: 'Itemsgrid.html' }, { description: 'Банджо', img: 'gbanjo.jpg', href: 'Itemsgrid.html' }, { description: 'Балалайки', img: 'gbalalaika.png', href: 'Itemsgrid.html' }]
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
                React.createElement(Categories, { categories: this.props.categories }),
                Helpers.getFullPath()
            ),
            React.createElement(Footer, null)
        );
    }
});
//# sourceMappingURL=app.js.map
