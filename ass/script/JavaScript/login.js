const url = "http://localhost:3000/Clientes";


const getLogin = () =>
{
    
    const email = document.getElementById('inputUser').value;
    const senha = document.getElementById('inputSenha').value;

    if(!email || !senha){
        alert('Complete as informaçoes para fazer o Login');
    }
    else{
        logar(email, senha).then(user =>{
            if(user){
                alert('Logim Bem-sucessido');
                console.log('Login bem-sucessido', user);

                const newUser = {
                    nome: user.nome,
                    email: user.email,
                    celular: user.celular,
                    rua: user.rua,
                    numero: user.numero,
                    loja: user.nomeLoja,
                    senha: user.senha
                }
                localStorage.setItem('user', JSON.stringify(newUser));
                window.location.href = './index.html';
            }
            else{
                alert('Login ou senha estao incorretos');
            }
        })
    }
}

const logar = (email,senha) =>
{
    return fetch(url)
                .then(response => response.json())
                .then(data => {

                    const user = data.find(user => user.email === email && user.senha === senha);

                    return user;
                })
}