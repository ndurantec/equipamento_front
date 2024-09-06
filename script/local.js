function salvar() {
    const nome_local = document.getElementById('nome_local').value;
  
    console.log(
      nome_local
    );
  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    
    fetch('localhost:8080//manutencao/inserir' ,{
    
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

function consultar() {
    const nome_local = document.getElementById('nome_local').value;
  
    console.log(
      nome_local
    );
  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    
    fetch('localhost:8080//manutencao/inserir' ,{
    
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

function alterar() {
    const nome_local = document.getElementById('nome_local').value;
  
    console.log(
      nome_local
    );
  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    
    fetch('localhost:8080//manutencao/inserir' ,{
    
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
    const nome_local = document.getElementById('nome_local').value;
  
    console.log(
      nome_local
    );
  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    
    fetch('localhost:8080//manutencao/inserir' ,{
    
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
