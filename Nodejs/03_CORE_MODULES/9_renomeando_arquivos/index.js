const fs = require('fs')

const arquivo = 'arquivo.txt'
const novoArquivo = 'novonomearquivo.txt'

fs.rename(arquivo, novoArquivo, (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(`O arquivo ${arquivo} foi renomeado para ${novoArquivo} com sucesso!`)
})