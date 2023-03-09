import UserForm from "../components/UserForm";

function AddUserPage() {
    return (
        <>
            <h1>Войдите в аккаунт</h1>
            <UserForm initialValues={{ email : "ekfortov@edu.hse.ru"}}/>
        </>
    )
}

export default AddUserPage;