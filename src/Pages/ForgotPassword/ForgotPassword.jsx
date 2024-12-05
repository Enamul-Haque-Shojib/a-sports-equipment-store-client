import React from 'react';

const ForgotPassword = () => {
    const {passwordReset} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleResetPassword =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;

        passwordReset(email)
        .then(result =>{
            // console.log(result.user);
            toast.warning('Password Reset Email Sent!')
            e.target.reset();
            navigate('/login');
        })
        .catch(error =>{
            // console.log('ERROR',error.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Reset Password!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleResetPassword} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default ForgotPassword;