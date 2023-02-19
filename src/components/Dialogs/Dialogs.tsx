import React from 'react';
import  s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Georgy
                </div>
                <div className={s.dialog}>
                    Anna
                </div>
                <div className={s.dialog}>
                    Roman
                </div>
                <div className={s.dialog}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Kate
                </div>
                <div className={s.dialog}>
                    Izzat
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi!
                </div>
                <div className={s.message}>
                    How is your React?
                </div>
                <div className={s.message}>
                    Awesome!
                </div>
            </div>
        </div>
    );
};

