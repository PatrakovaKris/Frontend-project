var Navigation = React.createClass({
    render: function () {
        var that = this;
        var navigation = this.props.navigation.map(function(nav, key) {
            return (
                <li className="navigation__item" key={key}>
                    <a href={nav.href} className="navigation__link" onClick={that.props.categoryLinkClickHandler}>
                        {nav.description}
                    </a>
                </li>
            );
        });

        return (
            <div className="main__navigation navigation">
                <div className="main__navigation navigation">
                        <ul className="navigation__list">
                            {navigation}
                        </ul>
                    </div>
            </div>
        );
    }
});