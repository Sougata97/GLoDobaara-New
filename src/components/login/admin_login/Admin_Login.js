import React from "react";
import "./admin_login.css"
import img from "./1welcomebck.png"
export default function AdminLogin(){
    return <div className="container d-flex">
        <div className="admin_login" align>
            <div>
                <img src={img} alt="">

                </img>
            </div>
            <div className="div1">
                <button>Welcome Back</button>
                <p className="centerp">Super Admin OR Admin Login</p>
                <form>
                    <p className="leftp">Login as</p>
                    <label class="custom-radio-btn">
                        <span class="label">Admin</span>
                        <input id="admin" name="LogInAs" type="radio" value={1} className="radio_input"></input>
                        <span class="checkmark"></span>
                    </label>
                    <label class="custom-radio-btn">
                        <span class="label">Super Admin</span>
                        <input id="super_admin" name="LogInAs" type="radio" value={2} className="radio_input" checked></input>
                        <span class="checkmark"></span>
                    </label>
                    <input type="text" id="id" name="id" placeholder="User ID"></input>
                    <input type="password" id="password" name="pass" placeholder="Password"></input>
                    <button>Submit</button>
                    <div><a href="#">Forgot UserID?</a></div>
                    <div><a href="#">Forgot password</a></div>
                </form>
            </div>
        </div>
    </div>
}