import React from 'react';
import ReactDOM from 'react-dom';

// import { Color } from "@ds.e/react";
import { Text } from "@ds.e/react";

import '@ds.e/scss/lib/Utilities.css';
import '@ds.e/scss/lib/Text.css';


// ReactDOM.render(
//     <Color hexCode="#000" />,
//     document.querySelector('#root')
// )

ReactDOM.render(
    <Text size="base">This is some text</Text>,
    document.querySelector('#root')
)