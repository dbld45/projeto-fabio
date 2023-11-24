// Saudação ao carregar a página
window.onload = function () {
    setTimeout(function () {
        alert("Bem-vindo ao Ciberdevs Aulas! Esta mensagem irá desaparecer em breve.");
    }, 2000); // Esconde o alerta após 2 segundos

    // Adiciona evento de scroll para atualizar a classe 'active' no menu de navegação
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - header.offsetHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSectionId = section.id;
            }
        });

        const activeLink = document.querySelector(`nav a[href="#${currentSectionId}"]`);
        if (activeLink) {
            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
            activeLink.classList.add('active');
        }
    });
};

// Função para validar o formulário de login
document.getElementById('login-form').addEventListener('submit', function (e) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        e.preventDefault(); // Impede o envio do formulário se campos estiverem vazios
    }
});

// Função para mostrar/esconder a senha
document.getElementById('show-password').addEventListener('change', function () {
    const passwordInput = document.getElementById('password');
    passwordInput.type = this.checked ? 'text' : 'password';
});

