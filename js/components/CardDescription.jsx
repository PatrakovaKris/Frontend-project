var CardDescription = React.createClass({
    render: function () {
        var that = this;
        return (
            <section className="main__description productDescription">
                <h2 className="descriptionBlock__header">{this.props.product.name}</h2>
                <p className="descriptionBlock__text">{this.props.product.fulldescription}</p>
                <div className="descriptionBlock__infoPrice">Цена: {this.props.product.price}</div>
                <div className="descriptionBlock__quantity quantity">
                    <form className="quantity__form" onSubmit={function(e){e.preventDefault();}}>
                        <p className="quantity__header">Количество</p>
                        <select className="quantity_selection" name="menu" size="1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <a className="quantity__incarlink">
                            <input data-prodid={this.props.product.id} onClick={that.props.addToCartHandler} type="submit" className="quantity__incartButton" value="Добавить в корзину"/>
                        </a>
                    </form>
                </div>
                <div className="descriptionBlock__icons icons">
                    <div className="icons__IconBlock">
                        <ul className="icons__listIcon">
                            <li className="icons__iconItem">
                                <img className="icons__image" src={Helpers.getFullPath("twitter.png")} alt="twitter"/>
                            </li>
                            <li className="icons__iconItem">
                                <img className="icons__image" src={Helpers.getFullPath("facebook.png")} alt="facebook"/>
                            </li>
                            <li className="icons__iconItem">
                                <img className="icons__image" src={Helpers.getFullPath("gmail.png")} alt="gmail"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
});


