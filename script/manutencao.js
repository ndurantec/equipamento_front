function salvar() {
  const nome_respon = document.getElementById('nome_respon').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const data = document.getElementById('data').value;
  const custo = document.getElementById('custo').value;
  const equipamento = document.getElementById('equipamento').value;
  const local = document.getElementById('local_manutencao').value;     

  console.log(
    nome_respon,
    email,
    telefone,
    data,
    custo,
    equipamento,
    local,
  );

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  
  fetch('http://127.0.0.1:8080/manutencao/cadastrar' ,{
  
    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    
     
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ 
      nome: nome_respon,
      email: email,
      telefone: telefone,
      data: data,
      custo: custo,
      equipamento: equipamento,
      local: local,
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
  const nome_respon = document.getElementById('nome_respon').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const data = document.getElementById('data').value;
  const custo = document.getElementById('custo').value;   

  console.log(
    nome_respon,
    email,
    telefone,
    data,
    custo,
  );

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  
  fetch('localhost:8080//inserir' ,{
  
    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    
     
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ 
      nome: nome_respon,
      email: email,
      telefone: telefone,
      data: data,
      custo: custo,
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
  const nome_respon = document.getElementById('nome_respon').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const data = document.getElementById('data').value;
  const custo = document.getElementById('custo').value;   

  console.log(
    nome_respon,
    email,
    telefone,
    data,
    custo,
  );

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  
  fetch('localhost:8080//inserir' ,{
  
    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    
     
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ 
      nome: nome_respon,
      email: email,
      telefone: telefone,
      data: data,
      custo: custo,
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
  const nome_respon = document.getElementById('nome_respon').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const data = document.getElementById('data').value;
  const custo = document.getElementById('custo').value;   

  console.log(
    nome_respon,
    email,
    telefone,
    data,
    custo,
  );

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  
  fetch('localhost:8080//inserir' ,{
  
    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    
     
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ 
      nome: nome_respon,
      email: email,
      telefone: telefone,
      data: data,
      custo: custo,
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
