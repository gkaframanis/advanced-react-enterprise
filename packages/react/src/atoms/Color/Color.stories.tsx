import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Color, { ColorProps } from './Color';
import { Spacing } from '@gkaframanis.ds.e/foundation'

// css
import '@ds.e/scss/lib/Utilities.css'
 

export default {
    title: 'Atoms|Color',
    component: Color,
    argTypes: {
      width: {control: 'select', description: 'The width of the square'},
      height: { control: 'select', description: 'The height of the square'}
    }
  } as ComponentMeta<typeof Color>;
  
  const Template: ComponentStory<typeof Color> = (args: ColorProps) => <Color {...args}/>;

export const CustomColor = Template.bind({});
  CustomColor.args = {
  };

export const CustomColorWithCustomDimensions = Template.bind({});
  CustomColorWithCustomDimensions.args = {
    width: Spacing.xl,
    height: Spacing.xl
};
