import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps {
  prefix?: string
  placeholder?: string
  disabled?: boolean
}

export function TextInput({ prefix, placeholder, disabled }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input placeholder={placeholder} disabled={disabled} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
