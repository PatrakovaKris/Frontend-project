var Navigation = React.createClass({
    render: function () {
        var navigation = this.props.navigation.map(function(nav, key) {
            return (
                <div>
                    <div className="main__navigation navigation">
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <a href={nav.href} className="navigation__link">
                                    {nav.name}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        });

        return (
            <div className="main__navigation navigation">
                {navigation}
            </div>
        );
    }
});