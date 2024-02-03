import axios from "axios";
import toast from "react-hot-toast";
const Signin = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            return toast.error('Empty field not allowed');
        }

        try {
            const result = await axios.post('http://localhost:3000/login', { email, password });
            const login = result?.data?.success;
            localStorage.setItem('success', login);
            const isLogin = localStorage.getItem('success');
            console.log(isLogin);
            if(isLogin !== 'false'){
                toast.success('Login Success');
            }else{
                toast.error('Login Faild');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="container">
                <h2 className="text-center mb-2">Sign In For Access Features.</h2>
                <form className="signinform" onSubmit={handleSubmit} >
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input name="email" type="text" id="email" className="form-control w-100" />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input name="password" type="password" id="password" className="form-control w-100" />
                    </div>
                    <button className="btn btn-primary mt-2">Sign in</button>
                </form>
            </div>
        </>
    );
};



export default Signin;