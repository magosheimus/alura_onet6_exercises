let numero = prompt("Escolha um número positivo")


while (numero < 0)
{
    numero = prompt ("Por favor, escolha um número positivo");
} 

while (numero >= 0)
{
    alert("Contagem regressiva: "+ numero);
    numero--;
}


