import type { StoryObj, Meta } from "@storybook/react";
import { Box, TextInput, TextInputProps, Text } from "@ignite-ui/react";

export default {
  title: 'Form/Input',
  component: TextInput,
  args: {
    children: 'Exmaple Text'
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2'}}>
          <Text size='sm'>email adress</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'type your name',
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/'
  }
}


export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}

