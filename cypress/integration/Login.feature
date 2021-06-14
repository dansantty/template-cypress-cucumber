Feature: Logar no PEFISA
    Logar no sistema PEFISA

Scenario: Efetuar o login no sistema
    Given Que acesse o sistema IBK 
    And preencha o "usuario"
    And preencha a "Senha@123"
    When aperte o botao do login
    Then o sistema carrega a tela de login


        