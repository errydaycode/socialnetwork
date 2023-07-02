import React from 'react';
import  s from './Post.module.css'

type PostPropsType={
    message: string
    likesCount: number
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (
            <div className={s.item}>
                <img src="https://cdn.otr-online.ru/files/programs_editions/2021-11/1020x574/medium_65779991531-1.jpg" alt="ava"/>
                {props.message}
                <div>
                    <span>likes</span>  {props.likesCount}
                </div>
            </div >
    );
};

