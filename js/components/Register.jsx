var Register = React.createClass({
    render:function(){
        return(
            <div className="main__loginForm loginForm">
                <form className="loginForm__form" action="Categories.html">
                    <input className="loginForm__input" type="email" placeholder="Email address"/>
                    <input className="loginForm__input" type="password" placeholder="Password"/>
                        <label className="loginForm__label loginForm__label--checkbox">
                            <input className="loginForm__checkbox" type="checkbox"/>
                                Запомнить меня
                        </label>
                    <input className="loginForm__submit" type="submit" value="Зарегистрироваться" href="#login" onClick={this.props.loginButtonClickHandler}/>
                    <div className="loginForm__register">
                        <a className="loginForm__registerLink" href="#login" onClick={this.props.loginButtonClickHandler}>Войти</a>
                    </div>
                </form>
            </div>
        );
    }
});
