const validaTelefone = (tel: string): boolean => {
  const telefoneLimpo = tel.replace(/\s/g, '')
  if (telefoneLimpo.length > 14 || telefoneLimpo.length < 13) {
    alert('Digite um número de telefone válido. ex: (13)99653-1234')
    return false
  }
  const regexTelefone = /^[0-9()-]+$/
  if (!regexTelefone.test(telefoneLimpo)) {
    alert('O telefone deve conter apenas números, parênteses e traço')
    return false
  }
  return true
}

const validaEmail = (mail: string): boolean => {
  const regexEmail = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
  if (!regexEmail.test(mail)) {
    alert('Por favor, insira um e-mail válido')
    return false
  }
  return true
}

const validaAniversario = (dataString: string): boolean => {
  const regexAniversario = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])$/
  if (!regexAniversario.test(dataString)) {
    alert('Insira uma data de aniversário válida, DD/MM (ex: 09/07).')
    return false
  }
  return true
}

export const validaSalvamento = (telefone: string, email: string, aniversario: string): boolean => {
  if (!validaTelefone(telefone)) {
    return false
  }
  if (!validaEmail(email)) {
    return false
  }
  if (!validaAniversario(aniversario)) {
    return false
  }
  return true
}
