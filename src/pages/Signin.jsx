
const Signin = () => {
    return (
        <>
            <div className="container">
                <h2 className="text-center mb-2">Sign In For Access Features.</h2>
                <form className="signinform">
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" id="email" className="form-control w-100" />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" className="form-control w-100" />
                    </div>
                    <button className="btn btn-primary mt-2">Sign in</button>
                </form>
            </div>
        </>
    );
};

export default Signin;