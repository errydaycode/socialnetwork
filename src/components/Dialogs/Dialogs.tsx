import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/valitators/validators";


export type dialogsDataType = {
    id: number
    name: string
}
export type messagesDataType = {
    id: number
    message: string
}

// type DialogsPropsType={
//     dialogs:dialogsDataType[]
//     messages:messagesDataType[]
// }

// type stateProps={
//     state:DialogsPropsType
//     newMessageText: string
//     updateNewMessageBody: (newBody: string) => void
//     addMessage: ()=> void
// }

type FormDataType = {
    newMessageText: string
}

const maxLength50 = maxLengthCreator(50)

export const Dialogs = (props: DialogsPropsType) => {

    let mappedDialogs = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let mappedMessages = props.dialogsPage.messages.map(m => < Message key={m.id} message={m.message}/>)

    const addMessage = (values: FormDataType) => {
        // alert(values.newMessageText)
        props.addMessage(values.newMessageText)
    }




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {mappedDialogs}
            </div>
            <div className={s.messages}>
                {mappedMessages}
            </div>
            <div>
                <AddMessageFormRedux onSubmit={addMessage}/>
            </div>

        </div>
    );
};

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       name={'newMessageText'}
                       validate={[required, maxLength50]}
                       placeholder={'Enter your message..'}/>
            </div>
            <div>
                <button>send message</button>
            </div>
        </form>
    </>
}

const AddMessageFormRedux = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'addMessage'
})(AddMessageForm)



