// VARIÁVEIS

const inputCep = document.querySelector(".cep_input");
const searchIcon = document.querySelector(".search_btn");

// FUNÇÕES

const searchCep = async () => {
  let inputValue = inputCep.value;

  const apiLink = `https://viacep.com.br/ws/${inputValue}/json/`;

  await fetch(apiLink)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.hasOwnProperty("erro")) {
        let erro =
          data.cep &&
          data.localidade &&
          data.uf &&
          data.bairro &&
          data.logradouro &&
          data.ddd;
        erro.innerHTML = "";
      } else {
        searchCep;
      }

      document.querySelector(".cep").innerHTML = "CEP:   " + data.cep;
      document.querySelector(".cidade").innerHTML = "Cidade:   " + data.localidade;
      document.querySelector(".estado").innerHTML = "Estado:   " + data.uf;
      document.querySelector(".bairro").innerHTML = "Bairro:   " + data.bairro;
      document.querySelector(".rua").innerHTML = "Rua:   " + data.logradouro;
      document.querySelector(".ddd").innerHTML = "DDD:   " + data.ddd;
    })
    .catch(() => {
      document.querySelector(".erro").innerHTML = "CEP NÃO ENCONTRADO!!";
    });
};

const updateCep = async () => {
  document.querySelector(".erro").innerHTML = "";
  document.querySelector(".cep").innerHTML = "";
  document.querySelector(".cidade").innerHTML = "";
  document.querySelector(".estado").innerHTML = "";
  document.querySelector(".bairro").innerHTML = "";
  document.querySelector(".rua").innerHTML = "";
  document.querySelector(".ddd").innerHTML = "";
};

// EVENTOS

searchIcon.addEventListener("click", searchCep);

searchIcon.addEventListener("click", updateCep);
