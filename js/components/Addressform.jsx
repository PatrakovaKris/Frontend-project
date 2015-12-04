var Addressform = React.createClass({
    render: function () {
            return (
                <form className="main__addressForm addressForm">
                    <div className="addressForm__section addressForm__section--shipping">
                        <h3 className="addressForm__subheader">Адрес доставки</h3>
                        <label className="addressForm__label">Страна</label>
                        <input className="addressForm__input" type="text" placeholder=""/>
                        <label className="addressForm__label">Город</label>
                        <input className="addressForm__input" type="text" placeholder=""/>
                        <label className="addressForm__label">Адрес</label>
                        <input className="addressForm__input" type="text" placeholder=""/>
                        <label className="addressForm__label">Почтовый индекс</label>
                        <input className="addressForm__input" type="text" placeholder=""/>
                    </div>
                    <div className="addressForm__section addressForm__section--billing">
                        <h3 className="addressForm__subheader">Адрес представления счета</h3>
                        <label className="addressForm__label">Страна</label>
                        <input className="addressForm__input" type="text" placeholder=""/>
                        <label className="addressForm__label">Город</label>
                        <input className="addressForm__input" type="text" placeholder=""/>
                        <label className="addressForm__label">Адрес</label>
                        <input className="addressForm__input" type="text" placeholder=""/>
                        <label className="addressForm__label">Почтовый индекс</label>
                        <input className="addressForm__input" type="text" placeholder=""/>
                        <label className="addressForm__label addressForm__label--big">Адрес представления счета совпадает с
                            адресом доставки</label>
                        <input className="addressForm__checkbox" type="checkbox"/>
                    </div>
                    <div  className="addressForm__section addressForm__section--submit">
                        <input href="#orderform" onClick={this.props.addresLinkClickHandler} className="addressForm__submit" type="submit" value="Перейти к оплате"/>
                    </div>
                </form>
            );
        }
    });
