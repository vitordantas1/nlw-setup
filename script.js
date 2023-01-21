const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

//when click on the button, execute the function add
button.addEventListener('click', add)
form.addEventListener('change', save)

//
function add() {
  //essa função new date() é de uma biblioteca padrão do JavaScript. Ela retorna o dia de hoje. A instrução pt-br é para formatar a data no formato Brasil e o slice serve para retirar o ano que não queremos na data.
  const today = new Date().toLocaleDateString('pt-br').slice (0,-5)
  const dayExists = nlwSetup.dayExists(today)

  //no JS, o if só é considerado caso a função que esteja entre parênteses seja verdadeira. Caso seja falsa, o JS não lê a função if. O return é utilizado para que ao ler o if, o JS pare a leitura naquele local.
  //as funções podem ser pesquisadas nas bibliotecas e testadas no console do inspecionar.
  if (dayExists) {
    alert ('Dia já incluso ❌')
    return
  }

  alert ('Adicionado com sucesso ✅')

  nlwSetup.addDay(today)
}

//para a função save, é necessário transformar os dados armazenados em texto (string) para isso se utiliza a função stringfy do JSON.
//Após salvar a função no local storage, é necessário fazer o "carregamento" dos dados e para isso precisaremos transformar de volta em objeto, utilizando a função parse também do JSON.
function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
//const data = {
//  run: ["01-01", "01-02", "01-06"],
//  water: ["01-01", "01-03", "01-05"],
//  exercise: ['01-03', '01-04', '01-06'],
//}

nlwSetup.setData(data)
nlwSetup.load()

