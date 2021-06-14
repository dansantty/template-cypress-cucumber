/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }

    visualizarHome() {
        cy.get(loginElements.verificaHome).should('contain', 'tes')
    }
  
    clicarBotaoRealizarLogin() {
        cy.get(loginElements.botaoRealizarLogin()).click()
    }

    informarEmail(email) {
        cy.get(loginElements.inputUser()).type(email)
    }

  
    informarSenha(senha) {
        cy.get(loginElements.inputSenha()).type(senha)
    }

  
    visualizarBotaoRecuperarSenha() {
        cy.get(loginElements.botaoRecuperarSenha()).should('contain', 'Esqueceu sua senha?')
    } 
}

export default LoginPage;
