document.addEventListener("DOMContentLoaded", function() {
  carregarComboLocal();
});

function salvar() {
  const nome_equip = document.getElementById('nome_equip').value;
  const local = document.getElementById('locais').value;
  const marca = document.getElementById('marca_equip').value;
  const status_antigo = document.getElementById('status').value; // Certifique-se de que o ID está correto
  const numeracao = document.getElementById('numeracao_equip').value;

  console.log(local);

  if (nome_equip === "") {
    alert("Nome não informado");
    document.getElementById('nome_equip').focus();
    return;
  }

  if (isNaN(numeracao) || numeracao.trim() === "") {
    alert("Número não informado, ou Número não está com o formato adequado");
    document.getElementById('numeracao_equip').focus();
    return;
  }

  if (marca === "") {
    alert("Marca não informada");
    document.getElementById('marca_equip').focus();
    return;
  }

  console.log(nome_equip, local, marca, status_antigo, numeracao);

  const headers = new Headers();
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
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then(err => { throw new Error(err.message || 'Erro ao tentar salvar'); });
    }
  })
  .then(data => {
    const id_operacao = data.id;
    console.log('ID do registro salvo:', id_operacao);
    localStorage.setItem('id_operacao', id_operacao);
    //window.location.href = 'sucesso.html';    
  })
  .catch(error => console.error('Erro!', error));
}

function consultar() {
  const nomeDoEquipamento = document.getElementById('nome_equip').value;
  const numeracaoDoEquipamento = document.getElementById('numeracao_equip').value;

  console.log(nomeDoEquipamento);
  console.log(numeracaoDoEquipamento);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');


  fetch('http://127.0.0.1:8080/equipamento/findByNome', {


    method: "POST",
    mode: "cors",
    cache: "no-cache",
    
    
    body: JSON.stringify({
      nome: nomeDoEquipamento,
      numeracao: numeracaoDoEquipamento
     
    }),

    headers: headers

   //Aqui inicia função then
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Erro ao tentar salvar');
    }
  })
  .catch(error => console.error('Erro!:', error));


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
  const status_antigo = document.getElementById('status').value; // Certifique-se de que o ID está correto
  const numeracao = document.getElementById('numeracao_equip').value;

  const ID = localStorage.getItem('id_equipamento');

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch(`http://127.0.0.1:8080/equipamento/${ID}`, {
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
  })
  .then(response => {
    if (response.ok) {
      console.log('Foi no servidor e voltou');
      alert("Alterado com sucesso!");
      //window.location.href = 'sucesso.html';
    } else {
      return response.json().then(err => { throw new Error(err.message || 'Erro ao tentar salvar'); });
    }
  })
  .catch(error => console.error('Erro!', error));
}

function apagar() {
  const ID = localStorage.getItem('id_equipamento');

  fetch(`http://localhost:8080/equipamento/${ID}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*'
    }
  })
  .then(response => {
    if (response.ok) {
      console.log('Foi no servidor e voltou');
      alert("Fluxo apagado com sucesso");
      //window.location.href = 'sucesso.html';     
    } else {
      return response.json().then(err => { throw new Error(err.message || 'Erro ao tentar apagar'); });
    }
  })
  .catch(error => console.error('Erro!', error));
}

function carregarComboLocal() {
  fetch('http://127.0.0.1:8080/local/findAll', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar locais');
    }
    return response.json();
  })
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
