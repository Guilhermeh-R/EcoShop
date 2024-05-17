const url = "http://localhost:3000/Produtos";

const getProduto = () => {
    produto()
    .then(data => {
        if (data === null) return; // Se data for nulo, sai da função

        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, headers)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP! status: ${response.status}`);
            }
            return response.json();
        })
        .then(arrayProduct => {
            console.log(arrayProduct);
            window.location.href = './index.html'; // Redireciona para index.html
        })
        .catch(error => {
            console.error('Erro ao fazer a solicitação POST:', error);
        });
    });
};

const produto = () => {
    const nome = document.getElementById('nome').value;
    const tipo = document.getElementById('tipo').value;
    const imagem = document.getElementById('img').value;
    const descricao = document.getElementById('descricao').value;
    const valor = document.getElementById('valor').value;

    if (nome === "") {
        alert('Por favor complete o campo nome');
        return Promise.resolve(null);
    }
    if (tipo === "") {
        alert('Por favor complete o campo tipo');
        return Promise.resolve(null);
    }
    if (imagem === "") {
        alert('Por favor complete o campo imagem');
        return Promise.resolve(null);
    }
    if (descricao === "") {
        alert('Por favor complete o campo descrição');
        return Promise.resolve(null);
    }
    if (valor === "") {
        alert('Por favor complete o campo valor');
        return Promise.resolve(null);
    }

    const newProduct = {
        nome: nome,
        categoria: tipo,
        imagem: imagem,
        descricao: descricao,
        valor: valor
    };

    return Promise.resolve(newProduct);
};

