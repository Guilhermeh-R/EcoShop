const url = "http://localhost:3000/Clientes";

const getcadastro = () => {
    cadastrar().then(data => {
        if (data !== null) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            fetch(url, options)
                .then(response => response.json())
                .then(arrayUsuarios => {
                    console.log(arrayUsuarios);
                })
                .catch(error => {
                    console.error('Erro ao fazer a solicitação POST:', error);
                    // Trate o erro conforme necessário
                });
                window.location.href = './Login.html';
        }
    });
}

const cadastrar = () => {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const nomeLoja = document.getElementById('nomeLoja').value;
    const senha = document.getElementById('senha').value;

    if (!nome || !email || !celular || !rua || !numero || !nomeLoja || !senha) 
    {
        alert('Complete seu cadastro');
        return Promise.resolve(null); // Retorna uma Promise resolvida com null para indicar que o cadastro não pode ser realizado
    }
    else if(senha.length < 8)
    {
        alert('A senha deverá conter no mínimo 8 caracteres');
        return Promise.resolve(null);
    }
    else
    {
        return fetch(url)
        .then(response => response.json())
        .then(data => {
            // Verifica se o email já existe na lista de usuários
            const emailExistente = data.some(content => content.email === email);
            if (emailExistente) {
                alert('Este email já está sendo usado por outra conta');
                return Promise.resolve(null); // Retorna null para indicar que o cadastro não pode ser realizado
            } else {
                const novoCadastro = {
                    nome: nome,
                    email: email,
                    celular: celular,
                    rua: rua, 
                    numero: numero,
                    loja: nomeLoja,
                    senha: senha
                };
                console.log(novoCadastro);
                return novoCadastro;
            }
        })
        .catch(error => {
            console.error('Erro ao verificar se o email já existe:', error);
            // Trate o erro conforme necessário
            return Promise.resolve(null);
        });
    }
}
