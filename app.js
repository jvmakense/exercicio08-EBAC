const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="image/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="image/reprovado.png" alt="Emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado"Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado"Reprovado</span>';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionarLinha();
    atualizaTabela();
    atualizaMediaFinal();
});
function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('Nome-atividade');
    const inputNotaAtividade = document.getElementById('Nota-atividade');
    
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? spanAprovado : spanReprovado}</td>`;
    linha += '</tr>';

    linha += linha;
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
   const mediaFinal = calculaMediaFinal();

   document.getElementById('media-final valor').innerHTML = mediaFinal;
   document.getElementById('media-final-resultado').innerHTML = mediaFinal >= ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i <notas.length; i++){
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}