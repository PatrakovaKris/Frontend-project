var Cart = React.createClass({
    render: function () {
        var cart = this.props.categories.map(function(cart, key) {
            return (
                <div className="main__total total">
                    <h3 className="total__header">ВСЕГО: 900$</h3>
                    <div className="total__buttons">
                        <div className="total__checkout">
                            <form className="total__checkoutForm" action="Itemsgrid.html">
                                <input href="Itemsgrid.html" type="submit"  id="Checkout-btn" value="Продолжить покупки" className="total__checkoutBtn"/>
                            </form>
                        </div>
                        <div className="total__continue">
                            <form className="total__continueForm" action="Addressform.html">
                                <input href="Addressform.html" type="submit"  id="Continue-btn" value="Перейти к оформлению заказа" className="total__continueBtn"/>
                            </form>
                        </div>
                    </div>
                </div>
            );
         });
        return (
             <section className="cart">
                 {cart}
             </section>
        );
    }
});
