import React, {FC, ReactNode} from 'react';
import styles from './FormControls.module.css'
import {WrappedFieldProps} from "redux-form";


type FormsControlsType = {
    formType: 'input' | 'textarea' | 'checkbox';
};

type FormControlProps = WrappedFieldProps & FormsControlsType & {
    children: ReactNode;
};

const FormControl: FC<FormControlProps> = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '') }>
            <div>{children}</div>
            {  hasError &&  <span>  {meta.error}</span>}
        </div>
    );
}

export const TextArea: FC<FormControlProps> = ({ input, meta, children, ...restProps }) => {
    return <FormControl {...restProps} input={input} meta={meta} formType="textarea">{children}<textarea {...input} /></FormControl>
};

export const Input: FC<FormControlProps> = ({ input, meta, children, ...restProps }) => {
    return <FormControl {...restProps} input={input} meta={meta} formType="input">{children}<input {...input} {...restProps} /></FormControl>
};
