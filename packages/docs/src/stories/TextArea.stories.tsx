import type { StoryObj, Meta } from "@storybook/react";
import { Box, TextArea, TextAreaProps, Text } from "@ignite-ui/react";

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    children: 'Exmaple Text'
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2'}}>
          <Text size='sm'>Obs</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any obs...',
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}

