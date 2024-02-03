import { FaTrash } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import Edit from "../components/Users/Edit";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        try {
            axios.get('http://localhost:3000/users')
                .then(res => setUsers(res?.data));
        } catch (error) {
            console.log(error);
        }
    }, [])
    console.log(users);
    return (
        <div className="container table-responsive">
            <table className="table table-hover border">
                <thead>
                    <tr className="text-center">
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(user => <tr key={user?._id} className="text-center align-middle">
                            <th>{user?.name}</th>
                            <td>{user?.email}</td>
                            <td>{user?.mobile}</td>
                            <td>
                                <button className="btn-icon btn-icon-green" data-bs-toggle="modal" data-bs-target="#exampleModal"><BiEdit /></button>
                                <button className="btn-icon btn-icon-red"><FaTrash /></button>
                                <Edit userId={user?._id} />
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;