import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import MyButton from '../components/UI/Button/MyButton.jsx'
import MyInput from '../components/UI/input/MyInput.jsx'

function WorkSession(inputValue) {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [name3, setName3] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [request, setRequest] = useState("");
    const [kredit_type, set_kredit_type] = useState('')

    const [imageSrcWidth, setImageSrcWidth] = useState("");
    const [imageSrcHeight, setImageSrcHeight] = useState("");
    const [imageSrc, setImageSrc] = useState("");

    const [imageSrc2Width, setImageSrc2Width] = useState("");
    const [imageSrc2Height, setImageSrc2Height] = useState("");
    const [imageSrc2, setImageSrc2] = useState("");

    const [imageSrc3Width, setImageSrc3Width] = useState("");
    const [imageSrc3Height, setImageSrc3Height] = useState("");
    const [imageSrc3, setImageSrc3] = useState("");

    const navigate = useNavigate()

    if (localStorage.getItem('isAuthenticated') != 'true')
      navigate('/login');

    const onButtonIsPressed = async () => {
        const name = `${name1} ${name2} ${name3}`;
        const credentials = {
            auth_token: localStorage.getItem('auth_token'),
            name: name.trim(),
            gender: gender,
            birthdate: birthdate,
            kredit_type: kredit_type,
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

            if (data['status'] != 'error')
            {
              setImageSrcWidth(data['images']['image1']['width'])
              setImageSrcHeight(data['images']['image1']['height'])

              setImageSrc2Width(data['images']['image2']['width'])
              setImageSrc2Height(data['images']['image2']['height'])

              setImageSrc3Width(data['images']['image3']['width'])
              setImageSrc3Height(data['images']['image3']['height'])

              setImageSrc('http://localhost:5000' +  data['images']['image1']['image']);
              setImageSrc2('http://localhost:5000' + data['images']['image2']['image']);
              setImageSrc3('http://localhost:5000' + data['images']['image3']['image']);
            }
            else
              navigate('/login')
            

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }

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

            <div>
                <select
                    value={kredit_type}
                    onChange={(e) => setGender(e.target.value)}
                    style={{ border: "1px solid teal" }}>
                    <option value="money" disabled>Выберите тип клиента</option>
                    <option value="auto">Автокредит	</option>
                    <option value="building">Кредит под залог недвижимости</option>
                    <option value="money">Кредит</option>
                    <option value="crown">Премиум пользователь</option>
                </select>
            </div>

            <h5 style={{ backgroundColor: "rgba(0, 128, 128, 0.5)", color: "rgba(0, 0, 0, 0.7)" }}>Введите запрос пользователя</h5>
            <div>
                <MyInput value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Введите запрос" tdt='textarea' />
            </div>

            <MyButton onClick={onButtonIsPressed}>Отправить</MyButton>
            
            <div className="Images" style={{'display': 'flex', 'flex-direction': 'column', 'align-items': 'center'}}>
                {imageSrc && (
                    <div>
                        <h5>Полученное изображение: {`Ширина: ${imageSrcWidth} Высота: ${imageSrcHeight}`}</h5>
                        <img src={imageSrc} alt={"image"} style={{ 'maxWidth': '800px'}} />
                    </div>
                )}
                <div className="ResizedImages" style={{'display': 'flex', 'flex-direction': 'column', 'align-items': 'start'}}>
                    {imageSrc2 && imageSrc3 && (
                        <div>
                            <h5>{`Ширина: ${imageSrc2Width} Высота: ${imageSrc2Height}`}</h5>
                            <img src={imageSrc2} alt="Полученное изображение" style={{ 'maxWidth': '800px', 'width': '50%', 'height': '50%'}} />
                        </div>
                    )}
                    {imageSrc3 && (
                        <div>
                            <h5>{`Ширина: ${imageSrc3Width} Высота: ${imageSrc3Height}`}</h5>
                            <img src={imageSrc3} alt="Полученное изображение" style={{ 'maxWidth': '800px', 'width': '50%', 'height': '50%'}} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WorkSession;