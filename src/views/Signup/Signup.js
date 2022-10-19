import React from 'react'
import './Signup.css'

const Signup = () => {
    return (
       <div className='wrapper'>
            <div className='container'>
                <div className='content'>
                    <h1 className='brand'><span className='logo'>CS</span> Commonstock</h1>
                    <h2 className='statement'>Create an account to continue.</h2>
                    <div className='login'>
                        <p>Continue with Google.</p>
                    </div>
                    <div className='login'>
                        <p>Continue with Github.</p>
                    </div>
                    <div className='login'>
                        <p>Sign up with Email.</p>
                    </div>
                    <p className='p1'>Already have an account? <a>Log in</a>.</p>
                    <p className='p2'>By signing up, you agree to our<br/><a>Terms of Service</a>, <a>Copyright Policy</a> and <a>Privacy Policy</a></p>
                </div>
            </div>
       </div>
    )
}

export default Signup