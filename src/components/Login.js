import { useState } from 'react';
import zionbg from '../images/zion.jpeg'

export default function Login({signup, login}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')

    function handleSubmitSignup(e) {
        e.preventDefault()
        signup(newUsername, newPassword)
    }

    function handleSubmitLogin(e) {
        e.preventDefault();
        login(username, password)
    }

    return (
        <div className="login">
                <img className="bg" src={zionbg} />
                <div className="login-form">
                <div className="title">
                    <h1>National Parks Planner</h1>
                </div>
                <div className="login-forms">
                <form onSubmit={(e) => handleSubmitLogin(e)}>
                <input
                    placeholder="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">LOGIN</button>
                </form>
    
                <form onSubmit={(e) => handleSubmitSignup(e)}>
                <input
                    placeholder="username"
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                
                <button type="submit">CREATE ACCOUNT</button>
                </form>
                </div>
                </div>
            </div>
    )
}


