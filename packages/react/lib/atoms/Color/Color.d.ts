/// <reference types="react" />
import React from 'React';
import Spacing from '../../foundation/Spacing';
import '@ds.e/scss/lib/Utilities.css';
interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: React.FC<ColorProps>;
export default Color;
