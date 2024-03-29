import React, {useEffect} from "react";
import Hader from "../Hader";
import Futer from "../Futer";
import Katalog from "../Katalog";

function Opt(){

    useEffect(() => {
        return () => {
            document.title = "Оптовые цены";
        };
    }, []);

    const tel = "8 (800) 333-49-80";
    const Email = "shop@tastycoffee.ru";
    return(
        <div>
            <Hader/>
            <br/>
            <br/>
            <div className="contApp">
                <div className="ZagolKat">
                    Для оформления заказа по оптовым ценам нужно связаться с менеджером по телефону {tel} или написать на почту {Email}
                </div>
                <br/>
                <br/>
                <Katalog type={"opt"} katcount={0}/>
            </div>
            <Futer/>
        </div>
    );
}

export default Opt;