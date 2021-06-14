class LoginElements {
    botaoLogin = () => { return '.MuiButtonBase-root' }

    botaoRecuperarSenha = () => { return '.forgot' }

    botaoRealizarLogin = () => { return '[type="submit"]' }

    inputUser = () => { return '.MuiInputBase-root > #user' }

    inputSenha = () => { return '.MuiInputBase-root > #password' }

    mensagemErroSenha = () => { return ' ' }

    verificaHome = () => { return '.sc-cBoprd' }

}

export default LoginElements;
