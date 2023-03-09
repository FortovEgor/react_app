import { useState, useEffect, useCallback } from "react";
import TablePageContent from "../components/TablePageContent";
import { loadUsersList  } from "../network/users";

function IndexPage() {
    const [users, setUser] = useState([]);
    const [offset, setOffset] = useState(null);

    useEffect(() => {
        (async () => {
            const { offset: newOffset, records} = await loadUsersList(10, null);
            setOffset(newOffset);
            setUser(records);
        })()
    }, []);

    const loadMoreUsers = useCallback(async () => {
        const { offset: newOffset, records} = await loadUsersList(10, offset);

        setOffset(newOffset);
        setUser(users => ([... users, ... records]));
    }, [offset]);
    
    return <TablePageContent users={users} loadUsers={loadMoreUsers}/>
}

export default IndexPage;