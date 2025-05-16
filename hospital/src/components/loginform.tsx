type CadastroProps = {
    setShowCadastro: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginForm ({setShowCadastro}: CadastroProps) {
    return (
        <div id="login">
            <form method="post" action="">
                <h1>Login</h1>
                <p>
                <label htmlFor="nome_login">Nome</label>
                <input id="nome_login" name="nome_login" required type="text" />
                </p>

                <p>
                <label htmlFor="numero_cpf">CPF</label>
                <input id="numero_cpf" name="numero_cpf" required type="password" />
                </p>

                <p>
                <label htmlFor="email_login">E-mail</label>
                <input id="email_login" name="email_login" required type="password" />
                </p>

                <p>
                <label htmlFor="data_nascimento">Data de Nascimento</label>
                <input id="data_nascimento" name="data_nascimento" required type="date" />
                </p>

                <p>
                <input type="checkbox" name="manterlogado" id="manterlogado" />
                <label htmlFor="manterlogado">Continuar Conectado</label>
                </p>

                <p>
                <input type="submit" value="Logar" />
                </p>
            </form>
            <p>
                Ainda não tem conta?{' '}
                <a href="#" onClick={() => setShowCadastro(true)}>
                Cadastre-se
                </a>
            </p>
            <button onClick={() => window.location.href = '/'}>
                Voltar para a página inicial
            </button>
        </div>
    )
}