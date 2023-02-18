import React from 'react';
import  s from './Post.module.css'


export const Post = () => {
    return (
            <div className={s.item}>
                <img src="https://pristor.ru/wp-content/uploads/2019/09/%D0%90%D0%BD%D0%B8%D0%BC%D0%B5-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D1%8C-%D1%81%D0%BC%D0%B5%D1%80%D1%82%D0%B8-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%A0%D1%8E%D0%BA%D0%B0010.jpg" alt="ava"/>
                Post 1
                <div>
                    <span>likes</span>
                </div>
            </div >
    );
};

