import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../dis/css/login.css'; 

const Login = () => {
    const navigate = useNavigate(); 

    // Validasi domain email
    function validateEmailDomain(email) {
        const allowedDomain = "@aindotech.com";
        return email.endsWith(allowedDomain);
    }

    useEffect(() => {
        const signupForm = document.getElementById("signupForm");
        const loginForm = document.getElementById("loginForm");

        const handleSignup = (event) => {
            event.preventDefault();
            const username = signupForm.querySelector('input[name="txt"]').value;
            const email = signupForm.querySelector('input[name="email"]').value;
            const password = signupForm.querySelector('input[name="pswd"]').value;

            if (!validateEmailDomain(email)) {
                alert("email belum terdaftar");
                return;
            }

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const userExists = users.some(user => user.email === email);

            if (userExists) {
                alert("Email sudah terdaftar, silakan gunakan email lain.");
            } else {
                users.push({ username, email, password });
                localStorage.setItem("users", JSON.stringify(users));
                alert("Registrasi berhasil! Silakan login.");
            }
        };

        const handleLogin = (event) => {
            event.preventDefault();
            const email = loginForm.querySelector('input[name="email"]').value;
            const password = loginForm.querySelector('input[name="pswd"]').value;

            if (!validateEmailDomain(email)) {
                alert("Maaf, akun anda belum terdaftar");
                return;
            }

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                // Simpan status login di localStorage
                localStorage.setItem("isLoggedIn", true);
                navigate('/dashboard'); // Arahkan ke Dashboard setelah login berhasil
            } else {
                alert("Email atau password salah, atau Anda belum mendaftar.");
            }
        };

        signupForm.addEventListener("submit", handleSignup);
        loginForm.addEventListener("submit", handleLogin);

        return () => {
            signupForm.removeEventListener("submit", handleSignup);
            loginForm.removeEventListener("submit", handleLogin);
        };
    }, [navigate]);

    return (
        <div>
        <div className='contlog'>
            <div className="loginContainer">
                <input type="checkbox" id="chk" aria-hidden="true" />

                
                <div className="signupForm" id="signupForm">
                    <form>
                        <label htmlFor="chk" className="formLabel" aria-hidden="true">Sign up</label>
                        <input type="text" name="txt" placeholder="User name" required className="formInput" />
                        <input type="email" name="email" placeholder="Email" required className="formInput" />
                        <input type="password" name="pswd" placeholder="Password" required className="formInput" />
                        <button className="formButton">Sign up</button>
                    </form>
                </div>

                <div className="loginForm" id="loginForm">
                    <form>
                        <label htmlFor="chk" className="loginFormLabel" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required className="formInput" />
                        <input type="password" name="pswd" placeholder="Password" required className="formInput" />
                        <button className="loginFormButton">Login</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
