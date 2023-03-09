function TableRow({ user }) {
    return (
        <tr>
            <td>{!user ? "Без названия" : user.firstName }</td>
            <td>
                {/* {!user ? "Фамимлия" : user.lastName } {!user ? "Имя" : user.firstName} {!user ? "Отчество" : user.middleName} */}
                { !user ? "Дата выпуска" : user.lastName}
            </td>
            <td>{!user ? "Цена" : user.email}</td>
            <td></td>
        </tr>
    );
}

export default TableRow;