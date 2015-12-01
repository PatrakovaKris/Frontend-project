var Header = React.createClass({
    render:function(){
        return(
            <header className="page__header header">
                <div className="header__logo">
                    <a className="header__logoLink" href="Categories.html">
                        <img className="header__logoImage" src="images/flogo.png" alt="logo" title="" />
                    </a>
                </div>
                <div className="header__links">
                    <a href="Cart.html" className="header__link">&#xf07a;</a>
                    <a href="Login.html" className="header__link">&#xf007;</a>
                </div>
                <div className="header__searchForm searchForm">
                    <form className="searchForm__form">
                        <input className="searchForm__input" type="text"  maxlength="128" placeholder="Найти..."/>
                        <input className="searchForm__button" type="submit"  value="&#xf002;"/>
                    </form>
                </div>
            </header>
        );
    }
});
