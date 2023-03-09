import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <h1>Упс! Страница не найдена!</h1>
            <Link to="/">Главная</Link>
        </>
    );
}

export default NotFoundPage;