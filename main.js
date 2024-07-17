document.addEventListener('DOMContentLoaded', function(){
    const avatarElement = document.querySelector('#avatar');
    const nameElement = document.querySelector('#name');
    const nameUsuarioElement = document.querySelector('#username');
    const repositorioElement = document.querySelector('#repositorio');
    const seguidoresElement = document.querySelector('#seguidores');
    const seguindoElement = document.querySelector('#seguindo');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/Wanderson-Santoss')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerHTML = json.name;
            nameUsuarioElement.innerHTML = json.login;
            avatarElement.src = json.avatar_url;
            seguidoresElement.innerHTML = json.followers;
            seguindoElement.innerHTML = json.following;
            repositorioElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
        .catch(function(error) {
            console.error('Erro ao carregar dados do GitHub:', error);
        });
});
