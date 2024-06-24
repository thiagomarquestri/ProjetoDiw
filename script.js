function getApiGithub() {
    fetch('https://api.github.com/users/AllanJunio') // Substituir pelo seu nome de usuário do GitHub
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status); // Lança um erro se a resposta não for ok
            }
            let data = await res.json(); // Converte a resposta para JSON
            console.log(data); // Loga os dados no console
            document.getElementById('profile-info').innerHTML =
                `<div class="row">
                    <div class="col-md-4">
                        <img src="${data.avatar_url}" class="img-fluid rounded-start" alt="" style="width: 230px; height: 250px;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title text-primary">${data.name}</h3>
                            <p class="card-text">${data.bio}</p>
                            <p class="card-text"><b>Local: </b>${data.location}</p>
                            <p class="card-text"><b>E-mail: </b>${data.email || 'N/A'}</p>
                            <p class="card-text"><b>LinkedIn: </b><a href="https://www.linkedin.com/in/allanjuniomuniz/">Allan Junio de Souza Muniz</a></p>
                            <div class="d-flex float-end">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person text-primary" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10 10 10 289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                </svg>
                                <p>${data.followers}</p> <!-- Exibe o número de seguidores -->
                            </div>
                        </div>
                    </div>
                </div>`;
        })
        .catch(error => {
            console.error('Erro ao buscar o perfil:', error); // Loga um erro se ocorrer
        });
}