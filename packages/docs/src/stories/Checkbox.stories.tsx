import type { StoryObj, Meta } from "@storybook/react";
import { Box, Checkbox, CheckboxProps, Text } from "@ignite-ui/react";

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    children: 'Exmaple Text'
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2'}}>
          {Story()}
          <Text size='sm'>Accept terms</Text>
        </Box>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
