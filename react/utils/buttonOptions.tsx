export const imageButtonOption: ButtonOption = {
  type: 'image',
  validate: (content?: any) =>
    content === null || content === undefined
      ? 'Adicione uma imagem no campo "Tipo de badge"'
      : '',
}

export const textButtonOption: ButtonOption = {
  type: 'text',
  validate: (content?: string) =>
    content === null || content === undefined || content === ''
      ? 'Preencha o campo "Insira o texto da badge"'
      : '',
}

export const htmlButtonOption: ButtonOption = {
  type: 'html',
  validate: (content?: string) =>
    content === null || content === undefined || content === ''
      ? 'Preencha o campo "Insira o HTML da badge"'
      : '',
}

export const enum ButtonOptions {
  image = 'image',
  text = 'text',
  html = 'html',
}
