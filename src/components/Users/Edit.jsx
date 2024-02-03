import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Edit = ({ userId }) => {
    const [user, setUser] = useState({});
    const fname = user?.name?.split(' ')[0];
    const lname = user?.name?.split(' ')?.slice(1)?.join(' ');

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${userId}`)
            .then(res => setUser(res?.data))
    }, [userId])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        
        const fname = form.firstname.value;
        const lname =  form.lastname.value;
        const name = fname + ' ' + lname;
        const email = form.email.value;
        const mobile = form.mobile.value;
        const password = form.password.value;
        const cPassword = form.cpassword.value;
        console.log(name);


        if (password !== cPassword) {
            return toast.error("Password Not Metch.");
        } else {
            if (!name || !email || !mobile || !password) {
                return toast.error('Empty Field Not allowed.')
            }
            const user = { name, email, mobile, password };
            const success = await axios.put(`http://localhost:3000/users/${userId}`, user);
            if(success?.data?.acknowledged){
                toast.success("Success, Please Relode the Page.");
            };
        }
    }
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mt-2">
                                    <label htmlFor="fname" className="form-label">First Name</label>
                                    <input defaultValue={fname} name="firstname" type="text" id="fname" className="form-control w-100" />
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="lname" className="form-label">Last Name</label>
                                    <input defaultValue={lname} name="lastname" type="text" id="lname" className="form-control w-100" />
                                </div>

                                <div className="mt-2">
                                    <label htmlFor="fname" className="form-label">Email</label>
                                    <input defaultValue={user?.email} name="email" type="text" id="fname" className="form-control w-100" />
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="lname" className="form-label">Mobile</label>
                                    <input defaultValue={user?.mobile} name="mobile" type="text" id="lname" className="form-control w-100" />
                                </div>

                                <div className="mt-2">
                                    <label htmlFor="fname" className="form-label">Password</label>
                                    <input defaultValue={user?.password} name="password" type="password" id="fname" className="form-control w-100" />
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="lname" className="form-label">Confirm Password</label>
                                    <input defaultValue={user?.password} name="cpassword" type="password" id="lname" className="form-control w-100" />
                                </div>

                                <div className="mt-2 d-flex align-items-center gap-3">
                                    <button className="btn btn-primary" data-bs-dismiss="modal">Edit</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;