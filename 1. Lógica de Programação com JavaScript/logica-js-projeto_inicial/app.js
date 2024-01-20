alert("Bem-vindo ao jogo do Número Secreto!");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //pega um número aleatório entre 1 e 10
console.log(numeroSecreto);
let chute; //armazena o número que o usuário digitar
let tentativas = 1;

while (chute != numeroSecreto)
{
    chute = prompt("Escolha um número entre 1 e " + numeroMaximo);
    if (chute == numeroSecreto)
    {
        break;
    } 
    else 
        {
            if (numeroSecreto > chute)
            {
                alert("O número secreto é maior que o " + chute);
            } 
            else 
            {
                alert("O número secreto é menor que o " + chute);
            }
            tentativas++;
        }
}

// operador ternário
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


// if (tentativas > 1)
// {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// }
// else
// {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }



