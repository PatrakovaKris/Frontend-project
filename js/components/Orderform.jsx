var Orderform = React.createClass({
    render: function () {
        return (
            <form className="main__orderForm orderForm">
                <label className="orderForm__label">Имя держателя карты</label>
                <input className="orderForm__input orderForm__input--name" type="text" />
                <label className="orderForm__label">Номер карты</label>
                <input className="orderForm__input orderForm__input--number" type="text" />
                <label className="orderForm__label">Действительна до (месяц)</label>
                <input className="orderForm__input orderForm__input--expireMonth" type="text" />
                <label className="orderForm__label">Действительна до (год)</label>
                <input className="orderForm__input orderForm__input--expireYear" type="text" />
                <label className="orderForm__label">Код CSV</label>
                <input className="orderForm__input orderForm__input--csv" type="text" />
                <input href='#success' className="orderForm__input orderForm__submit" type="submit" value="Завершить оплату" onClick={this.props.orderLinkClickHandler} />
            </form>
        );
    }
});
