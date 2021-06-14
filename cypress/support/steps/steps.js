
/// <reference types="cypress" />

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage


Given(/^Que acesse o sistema IBK$/, () => {
    loginPage.acessarSite();
});

And(/^preencha o "([^"]*)"$/, (usuario) => {
    loginPage.informarEmail(usuario);
});

And(/^preencha a "([^"]*)"$/, (senha) => {
    loginPage.informarSenha(senha);
});

When(/^aperte o botao do login$/, () => {
    loginPage.clicarBotaoPaginaLogin();
});

Then(/^o sistema carrega a tela de login$/, () => {
	loginPage.visualizarHome();
});


Then(/^o sistema verifica que a senha nao atende as especificacoes$/, () => {
    //criar o metodo de validacao de senha
    loginPage.validacaoSenha();
});

