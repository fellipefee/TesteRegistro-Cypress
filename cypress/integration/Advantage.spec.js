/// <reference types="cypress" />

import Cadastro from '../support/pages/cadastro';
import Home from '../support/pages/home';
import validando from '../support/pages/validacao';

describe('Advantage Shopping',() => {

    it('Cadastro Cliente', () => {
        Home.acessarHome();
        Home.acessandoCampoUsuario();
        Cadastro.realizandoCadastro();
        validando.validandoRegistro();
    });
});

