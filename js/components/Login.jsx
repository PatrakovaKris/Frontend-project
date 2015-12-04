var Login = React.createClass({
    render:function(){
        return(
            <div className="main__loginForm loginForm">
                <form className="loginForm__form">
                    <h3 className="loginForm__header">Вход</h3>
                    <input className="loginForm__input" type="email" placeholder="Email address"/>
                    <input className="loginForm__input" type="password" placeholder="Password"/>
                    <label className="loginForm__label loginForm__label--checkbox">
                        <input className="loginForm__checkbox" type="checkbox"/>
                        Запомнить меня
                    </label>
                    <input  href='' className="loginForm__submit" type="submit" value="Войти" onClick={this.props.loginButtonClickHandler}/>
                    <div className="loginForm__register">
                        <a className="loginForm__registerLink" href="#register" onClick={this.props.loginButtonClickHandler}>Регистрация</a>
                    </div>
                </form>
            </div>
        );
    }
});
