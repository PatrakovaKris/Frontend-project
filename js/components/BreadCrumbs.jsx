var BreadCrumbs = React.createClass({
    render: function () {
        var that =this;

        return (
            <nav className="main__navigation breadCrumbs">
                <ul className="breadCrumbs__list">
                    <li className="breadCrumbs__listCategory">
                        <a className="breadCrumbs__listLink" href="" onClick={this.props.crumbsLinkClickHandler}>Главная</a></li>
                    <li className="breadCrumbs__listCategory">
                        <a className="breadCrumbs__listLink" href={Helpers.getCategoryUrl(this.props.product.category)} onClick={this.props.crumbsLinkClickHandler}>{Helpers.getCategoryName(this.props.product.category)}</a></li>
                    <li className="breadCrumbs__listCategory">
                        <a className="breadCrumbs__listLink" href={this.props.product.href} onClick={this.props.crumbsLinkClickHandler}>{this.props.product.name}</a></li>
                </ul>
            </nav>
        );
    }
});