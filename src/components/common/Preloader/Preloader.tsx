import React from 'react';
import s from "../../Users/users.module.css";
import preloader from "../../../assets/images/loading-96.gif";

const Preloader = () => {
    return (
        <div>
            <img className={s.preloader} src={preloader}/>
        </div>
    );
};

export default Preloader;