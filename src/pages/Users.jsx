import { FaTrash } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

const Users = () => {
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
                    <tr className="text-center align-middle">
                        <th>Monishat Baishnab</th>
                        <td>baishnabmonishat@gmail.com</td>
                        <td>01609927144</td>
                        <td>
                            <button className="btn-icon btn-icon-green"><BiEdit /></button>
                            <button className="btn-icon btn-icon-red"><FaTrash /></button>
                        </td>
                    </tr>
                    <tr className="text-center align-middle">
                        <th>Monishat Baishnab</th>
                        <td>baishnabmonishat@gmail.com</td>
                        <td>01609927144</td>
                        <td>
                            <button className="btn-icon btn-icon-green"><BiEdit /></button>
                            <button className="btn-icon btn-icon-red"><FaTrash /></button>
                        </td>
                    </tr>
                    <tr className="text-center align-middle">
                        <th>Monishat Baishnab</th>
                        <td>baishnabmonishat@gmail.com</td>
                        <td>01609927144</td>
                        <td>
                            <button className="btn-icon btn-icon-green"><BiEdit /></button>
                            <button className="btn-icon btn-icon-red"><FaTrash /></button>
                        </td>
                    </tr>
                    <tr className="text-center align-middle">
                        <th>Monishat Baishnab</th>
                        <td>baishnabmonishat@gmail.com</td>
                        <td>01609927144</td>
                        <td>
                            <button className="btn-icon btn-icon-green"><BiEdit /></button>
                            <button className="btn-icon btn-icon-red"><FaTrash /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Users;