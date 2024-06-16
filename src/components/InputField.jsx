import React, { useState } from "react";

const InputField = (props) => {
    const [inputValue, setInputValue] = useState(props.value || "");
    const [errorMessage, setErrorMessage] = useState(props.message || "");
    const func = () => props.onChange()

    function update_inputValue(event) {
        const newValue = event.target.value;
        console.log("InputField: updated input to " + newValue);
        setInputValue(newValue);

    }

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
      
        console.log("checking new input");
          // Пример проверки ввода
          if (newValue === "") {
              setErrorMessage("Поле не может быть пустым");
          }
          else
            setErrorMessage("");

        func()
    };

    return (
        <div className="inputField">
            <div className="inputField__content">
                <strong className="inputField__title">{props.title}</strong>
                <div className="inputField__hint">{props.hint}</div>
                <div className="inputField__input">
                    <input onInput={handleInputChange} value={inputValue} />
                </div>
                {props.message && <div className="inputField__message">{errorMessage}</div>}
            </div>
        </div>
    )
}

export default InputField;

/*
className="Authorization__input_login"
                    title="Login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
*/
