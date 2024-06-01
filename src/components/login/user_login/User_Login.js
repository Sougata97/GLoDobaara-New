import React from "react";
import "./user_login.css";

export default function UserLogin(){
    return <div className="User_container">
            <div className="user_login">
                <h2>SIGN IN</h2>
                <p>SIGN IN USING YOUR GMAIL</p>
                <p>(If you are already logged in on the device)</p>
                <h2>OR</h2>
                <form>
                    <p>SIGN IN USING YOUR</p>
                        <label className="radio-btn">
                            <span>GMAIL</span>
                            <input id="gmail" name="otp" type="radio" value={1} className="radio_input"></input>   
                            <span class="checkmark"></span>                     
                        </label>
                    <p>SIGN IN USING YOUR</p>
                    
                        <label className="radio-btn">
                            <span>PHONE NO.</span>
                            <input id="gmail" name="otp" type="radio" value={1} className="radio_input"></input>                        
                            <span class="checkmark"></span>
                        </label>
                    
                    <p>VERIFY YOUR OTP</p>
                    <input></input>
                    <p>RESEND OTP</p>
                    <button>SUBMIT</button>
                </form>
                <div><a href="#">Don't Have an ACCOUNT?</a></div>
                <div><a href="#">Sign Up</a></div>
            </div>
    </div>
}