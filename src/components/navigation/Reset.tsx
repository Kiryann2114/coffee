import React, {useEffect} from "react";
import Hader from "../Hader";
import Futer from "../Futer";
import '../../styles/Reset.css';

function Reset() {

    useEffect(() => {
        return () => {
            document.title = "Восстановление пароля";
        };
    }, []);

    return(
        <div>
            <Hader/>
            <div className="contApp">
                <div className="noabsformVhod">
                    <label className="lableVhlog">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</label>
                    <input type="text" placeholder="Введите E-mail" className="inpVhlog"/>
                    <div className="ResText">
                        Введите адрес электронной почты, и мы отправим на него ссылку для восстановления пароля.
                    </div>
                    <div>
                        <button className="ButtonRes">ПРОДОЛЖИТЬ</button>
                    </div>
                </div>
            </div>
            <Futer/>
        </div>
    );
}

export default Reset;