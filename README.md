# README #

Projeto padrão para utilização do cypress com cucumber 

### Utilização do repositório? ###

* Indicamos que baixem esse projeto e utilizem conforme a necessidade

### Configuração ###

* Baixe o projeto
* configure o npm no projeto

### Conhecendo o projeto ###

* Existem cinco pastas que são fundamentais no projeto:
    * 1º integration => Responsável por receber nossas funcionalidades descritas através do BDD;
    * 2º support => Responsável por centralizar pastas fundamentais do projeto que suportam a escrita BDD;
    * 3º elements => Recebe e armazena os elementos da tela;
    * 4º pageObjects => Responsável pela iteração com a view. A ideia do page objects é criar um arquivo.js para cada página ou fluxo do site;
    * 5º steps => Responsável por armazenar as conexões entre o que foi escrito em BDD e o Cypress.

### Allure Report ###

* Allure é um dashboard para relatórios dos testes executados, os comandos para run do serviço estão no arquivo package.json, também podendo ser integrado a qualquer ciclo CI

### Autor
---

Tiago Amaro

### Editado 
---

Danilo Barbosa
