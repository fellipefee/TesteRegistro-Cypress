/// <reference types="cypress" />


const el = require('./elements').ELEMENTS
let Chance = require('chance');
let chance = new Chance();
import '@shelex/cypress-allure-plugin';
require('@shelex/cypress-allure-plugin');

class Cadastro {
    
    realizandoCadastro() {
        
        

        cy.get(el.usuario)
            .click()
            .type(chance.first())
            .should('be.visible')

        cy.get(el.email)
            .click()
            .type(chance.email());

        cy.get(el.senha)
            .click()
            .type('Felipe123456')

        cy.get(el.confirmandoSenha)
            .click()
            .type('Felipe123456')

        cy.get(el.nome)
            .click()
            .type('Felipe')

        cy.get(el.sobrenome)
            .click()
            .type('Ferreira Rubim')

        cy.get(el.telefone)
            .click()
            .type(chance.phone({ formatted: false }))

        cy.get(el.pais)
            .select('Brazil')
            .should('contain', 'Brazil')
            
        cy.get(el.cidade)
            .click()
            .type('Sorocaba')

        cy.get(el.endereco)
            .click()
            .type(chance.address())

        cy.get(el.estado)
            .click()
            .type('São Paulo')

        cy.get(el.cep)
            .click()
            .type(chance.postal())

        cy.get(el.condicoes)
            .click()
            .should('be.checked')

        cy.get(el.botaoRegistro)
            .should('be.visible')
            .contains('REGISTER')
            .click()
    }
}

export default new Cadastro()