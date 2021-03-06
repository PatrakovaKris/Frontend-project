var Header = React.createClass({
    render:function(){
        return(
            <header className="page__header header">
                <div className="header__logo">
                    <a className="header__logoLink" href="">
                        <img className="header__logoImage" src="images/flogo.png" alt="logo" title="" />
                    </a>
                </div>
                <div className="header__links">
                    <a href="#cart" className="header__link"  onClick={this.props.headerButtonClickHandler}>&#xf07a;</a>
                    <a href="#login" className="header__link" onClick={this.props.headerButtonClickHandler}>&#xf007;</a>
                </div>
                <div className="header__searchForm searchForm">
                    <form className="searchForm__form">
                        <input className="searchForm__input" type="text"  maxLength="128" placeholder="Найти..."/>
                        <input className="searchForm__button" type="submit"  value="&#xf002;"/>
                    </form>
                </div>
            </header>
        );
    }
});
