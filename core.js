/**
 * @param valor - Quanto vale o parametro do array
 * @param quantidade - Quantidade de Moedas disponiveis
 */
const Moedas = [
  { value: 1, qntd: 40 },
  { value: 0.5, qntd: 40 },
  { value: 0.25, qntd: 7 },
  { value: 0.1, qntd: 10 },
  { value: 0.05, qntd: 19 },
  { value: 0.01, qntd: 40 }
];
/**
 * @param troco - Valor que a maquina deve retornar @type Float
 */
const troco = 61.14;

function vMachineCore(troco, moeda) {
  let arr = [];
  if (troco > verificaTotalMoedas(moeda))
    return { status: "Erro", message: "Sem troco o suficiente" };
  for (let x = 0; x < moeda.length; ++x) {
    let qntd = parseInt(troco / moeda[x].value);
    let value = moeda[x].value;
    arr.push({ qntd, value });
    troco = troco - qntd * moeda[x].value;
  }

  for (let j = 0; j < moeda.length; j++) {
    try {
      if (arr[j].qntd > moeda[j].qntd) {
        let lastCount = j + 1;
        let diff = arr[j].qntd - moeda[j].qntd;
        let test = diff / moeda[lastCount].value;
        arr[lastCount].qntd = arr[lastCount].qntd + test;
        arr[j].qntd = arr[j].qntd - diff;
      }
    } catch (error) {
      return { status: "Erro", message: "Sem moedas o suficiente" };
    }
  }
  return arr;
}

function verificaMoedas(quantidade, moedas) {
  for (let i = 0; i < moedas.length; i++) {
    const moeda = moedas[i];
    if (quantidade > moeda.qntd) {
      return false;
    } else {
      return true;
    }
  }
}

function verificaTotalMoedas(moedas) {
  let total = 0;
  for (let i = 0; i < moedas.length; i++) {
    const element = moedas[i];
    total = total + element.value * element.qntd;
  }
  return total;
}

console.log(vMachineCore(troco, Moedas));
