import React from 'react'

import ButtonItem from './ButtonItem';

import MyButton from './UI/Button/MyButton.jsx'
import MyInput from './UI/input/MyInput.jsx';

const UserRequest = () => {

    return (
        <div>
            <div>
            <div>Fill request form</div>
            <div>
                <div>Введите имя</div>
                <input 
                    className="Authorization__input_login"
                    title="Login"
                    value="kek"
                    _onChange=""
                />
            </div>
            <div>
                <div>Введите фамилию</div>
                <input 
                    className="Authorization__input_login"
                    title="Login"
                    value="kek"
                    _onChange=""
                />
            </div>
            <div>
                <div>Введите отчество\матчество</div>
                <input 
                    className="Authorization__input_login"
                    title="Login"
                    value="kek"
                    _onChange=""
                />
            </div>
            <div>
                <div>input4</div>
                <MyInput
                    value="some"
                    _onChange=""
                    type="text"
                    placeholder="Название поста"
                />
            </div>
            </div>


            <MyButton children="Add new request"/>
        </div>
    );
};

export default UserRequest;