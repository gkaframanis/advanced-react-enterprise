import React from 'react';
import ReactDOM from 'react-dom';

// import { Color } from "@ds.e/react";
import { Text, Margin, Select } from "@ds.e/react";

import '@ds.e/scss/lib/Utilities.css';
import '@ds.e/scss/lib/Text.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/Select.css';
import '@ds.e/scss/lib/global.css';

// ReactDOM.render(
//     <Color hexCode="#000" />,
//     document.querySelector('#root')
// )

// ReactDOM.render(
//     <div>
//         <Margin>
//             <Text size="base">This is some text</Text>
//         </Margin>
//     </div>,
//     document.querySelector('#root')
// )

const options = [{
    label: 'Strict Black',
    value: 'strict-black'
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}];

ReactDOM.render(
    <div style={{ padding: '40px' }}>
        <Select options={options} />
    </div>,
    document.querySelector('#root')
);