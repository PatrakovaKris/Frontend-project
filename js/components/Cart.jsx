var Cart = React.createClass({
    render: function () {
        var that = this;
        var cartlist = this.props.cart.map(function (cart, key) {
                var options = [];
                for(var i=1; i<=cart.quantity+3; i++){
                    var n = +i;
                    options.push(<option value={i} selected={(i==cart.quantity) ? true : false}>{i}</option>);
                }
                return (
                    <section id='outer' className="main__cartList cartList" key={key}>
                        <div className="cartList__gitarDescription gitarDescription">
                            <div className="gitarDescription__imageBlock">
                                <img className="gitarDescription__image" src={Helpers.getFullPath(cart.src)} />
                            </div>
                            <div className="gitarDescription__nameBlock">
                                <a className="gitarDescription__name" href={cart.href}>{cart.name}</a>
                            </div>
                        </div>

                        <div className="cartList__gitarChoose gitarChoose">
                            <div className="gitarChoose__quantity">
                                <form className="gitarChoose__quantityForm">Количество
                                    <select  name="menu" size="1">
                                        {options}
                                    </select>
                                </form>
                            </div>
                            <div className="gitarChoose__cartPrice">
                                <h3 className="gitarChoose__header">{cart.price}</h3>
                                <a className="gitarChoose__delete" href='#'>Удалить</a>
                            </div>
                        </div>
                    </section>
                );
            });

        return (
            <section className="cart">
                {cartlist}
                <div className="main__total total">
                    <h3 className="total__header">Итого: 1800$</h3>
                    <div className="total__buttons">
                        <div className="total__checkout">
                            <form className="total__checkoutForm">
                                <input href='' type="submit" id="Checkout-btn" value="Продолжить покупки" className="total__checkoutBtn" onClick={that.props.cartLinkClickHandler}/>
                            </form>
                        </div>
                        <div className="total__continue">
                            <form className="total__continueForm" >
                                <input href='#addressform' type="submit" id="Continue-btn" value="Перейти к оформлению заказа" className="total__continueBtn" onClick={this.props.cartLinkClickHandler}/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});
