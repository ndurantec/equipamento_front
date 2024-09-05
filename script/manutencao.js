function salvar_1() {
  const nome_respon = document.getElementById('nome_respon');
  const email = document.getElementById('email');
  const telefone = document.getElementById('telefone');
  const data = document.getElementById('data');
  const custo = document.getElementById('custo');   
  
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
      nome_respon: nome_respon,
      email: email,
      telefone: telefone,
      data: data,
      custo: custo,
      local: local,
      equipamento: equipamento,
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