import './styles/label.scss';
import * as React from 'react';
import CN from "classnames";
import { labelTypes } from '../../../constants';

function Label({ type, text }) {

    // Appling relevant style class by checking the "type" prop
    const LabelClasses = CN({
        "label label__header": type === labelTypes.header,
        "label label__sectionHeader": type === labelTypes.sectionHeader,
        "label label__cardHeader": type === labelTypes.cardHeader,
        "label label__productPrice": type === labelTypes.productPrice,
        "label label__productDesc": type === labelTypes.productDesc,
    });

    return (
        <div data-testid="label" className={LabelClasses}>
            {type ===  labelTypes.productPrice && "Rs "} {text}
        </div>
    );
}

export default Label;

