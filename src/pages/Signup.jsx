
const Signup = () => {
    return (
        <div className="container">
            <h2 className="text-center mb-2">Sign Up For Access Features.</h2>
            <form className="form">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input type="text" id="fname" className="form-control w-100" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lname" className="form-label">Last Name</label>
                        <input type="text" id="lname" className="form-control w-100" />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6 mb-2">
                        <label htmlFor="fname" className="form-label">Email</label>
                        <input type="text" id="fname" className="form-control w-100" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lname" className="form-label">Mobile</label>
                        <input type="text" id="lname" className="form-control w-100" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="fname" className="form-label">Password</label>
                        <input type="text" id="fname" className="form-control w-100" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lname" className="form-label">Confirm Password</label>
                        <input type="text" id="lname" className="form-control w-100" />
                    </div>
                </div>
                <button className="btn btn-primary mt-2">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;