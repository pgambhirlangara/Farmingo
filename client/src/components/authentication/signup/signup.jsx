import { useState } from "react";
import axios from "axios";

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const signup = async (e) => {
        e.preventDefault();
        const result = await  axios.post('http://localhost:3000/users/register', {
            name,
            email,
            password
        });
        alert(result.data.message);
    }

    return (
        <form>
            <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button onClick={signup}>Submit</button>
        </form>
    )
}

export default Signup;