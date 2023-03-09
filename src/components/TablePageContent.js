import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import {  } from "react-bootstrap-icons";
import TableRow from "./TableRow";

function TablePageContent({ users, loadUsers }) {

    return (
        <>
            <h2>Список товаров</h2>
            <div>
                <Link to="/">На главную</Link>
            </div>
            {/* { JSON.stringify(users)  } */}  
            { JSON.parse(localStorage.getItem('auth')) != "this_is_secret_hash" ? 
                "Вы неавторизованы, товары недоступны!" : 
                "Вы авторизованы, вам доступен список товаров!"
            }

            { (JSON.parse(localStorage.getItem('auth')) == "this_is_secret_hash") ? (!users[0] ? (
                "Нет данных"
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Дата выпуска</th>
                            <th>Цена</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <TableRow key={user.id} user={user} />
                        ))}
                        {/* <TableRow user={users[0]} />
                        <TableRow user={users[1]} />
                        <TableRow user={users[5]} /> */}
                        {/* <TableRow user={users[3]} /> */}
                    </tbody>
                </Table>
                
            )) : ""}
            
            { JSON.parse(localStorage.getItem('auth')) == "this_is_secret_hash" ? 
                <Button onClick={loadUsers}>Загрузить больше</Button> 
                : ""
            }
            
        </>
    )
}

export default TablePageContent;