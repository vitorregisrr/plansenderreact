import React from 'react';

const Auth = props => {
    return (
        <main class="login__wrap">
            <div class="login__content">
                <img class="logo" alt="logo"/>
                <form class="login__form">
                    <label for="inputEmail">Email</label>
                    <input id="inputEmail" placeholder="email@dominio.com.br"/>
                    <label for="inputSenha">Senha</label>
                    <input id="inputSenha" type="password" placeholder="********"/>
                    <div class="login__options">
                        <div class="login-remember">
                            <input type="radio" id="login-remember"/>
                            <p>Login automático</p>
                        </div>
                        <div class="forgot">
                            <a href="#">
                                Esqueci minha senha</a>
                        </div>
                    </div>
                    <div class="login__btns">
                        <button type="submit" class="normal">ENTRAR</button>
                        <hr/>
                        <a role="button" href="pages/home.html" class="facebook">ENTRAR COM FACEBOOK</a>
                        <a role="button" class="twitter">ENTRAR COM TWITTER</a>
                    </div>
                </form>
                <hr/>
                <div class="login-new">
                    <p>Não é registrado?
                        <a href="#">Crie uma conta aqui!</a>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Auth;