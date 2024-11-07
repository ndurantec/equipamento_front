document.addEventListener("DOMContentLoaded", function() {
  carregarComboLocal();
});

 

function salvar() {
  const nome_equip = document.getElementById('nome_equip').value;
  const local = document.getElementById('locais').value;
  const marca = document.getElementById('marca_equip').value;
  const status_antigo = document.getElementById('status').value;
  const numeracao = Number(document.getElementById('numeracao_equip').value);

  console.log(status_antigo);


  if(nome_equip == "") {
  alert("nome não informado");
  document.getElementById('nome_equip').focus();
  document.getElementById('nome_equip').value = '';
  return;
  }

  if( isNaN(numeracao) ) {
    alert("Número não informado, ou Número não está com o formato adequado");
    document.getElementById('numeracao_equip').focus();
    document.getElementById('numeracao_equip').value = '';
    return;
  }

    if(marca == "") {
      alert("nome não informado");
      document.getElementById('marca_equip').focus();
      document.getElementById('marca_equip').value = '';
      return;
      }
  
  //if (nome_equip.trim() === '') {
  //  alert('O campo Nome do Equipamento não pode estar vazio.');
  //  document.getElementById('nome_equip').value = '';
  //  document.getElementById('nome_equip').focus();
  //  return ;
  //}
//
//
//
  //const regex = /^[A-Z ]+$/;
  //if (!regex.test(nome_equip)) {
  //  alert('O nome do equipamento deve conter apenas letras e espaços.');
  //  return false;
  //}

  console.log(nome_equip, local, marca, status_antigo, numeracao);

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch('http://127.0.0.1:8080/equipamento/cadastrar', {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    body: JSON.stringify({ 
      nome: nome_equip,
      local: { id: local },
      marca: marca,
      status: status_antigo,
      numeracao: numeracao
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
  const data = document.getElementById('data_fluxo').value;

  fetch(`http://127.0.0.1:8080/fluxo/buscarPorData?data=${data}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
      if (!response.ok) {
          throw new Error('Erro ao buscar fluxos');
      }
      return response.json();
  }).then(ids => {
      console.log('IDs dos fluxos encontrados:', ids);
      localStorage.setItem('fluxosIds', JSON.stringify(ids));
      window.location.href = 'sucesso.html'; 
  }).catch(error => {
      console.error('Erro:', error);
  });
}

// Botão de voltar
document.addEventListener('DOMContentLoaded', function() {
  const link = document.getElementById('contabt');
  localStorage.clear();
  //link.href = 'home.html';
});

function alterar() {
  const nome_equip = document.getElementById('nome_equip').value;
  const local = document.getElementById('locais').value;
  const marca = document.getElementById('marca_equip').value;
  const status_antigo = document.getElementById('disponivel').value;
  const numeracao = document.getElementById('numeracao_equip').value;

  const ID = localStorage.getItem('id_equipamento');

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch(`http://127.0.0.1:8080/fluxo/${ID}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",  
    body: JSON.stringify({ 
      nome: nome_equip,
      local: { id: local },
      marca: marca,
      status: status_antigo,
      numeracao: numeracao 
    }),
    headers: headers
  }).then(response => {
      if (response.ok) {
          console.log('Foi no servidor e voltou');
          alert("Alterado com sucesso!");
          window.location.href = 'sucesso.html';
      } else {
          throw new Error('Erro ao tentar salvar');
      }
  }).catch(error => console.error('Erro!:', error));
}

function apagar() {
  const ID = localStorage.getItem('id_equipamento');

  fetch(`http://localhost:8080/fluxo/${ID}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*'
    }
  }).then(response => {
      if (response.ok) {
          console.log('Foi no servidor e voltou');
          alert("Fluxo apagado com sucesso");
          window.location.href = 'sucesso.html';     
      } else {
          throw new Error('Erro ao tentar apagar');
      }
  }).catch(error => console.error('Erro!:', error));
}

function carregarComboLocal() {
  fetch('http://127.0.0.1:8080/local/findAll', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
      if (!response.ok) {
          throw new Error('Erro ao carregar locais');
      }
      return response.json();
  }).then(data => {
      const comboBox = document.getElementById('locais');
      data.forEach(local => {
          const option = document.createElement('option');
          option.value = local.id;
          option.textContent = local.nome;
          comboBox.appendChild(option);
      });
  }).catch(error => console.error('Erro ao carregar locais:', error));
}
