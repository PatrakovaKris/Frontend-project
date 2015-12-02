var ProductsList = React.createClass({
    changeView: function(){
        //className="products__list products__list--grid" функция будет менять класс
    },
    render: function () {
        var products = this.props.products.map(function(product, key) {
            return (
                <li className="products__item" key={key}>
                    <a href={product.href} className="products__figure"><img className="products__img" src={Helpers.getFullPath(product.src)}/></a>
                    <a href={product.href} className="products__name">{product.name}</a>
                    <span className="products__price">{product.price}</span>
                    <p className="products__description">{product.description}</p>
                    <a href="Itemcard.html" className="products__addtoCart">{product.cart}</a>
                </li>
            );
        });

        return (
            <div className="main__products products">
                <div className="products__changeView">
                    <a href="Itemsgrid.html" className="products__viewOption products__viewOption--current">Отобразить сеткой</a>
                    <a href="Itemslist.html" className="products__viewOption">Отобразить списком</a>
                </div>
                <ul className="products__list products__list--grid">
                    {products}
                </ul>
            </div>
        );
    }
});
