import { Fragment, useEffect, useState } from "react"

const Customers = (props) => {
    // //store my customers
    //     const[count, setCount] = useState(0);
    //     const[count1, setCount1] = useState(100);

    //     const incCounter=()=>{
    //         setCount(count+1);
    //     }

    //     const incCounter1=()=>{
    //         setCount1(count1+1);
    //     }
    // //use effect
    // //fires on every load (mandatory), on every setState based on depencency array
    // useEffect(()=>{
    //     console.log('This is useEffect hook in action!!!');
    // },[count]);  //useEffect dependency array => to control sensitivity

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(data);
            setUsers(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Fragment>
            {/* 
            <p>{count}</p>
            <button onClick={incCounter}>Inc</button>
            <p>{count1}</p>
            <button onClick={incCounter1}>Inc1</button> 
            */}
            <ul>
                {
                    users.map(eachUser =>
                        <li key={eachUser.id}>
                            {eachUser.name}
                        </li>)
                }
            </ul>
        </Fragment>
    )
}
export default Customers