type ButtonOptions = 'image' | 'text' | 'html'

interface ButtonOption {
  type: ButtonOptions
  value?: string
  validate: (content?: string) => string
}
