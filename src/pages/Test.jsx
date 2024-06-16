import React, { useState } from "react";

import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/Button/MyButton";

import { useNavigate } from 'react-router-dom';

const Test = () => {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [name3, setName3] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [request, setRequest] = useState("");

    const [imageSrc, setImageSrc] = useState("");
    const [imageSrc2, setImageSrc2] = useState("");
    const [imageSrc3, setImageSrc3] = useState("");

    const [resizeImageWidth, setResizeImageWidth] = useState('');
    const [resizeImageHeight, setResizeImageHeight] = useState('');

    const navigate = useNavigate()

    const onButtonIsPressed = async () => {
        const name = `${name1} ${name2} ${name3}`;
        const credentials = {
            name: name.trim(),
            gender: gender,
            birthdate: birthdate,
            company: company,
            email: email,
            request: request
        };

        try {
            const response = await fetch("http://localhost:5000/api/request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            setImageSrc('http://localhost:5000' + data['image']);
            setImageSrc2('http://localhost:5000' + data['resized']);
            setImageSrc3('http://localhost:5000' + data['resized2']);
            

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }

        //test
        console.log(credentials.name);

        //navigate('http://localhost:5000/images/image1.png');

        return (<div>hello</div>)
    };

    return (
        <div style={{ 'width': '800px', 'height': 'auto'}} >
            <h3 style={{ backgroundColor: "rgba(0, 128, 128, 0.5)", color: "rgba(0, 0, 0, 0.7)" }}>Заявка</h3>
            <h5 style={{ backgroundColor: "rgba(0, 128, 128, 0.5)", color: "rgba(0, 0, 0, 0.7)" }}>Введите данные пользователя</h5>
            <div>
                <MyInput value={name1} onChange={(e) => setName1(e.target.value)} placeholder="Введите имя" tdt='input' />
            </div>

            <div>
                <MyInput value={name2} onChange={(e) => setName2(e.target.value)} placeholder="Введите фамилию" tdt='input' />
            </div>

            <div>
                <MyInput value={name3} onChange={(e) => setName3(e.target.value)} placeholder="Введите отчество\матчество" tdt='input' />
            </div>

            <div>
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    style={{ border: "1px solid teal" }}>
                    <option value="" disabled>Выберите пол</option>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>
            </div>

            <div>
                <MyInput value={birthdate} onChange={(e) => setBirthdate(e.target.value)} placeholder="Введите дату рождения" tdt='input' type='date' />
            </div>

            <div>
                <MyInput value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Введите адрес электронной почты" tdt='input' />
            </div>

            <div>
                <MyInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Введите название компании" tdt='input' />
            </div>

            <h5 style={{ backgroundColor: "rgba(0, 128, 128, 0.5)", color: "rgba(0, 0, 0, 0.7)" }}>Введите запрос пользователя</h5>
            <div>
                <MyInput value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Введите запрос" tdt='textarea' />
            </div>

            <MyButton onClick={onButtonIsPressed}>Отправить</MyButton>
            
            <div className="Images" style={{'display': 'flex', 'flex-direction': 'column', 'align-items': 'center'}}>
                {imageSrc && (
                    <div>
                        <h5>Полученное изображение: {imageSrc}</h5>
                        <img src={imageSrc} alt="Полученное изображение" style={{ 'maxWidth': '800px'}} />
                    </div>
                )}
                <div className="ResizedImages" style={{'display': 'flex', 'flex-direction': 'column', 'align-items': 'start'}}>
                    {imageSrc2 && imageSrc3 && (
                        <div>
                            <h5>Полученное изображение</h5>
                            <img src={imageSrc2} alt="Полученное изображение" style={{ 'maxWidth': '800px', 'width': '50%', 'height': '50%'}} />
                        </div>
                    )}
                    {imageSrc3 && (
                        <div>
                            <h5>Полученное изображение</h5>
                            <img src={imageSrc3} alt="Полученное изображение" style={{ 'maxWidth': '800px', 'width': '50%', 'height': '50%'}} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

/*
            <div className="CustomImageResize">
                <MyInput value={request} onChange={(e) => setResizeImageWidth(e.target.resizeImageWidth)} placeholder="Ширина" tdt='input' />
                <MyInput value={request} onChange={(e) => setResizeImageHeight(e.target.resizeImageHeight)} placeholder="Высота" tdt='input' />
                
            </div>
*/

export default Test;

