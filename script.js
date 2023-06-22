const lista_items = [
    ["a", "awqts"],
    ["e", "etorfl"],
    ["i", "itreds"],
    ["o", "ogird"],
    ["u", "ulori"],
  ]; 
const caracteres = "ÁÉÍÓÚáéíóúâêîôûàèìòùÇç";
var listaCaracteres = caracteres.split("");
  
function Codificar(texto) {
  lista_items.forEach((elemento) => {
    let textoATrocar = elemento[0];
    let textoTrocado = elemento[1];
    texto = texto.replaceAll(textoATrocar, textoTrocado);
  });
  return texto;
}

function Decodificar(texto) {
  lista_items.forEach((elemento) => {
    let textoATrocar = elemento[1];
    let textoTrocado = elemento[0]; 
    texto = texto.replaceAll(textoATrocar, textoTrocado);
  });

  return texto;
}

function copiar(campo) {
  campo.select();
  campo.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(campo.value);
  alert("O texto foi copiado");
}

function validaEntrada(texto) {
  if (texto === '') {  
    alert("Digite um texto!");
    return false;
  }
  if (texto.toLowerCase() != texto) {
    alert("Deve usar apenas letras minusculas!");
    return false;
  }

  listaCaracteres.forEach(function (caractere) {
    if (texto.includes(caractere)) {
      alert("Não pode utilizar acentos!");
      return false;
    } 
  }); 
  return true;
} 

document.getElementById("btn-cripto").addEventListener("click", function () {
  let textoCodificado = document.getElementById("input-texto").value;
  if (!validaEntrada(textoCodificado)) {
    return;
  }
  let textoDecodificado = Codificar(textoCodificado);
  document.getElementById("msg").value = textoDecodificado;
});

document.getElementById("btn-descripto").addEventListener("click", function () {
  let textoNormal = document.getElementById("input-texto").value; 
  let textoDecodificado = Decodificar(textoNormal);
  document.getElementById("msg").value = textoDecodificado;
});

document.getElementById("btn-copy").addEventListener("click", function () {
  let inputMensagem = document.getElementById("msg");
  copiar(inputMensagem);
});