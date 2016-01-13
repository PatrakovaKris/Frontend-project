var CartTotal = React.createClass({
    render: function () {
        var that = this;
        return (
            <div className=" main__cartSum cartSum">
                <p className="cartSum__header">Итого</p><hr/>
                <h3 className="cartSum__summary"> </h3>
                <div className="cartSum__checkoutBlock">
                    <form  className="cartSum__form">
                        <input href="#addressform" className="cartSum__cartButton" type="submit" value="Перейти к оформлению заказа" onClick={this.props.cartLinkClickHandler}/>
                    </form>
                </div>
            </div>
        );
    }
});
