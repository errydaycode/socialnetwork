import React from 'react';
import styles from './FormControls.module.css'


const FormControl = ({input, meta, children, ...props}: any) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '') }>
            <div>{children}</div>
            {  hasError &&  <span>  {meta.error}</span>}
        </div>
    );
}

export const TextArea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...restProps} {...input} /></FormControl>
};

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...restProps} {...input} /></FormControl>
};

