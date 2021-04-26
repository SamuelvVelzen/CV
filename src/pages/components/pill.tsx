import React, { ReactElement } from 'react';

interface PropsInterface {
    // className: Dispatch<React.SetStateAction<string>>;
    label: string;
    active?: boolean;
    amount?: number;
}

function Pill(props: PropsInterface): ReactElement {
    return (
        <span
            className={'pill ' + (props.active ? 'active' : '')}
            data-name={props.label}
            data-value={props.amount ?? 0}
        >
            {props.label} ({props.amount ?? 0})
        </span>
    );
}

export default Pill;
