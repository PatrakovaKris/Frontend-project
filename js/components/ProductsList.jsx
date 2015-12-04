var ProductsList = React.createClass({
    getInitialState: function(){
        return {
            view: "grid"
        };
    },
    changeView: function(){
        this.setState({
            view: (this.state.view == "grid") ? "list" : "grid"
        });
    },
    render: function () {
        var that = this;
        var products = this.props.products.map(function(product, key) {
            return (
                <li className="products__item" key={key}>
                    <a href={product.href} onClick={that.props.productLinkClickHandler} className="products__figure">
                        <img className="products__img"  src={Helpers.getFullPath(product.src)} href={product.href} onClick={that.props.productLinkClickHandler}/></a>
                    <a href={product.href} onClick={that.props.productLinkClickHandler} className="products__name">{product.name}</a>
                    <span className="products__price">{product.price}</span>
                    <p className="products__description">{product.description}</p>
                    <a data-prodid={product.id} onClick={that.props.addToCartHandler} className="products__addtoCart">Добавить в корзину</a>
                </li>
            );
        });

        return (
            <div className="main__products products">
                <div className="products__changeView">
                    <a className={(that.state.view == "grid") ? "products__viewOption products__viewOption--current" : "products__viewOption"} onClick={that.changeView}>Отобразить сеткой</a>
                    <a className={(that.state.view == "list") ? "products__viewOption products__viewOption--current" : "products__viewOption"} onClick={that.changeView}>Отобразить списком</a>
                </div>
                <ul className={(that.state.view == "grid") ? "products__list products__list--grid" : "products__list products__list--list"}>
                    {products}
                </ul>
            </div>
        );
    }
});
