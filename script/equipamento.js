document.addEventListener("DOMContentLoaded", function() {
  carregarComboLocal();
});

function salvar() {
  const nome_equip = document.getElementById('nome_equip').value;
  const local = document.getElementById('locais').value;
  const marca = document.getElementById('marca_equip').value;
<<<<<<< HEAD
  const status_antigo = document.getElementById('disponível').value;
  const numeracao = Number(document.getElementById('numeracao_equip').value);
 
  console.log(
    nome_equip,
    local,
    marca,
    status_antigo,
    numeracao
  );
=======
  const status_antigo = document.getElementById('disponivel').value;
  const numeracao = document.getElementById('numeracao_equip').value;
 
  console.log("nome_equip: " + nome_equip);
  console.log("local: " + local);
  console.log("marca: " + marca);
  console.log("status_antigo: " + status_antigo);
  console.log("numeracao: " + numeracao);

>>>>>>> 6efaba84e0e9be3dd5fad0cf74e521ce6bef2fe2

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch('http://127.0.0.1:8080/equipamento/cadastrar',{

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ 
      nome: nome_equip,
      local: { id: local},
      marca: marca,
      status: status_antigo,
      numeracao: numeracao
    }),



    // body: JSON.stringify({ 
    //   data: data_fluxo, 
    //   valor: valor_fluxo, descricao: descricao_fluxo, conta: { id: conta }, operacao: { id: operacao}}),


    headers: headers

    //Aqui inicia função then
  }).then(response => {
      if(response.ok) {
        return response.json(); //transforma a resposta em JSON
      } else {
        //Esta linha imprime a mensagem de erro
        throw new Error('Erro ao tentar salvar');
      }
      })

      .then(data => {
        //aqui você pode acessar o 'id' retornado do back end
        const id_operacao = data.id;
        console.log('ID do registro salvo:', id_operacao);

        //se quiser armazenar o ID no localStorage
        localStorage.setItem('id_operacao', id_operacao);

          console.log('Foi no servidor e voltou');

          //Esta linha carrega a página sucesso
          window.location.href = 'sucesso.html'    

  })
  //Aqui será executado caso a then não seja chamado
  .catch(error => console.error('Erro!:', error));
}

function consultar() {
  const data = document.getElementById('data_fluxo').value;
  
  fetch(`http://127.0.0.1:8080/fluxo/buscarPorData?data=${data}`, {
    
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }

    }).then(response => {
        if (!response.ok) {
          return response.json(); //transforma a resposta em JSON
        } else {
            throw new Error('Erro ao buscar fluxos');
        }
    
      }).then(ids => {
        const id_operacao = data.id;
        console.log('IDs dos fluxos encontrados:', ids);

        // Armazena os IDs no localStorage
        localStorage.setItem('fluxosIds', JSON.stringify(ids));

        console.log('IDs dos fluxos foram salvos no localStorage');
        window.location.href = 'sucesso.html' 
    
      }).catch(error => {
        console.error('Erro:', error);
      });
}

//botao de voltar 
document.addEventListener('DOMContentLoaded', function() {
const link = document.getElementById('contabt');
localStorage.clear();

// Define o destino do link dinamicamente
link.href = 'home.html';
});

function alterar() {
  const nome_equip = document.getElementById('nome_equip').value;
  const local = document.getElementById('locais').value;
  const marca = document.getElementById('marca_equip').value;
  const status_antigo = document.getElementById('disponivel').value;
  const numeracao = document.getElementById('numeracao_equip').value;

  //se quiser armazenar o ID no localStorage
  const ID = localStorage.getItem('id_equipamento');


  
 
  // Cabeçalho não visivel para o usuario
  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*http://127.0.0.1:5500*');

  fetch(`http://127.0.0.1:8080/fluxo/${ID}` ,{

    method: "PUT",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ data: data_fluxo, valor: valor_fluxo, descricao: descricao_fluxo, conta: { id: conta }, operacao: { id: operacao}}),

    headers: headers

   //Aqui inicia função then
  }).then(response => {

    if(response.ok) {

      //Esta linha imprime a mensagem no concole
      console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      //window.location.href = 'sucesso3.html'   
      alert("alterado com sucesso essa merda") 
    } else {
      //Esta linha imprime a mensagem no console
      console.log('Aconteceu algo que não foi possivel salvar');

      //Esta linha imprime a mensagem de erro
      throw new Error('Erro ao tentar salvar');
    }

  })
  //Aqui será executado caso a then não seja chamado
  .catch(error => console.error('Erro!:', error));
   
  
            //====================================================
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
              const id_operacao = data.id;
              console.log('ID do registro salvo:', id_operacao);

              //se quiser armazenar o ID no localStorage
              localStorage.setItem('id_operacao', id_operacao);

                console.log('Foi no servidor e voltou');

                //Esta linha carrega a página sucesso
                window.location.href = 'sucesso.html'    

            })
            //Aqui será executado caso a then não seja chamado
            .catch(error => console.error('Erro!:', error));
            //====================================================


}
function apagar() {
   //se quiser armazenar o ID no localStorage
 const ID = localStorage.getItem('id_equipamento');

 const nome_equip = document.getElementById('nome_equip').value;
 const local = document.getElementById('locais').value;
 const marca = document.getElementById('marca_equip').value;
 const status_antigo = document.getElementById('disponivel').value;
 const numeracao = document.getElementById('numeracao_equip').value;

 console.log("nome_equip: " + nome_equip);
 console.log("local: " + local);
 console.log("marca: " + marca);
 console.log("status_antigo: " + status_antigo);
 console.log("numeracao: " + numeracao);
 
  // Cabeçalho não visivel para o usuario
  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*http://127.0.0.1:5500*');

fetch(`http://localhost:8080/fluxo/${ID}` ,{

    method: "DELETE",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({}),

    headers: headers

   //Aqui inicia função then
  }).then(response => {

    if(response.ok) {

      //Esta linha imprime a mensagem no concole
      console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      //window.location.href = 'sucesso4.html
      alert("fluxo apagado com sucesso");       
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
({
    
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
  
  .catch(error => console.error('Erro ao carregar locais:', error));{
   
}