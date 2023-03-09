import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState, useCallback } from 'react';

function UserForm({ initialValues }) {
    const [email, setEmail] = useState((initialValues || {}).email || "");
    const [password, setPassword] = useState("");

    const onClick = useCallback(async (event) => {
        event.preventDefault();
        localStorage.setItem('auth', JSON.stringify("any_value"));
        // alert(`Ваш email: ${email}; Ваш пароль: ${password}`)
        if (email == "ekfortov@edu.hse.ru" && password == "123456" || password=="secret111") {
            alert("Вы вошли в систему! Можете смотреть товары")
            localStorage.setItem('auth', JSON.stringify("this_is_secret_hash"));
            // let auth_token = JSON.parse(localStorage.getItem('auth'));
            // alert(auth_token)
        } else {
            alert("Неверно! Попробуйте ещё раз!")
        }
    }, [email, password]);

    return (
        <Card style={{ width: '30rem' }}>
            <Card.Body>
                <Form>
                    {/* <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Введите фамилию" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group> */}
                    {/* <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="Введите имя" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="middleName">
                        <Form.Label>Отчество</Form.Label>
                        <Form.Control type="text" placeholder="Введите отчество" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group> */}
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Введите email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={true}
                        />
                        <Form.Control.Feedback type="invalid">Это не похоже на email!</Form.Control.Feedback>
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Введите пароль" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your password with anyone else.
                        </Form.Text>
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit" onClick={onClick}>
                        Войти
                    </Button>
                </Form>
            </Card.Body>

        </Card>
        
    )
}

export default UserForm;