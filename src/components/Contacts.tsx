import React, {useEffect, useRef, useState} from "react";
import tg from "../images/TG.png";

function Contacts(){

    const [isElementVisible, setElementVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (elementRef.current && !elementRef.current.contains(event.target as Node | null)) {
            setElementVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleButtonClick = () => {
        setElementVisible(!isElementVisible);
    };

    return(
        <div ref={elementRef}>
            <button onClick={handleButtonClick} className="btnCont">
                <div className='linkHeader Comissioner'>
                    Контакты
                </div>
            </button>
            <div className="formCont Comissioner" hidden={!isElementVisible}>
            <div className="absformCont">
                    <a href="https://web.telegram.org/" target="_blank" className="contText">
                        Написать в Telegram
                    </a>
                    <a href="https://vk.com/" target="_blank" className="contText">
                        Написать в VK
                    </a>
                    <div className="line1"></div>
                    <div className="contText">
                        8 (800) 333-49-80
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;