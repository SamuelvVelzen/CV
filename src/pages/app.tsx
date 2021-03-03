import * as React from 'react';
import { ReactElement } from 'react';

export default function App(): ReactElement {
    const test = { hoi: 'nee' };
    console.log(test.hoi);
    return <p>testing</p>;
}
