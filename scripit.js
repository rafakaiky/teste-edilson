//Seleciona o elemento HTML com o ID "form-atividade" e o associa à variável form.
const form = document.getElementById("form-atividade")

//Armazena uma string contendo um elemento de imagem que representa um emoji de aprovação.
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />'

//Armazena uma string contendo um elemento de imagem que representa um emoji de reprovação.
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />'

//Inicializa um array vazio chamado atividades para armazenar os nomes das atividades.
const atividades = []

//Inicializa um array vazio chamado notas para armazenar as notas das atividades.
const notas = []

//Armazena uma string contendo um elemento de span para exibir "Aprovado".
const spanAprovado = '<span class="aprovado">Aprovado</span>'

//Armazena uma string contendo um elemento de span para exibir "Reprovado".
const spanReprovado = '<span class="reprovado">Reprovado</span>'

// Solicita ao usuário que digite a nota mínima e a converte para um número de ponto flutuante, armazenando-a na variável notaMinima.
const notaMinima = parseFloat(prompt("Digite a Nota Mínima: "))

// Inicialize uma variável de string para armazenar o código HTML das linhas da tabela.
let linhas = ' '

// Anexe um ouvinte de eventos ao evento de envio do formulário.
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    atualizaMeidaFinal()

})

 // Evite o comportamento padrão de envio do formulário.
 e.preventDefault();

 // Chame as funções para adicionar uma nova linha, atualizar a tabela e atualizar a média final.
 adicionaLinha();
 atualizaTabela();
 atualizaMeidaFinal();

// Função para adicionar uma nova linha à tabela.
function adicionaLinha() {
    
 // Obtenha referências aos elementos de entrada para o nome da atividade e a nota.
const inputNomeAtividade = document.getElementById("nome-atividade")
const inputNotaAtividade = document.getElementById("nota-atividade")

// Verifique se a atividade já foi adicionada
if (atividades.includes(inputNomeAtividade.value)) {

// Exiba um alerta se a atividade já tiver sido adicionada.
alert(`A atividade ${inputNomeAtividade.value} já foi inserida!`)
 }
    
else {

// Adicione a atividade e a nota aos seus respectivos arrays.
atividades.push(inputNomeAtividade.value)
notas.push(parseFloat(inputNotaAtividade.value))

// Construa uma linha da tabela no formato HTML.
let linha = '<tr>'
linha += `<td>${inputNomeAtividade.value}</td>`
linha += `<td>${inputNotaAtividade.value}</td>`

// Determine se a atividade está aprovada ou não e inclua a imagem apropriada.
linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
linha += '</tr>'

// Anexe a linha construída às linhas existentes.
linhas += linha

}

// Limpe os campos de entrada após adicionar uma linha.
inputNomeAtividade.value = ' '
inputNotaAtividade.value = ' '
    
}

// Função para atualizar a tabela com as linhas construídas.
function atualizaTabela() {

// Obtenha o elemento do corpo da tabela.
const corpoTabela = document.querySelector('tbody')

// Atualize o conteúdo do corpo da tabela com as linhas construídas.
corpoTabela.innerHTML = linhas
    
}

// Função para atualizar a média final e o status de aprovação.
function atualizaMeidaFinal() {

// Calcule a média final usando a função calculaMediaFinal.
const mediaFinal = calculaMediaFinal()

// Atualize o conteúdo HTML para exibir o valor da média final.
document.getElementById("media-final-valor").innerHTML = mediaFinal

// Determine se o aluno está aprovado ou não e atualize o HTML conforme necessário.
document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
    
}

// Função para calcular a média de todas as notas inseridas
function calculaMediaFinal() {

let somaDasNotas = 0

// Itere pelo array de notas e calcule a soma de todas as notas.
for (let i = 0; i < notas.length; i++) {

somaDasNotas += notas[i]
        
}

 // Calcule e retorne a média dividindo a soma pelo número de notas
return somaDasNotas / notas.length
    
}