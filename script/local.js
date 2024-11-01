function salvar() {
    const local = document.getElementById('nome_local').value;
  
    console.log(
      local
    );
  
    if (local.trim() === '') {
      alert('O campo Nome do Local não pode estar vazio.');
      document.getElementById('nome_local').value = '';
      document.getElementById('nome_local').focus();
      return false;
    }
  

    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
    
    fetch('http://127.0.0.1:8080/local/cadastrar' ,{

      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ nome: local}),
  
      headers: headers
  
      //Aqui inicia função then
    }).then(response => {
      if(response.ok) {
        return response.json(); //transforma a resposta em JSON
      } else {
        //Esta linha imprime a mensagem no console
        console.log('Aconteceu algo que não foi possivel salvar');
        //Esta linha imprime a mensagem de erro
        throw new Error('Erro ao tentar salvar');
      }
  
    })
    .then(data => {
      //aqui você pode acessar o 'id' retornado do back end
      const id_local = data.id;
      console.log('ID do registro salvo:', id_local);
  
      //se quiser armazenar o ID no localStorage
      localStorage.setItem('id_local', id_local);
  
        console.log('Foi no servidor e voltou');
  
        //Esta linha carrega a página sucesso
        window.location.href = 'sucesso.html'    
  
    })
    //Aqui será executado caso a then não seja chamado
    .catch(error => console.error('Erro!:', error));

  }


function consultar() {
    const nome_local = document.getElementById('nome_local').value;
  
    console.log(
      nome_local
    );
  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    
    fetch('http://127.0.0.1:8080/local/findByNome' ,{
    
      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
  
      
       
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ 
        nome: nome_local
      }),
  
      headers: headers
    
      //Aqui inicia função then
  }).then(response => {

    if (response.ok) {
      return response.text(); // Usamos text() para lidar com retorno direto (não é JSON)
    } else {
      console.error('Erro na resposta da API');
      throw new Error('Erro ao tentar buscar o local');
    }
  })
  .then(id_local => {
    console.log("ID do local recebida:", id_local); // Aqui o id é diretamente o retorno

    if (id_local) {
      localStorage.setItem('id_local', id_local);
      alert("item achado com sucesso! agora é possivel alterar ou deletar o local selecionado ");
    } else {
      alert("Local encontrado com sucesso! agora é possivel alterar ou deletar o local selecionado ");
      console.error("ID não encontrado na resposta");
    }
  })
  .catch(error => {
    console.error("Erro capturado no catch:", error);
  });
  
}

function alterar() {
    const nome_local = document.getElementById('nome_local').value;
  
    //pegando o ID no localStorage
    const ID = localStorage.getItem('id_local');

    console.log(
      ID,
      'http://127.0.0.1:8080/local/' + ID
    );
  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    
    fetch(`http://127.0.0.1:8080/local/${ID}` ,{
     
    
      method: "PUT",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
  
      
       
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ 
        nome: nome_local
      }),
  
      headers: headers
    
      //Aqui inicia função then
    }).then(response => {
    
      if(response.ok) {
    
        //Esta linha imprime a mensagem no concole
        console.log('Foi no servidor e voltou');
    
        //Esta linha carrega a página sucesso
        window.location.href = 'sucesso.html'    
      } else {
        //Esta linha imprime a mensagem no console
        console.log('Aconteceu algo que não foi possivel salvar');
    
        //Esta linha imprime a mensagem de erro
        throw new Error('Erro ao tentar salvar');
      }
    
    })
    //Aqui será executado caso a then não seja chamado
    .catch(error => console.error('Erro!:', error));
  
}

function apagar() {
    
    //pegando o ID no localStorage
    const ID = localStorage.getItem('id_local');


    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    
    fetch(`http://127.0.0.1:8080/local/${ID}` ,{
    
      method: "DELETE",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
  
           
    
      headers: headers
    
      //Aqui inicia função then
    }).then(response => {
    
      if(response.ok) {
    
         //se quiser armazenar o ID no localStorage
        localStorage.setItem('id_local', '');
      
      
        //Esta linha imprime a mensagem no concole
        console.log('Foi no servidor e voltou');
    
        //Esta linha carrega a página sucesso
        window.location.href = 'sucesso.html'    
      } else {
        //Esta linha imprime a mensagem no console
        console.log('Aconteceu algo que não foi possivel salvar');
    
        //Esta linha imprime a mensagem de erro
        throw new Error('Erro ao tentar salvar');
      }
    
    })
    //Aqui será executado caso a then não seja chamado
    .catch(error => console.error('Erro!:', error));
  
}
