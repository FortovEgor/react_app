import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function MainPage() {
    function clearLocalStorage() {
        localStorage.clear();
        alert("Авторизация сброшена!")
    }

    return (
        <>
            <h1>Главная страница</h1>
            <h3>Упс! Вы не вошли в систему!</h3>
            <div>
                <Link to="/login">Вход</Link>
            </div>
            
            {/* <button onClick={localStorage.clear()}></button> */}
            <Button variant="primary" onClick={ clearLocalStorage }>Сбросить авторизацию</Button>{' '}
        </>
    );
}

export default MainPage;