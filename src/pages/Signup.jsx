import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();


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


        if (password !== cPassword) {
            return toast.error("Password Not Metch.");
        } else {
            if (!name || !email || !mobile || !password) {
                return toast.error('Empty Field Not allowed.')
            }
            const user = { name, email, mobile, password };
            const success = await axios.post('http://localhost:3000/regester', user);
            console.log(success);
            localStorage.setItem('success', success);
            console.log(success?.data?.success);
            if(success?.data?.success != false){
                toast.success('Regestar Success');
                navigate('/users');
            }else{
                toast.error('Regestar Faild');
            }
        }
    }
    return (
        <div className="container">
            <h2 className="text-center mb-2">Sign Up For Access Features.</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input name="firstname" type="text" id="fname" className="form-control w-100" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="fname" className="form-label">Last Name</label>
                        <input name="lastname" type="text" id="lname" className="form-control w-100" />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6 mb-2">
                        <label htmlFor="fname" className="form-label">Email</label>
                        <input name="email" type="text" id="fname" className="form-control w-100" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lname" className="form-label">Mobile</label>
                        <input name="mobile" type="text" id="lname" className="form-control w-100" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="fname" className="form-label">Password</label>
                        <input name="password" type="text" id="fname" className="form-control w-100" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lname" className="form-label">Confirm Password</label>
                        <input name="cpassword" type="text" id="lname" className="form-control w-100" />
                    </div>
                </div>
                <button className="btn btn-primary mt-2">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;