document.addEventListener("DOMContentLoaded", function() {
  carregarComboLocal();
  carregarComboEquipamento();
});

function salvar() {
  const nome_respon = document.getElementById('nome_respon').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const data = document.getElementById('data').value;
  const custo = document.getElementById('custo').value;
  const equipamento = document.getElementById('equipamento').value;
  const local = document.getElementById('locais').value;     

  console.log(local);
  console.log(telefone);
  console.log(email);
  console.log(data);
  console.log(custo);
  console.log(equipamento);
  console.log(nome_respon);

  // console.log("======================" + nome_respon.length);

  //Testado e funcionando 08/11/2024
  if(nome_respon.length > 50) {
    alert('O nome deve ter no máximo 50 caracteres');
    document.getElementById('nome_respon').value = '';
    document.getElementById('nome_respon').focus;
    return false;
  }
   
  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');
  
      fetch('http://127.0.0.1:8080/manutencao/cadastrar', {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify({ 
          local: local,
          telefone: telefone,
          email: email,
          data: data,
          custo: custo,
          equipamento: equipamento,
          nome: nome_respon
        }),
        headers: headers
      }).then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Erro ao tentar salvar');
          }
      }).then(data => {
          const id_operacao = data.id;
          console.log('ID do registro salvo:', id_operacao);
          localStorage.setItem('id_operacao', id_operacao);
          //window.location.href = 'sucesso.html';    
      }).catch(error => console.error('Erro!:', error));
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
  function carregarComboLocal() {
 
    console.log('Carregou a página e chamou a função');
  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/local/findAll' ,{
  
      method: "GET",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
  
      headers: headers
  
      
    }).then(response => response.json())
    .then(data => {
        const comboBox = document.getElementById('locais');
        data.forEach(local => {
            const option = document.createElement('option');
            option.value = local.id;
            option.textContent = local.nome;
            comboBox.appendChild(option);
        });
    })

    .catch(error => console.error('Erro ao carregar locais:', error)); 
  }


  function carregarComboEquipamento() {

    console.log('Carregou a página e chamou a função');
  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/equipamento/findAll' ,{
  
      method: "GET",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
      
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
  
      headers: headers
  
      
    }).then(response => response.json())
    .then(data => {
        const comboBox = document.getElementById('equipamento');
        data.forEach(local => {
            const option = document.createElement('option');
            option.value = local.id;
            option.textContent = local.nome;
            comboBox.appendChild(option);
        });
    })
    .catch(error => console.error('Erro ao carregar equipamento:', error)); 
}