/// <reference types="react" />
import React from 'React';
import { Spacing } from "@ds.e/foundation";
import '@ds.e/scss/lib/Utilities.css';
export interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: React.FC<ColorProps>;
export default Color;
