const userString = localStorage.getItem('user');

if (userString !== null) {
    const user = JSON.parse(userString); // Convertendo a string JSON para objeto JavaScript

    const $ul = document.getElementById('links');
    $ul.style.display = "none";

    const navs = document.querySelectorAll('nav'); // Retorna uma lista de elementos nav
    navs.forEach(nav => { // Itera sobre cada elemento nav
        nav.innerHTML = `<ul class="links">
                            <li><a href="./cadastroDeProdutos.html">Cadastrar Produto</a></li>
                            <li><a href="#">${user.nome}</a></li>
                        </ul>`;
    });
}