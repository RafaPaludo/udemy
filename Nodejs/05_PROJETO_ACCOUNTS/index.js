// Módulos Externos

const inquirer = require('inquirer')
const chalk = require('chalk')

// Módulos Internos
const fs = require('fs')

console.log('Iniciamos o Accounts')

operation();

function operation () {
  inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'O que você deseja fazer?',
    choices: [
      'Criar conta',
      'Consultar saldo',
      'Depositar',
      'Sacar',
      'Sair'
    ]
  }])
  .then(answer => {
    const action = answer['action']

    if (action === 'Criar conta') {
      createAccount();
    } else if (action === 'Consultar saldo') {
      getAccountBalance()
    } else if (action === 'Depositar') {
      deposit();
    } else if (action === 'Sacar') {
      withdraw()
    } else if (action === 'Sair') {
      exitAccount()
    }
  })
  .catch(err => console.warn(err));
}

// Create an account
function createAccount () {
  console.log(chalk.bgGreenBright.black('Parabéns por escolher o nosso banco!'))
  console.log(chalk.green('Defina as opções da sua conta a seguir'))
  buildAccount()
}

// Build an account
function buildAccount () {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Digite um nome para a sua conta:'
  }])
  .then(answer => {
    const accountName = answer['accountName']

    console.info(accountName)

    if (!fs.existsSync('accounts')) {
      fs.mkdirSync('accounts')
    }

    if (fs.existsSync(`accounts/${accountName}.json`)) {
      console.log(chalk.bgRed.black('Essa conta já existe, digite um novo nome para a conta!'))

      return buildAccount()
    }

    fs.writeFileSync(
      `accounts/${accountName}.json`,
      '{"balance": 0}',
      (err) => {
        console.warn(err)
      }
    )

    console.log(chalk.green('Parabéns, a sua conta foi criada!'))
    operation()
  })
  .catch(err => console.warn(err))
}

// Add an amount to user account
function deposit () {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Qual o nome da sua conta?'
  }])
  .then(answer => {
    const accountName = answer['accountName']

    // Verify if account exists
    if (!checkAccount(accountName)) {
      return deposit();
    }

    inquirer.prompt([{
      name: 'amount',
      message: 'Quanto você deseja depositar?'
    }])
    .then(answer => {
      const amount = answer['amount']

      // Add an amount
      addAmount(accountName, amount)

      operation();
    })
    .catch(err => console.warn(err))
  })
  .catch(err => console.warn(err))
}

// Show account balance
function getAccountBalance () {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Qual o nome da sua conta?'
  }])
  .then(answer => {
    const accountName = answer['accountName']

    // Verify account exists
    if (!checkAccount(accountName)) {
      return getAccountBalance();
    }

    const accountData = getAccount(accountName)

    console.log(chalk.bgBlueBright.black(`Olá o saldo da sua conta é de R$${accountData.balance}`))
    operation()
  })
  .catch(err => console.warn(err))
}

// Withdraw an amount from user account
function withdraw () {
  inquirer.prompt([{
    name: 'accountName',
    message: 'Qual o nome da sua conta?'
  }])
  .then(answer => {
    const accountName = answer['accountName']

    if (!checkAccount(accountName)) {
      return withdraw();
    }

    inquirer.prompt([{
      name: 'amount',
      message: 'Quantos reais você deseja sacar?'
    }])
    .then(answer => {
      const amount = answer['amount']

      removeAmount(accountName, amount)
    })
    .catch(err => console.warn(err))

  })
  .catch(err => console.warn(err))
}

// Helpers
function checkAccount (accountName = '') {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome!'))
    return false
  }
  return true
}

function addAmount (accountName, amount) {
  const accountData = getAccount(accountName)

  if (!amount) {
    console.log(chalk.bgRedBright.black('Ocorreu um erro, tente novamente mais tarde!'))
    return deposit();
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    (err) => console.warn(err) 
  )

  console.log(chalk.green(`Foi depositado o valor de R$ ${amount} na sua conta`))
}

function getAccount (accountName) {
  const accountJSON = fs.readFileSync(
    `accounts/${accountName}.json`,
    {
      encoding: 'utf8',
      flag: 'r'
    }
  )

  return JSON.parse(accountJSON);
}

function removeAmount (accountName, amount) {
  const accountData = getAccount(accountName)

  if (!amount) {
    console.log(chalk.bgRedBright.black('Ocorreu um erro, tente novamente mais tarde'))
    return withdraw()
  }

  if (accountData.balance < amount) {
    console.log(chalk.bgRedBright.black('Valor indisponível'))
    return withdraw()
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    (err) => console.warn(err)
  )

  console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta`))
  operation()
}

// Exit account
function exitAccount () {
  console.log(chalk.bgBlueBright.black('Obrigado por usar o Accounts!'))
  process.exit()
}