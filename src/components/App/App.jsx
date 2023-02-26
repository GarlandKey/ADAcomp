import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import './App.css';
import axios from 'axios';

function App() {
	const [registerUsername, setRegisterUsername] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginUsername, setLoginUsername] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const [data, setData] = useState(null);
	const [count, setCount] = useState(0);

	const register = () => {
		axios({
			method: 'POST',
			data: {
				username: registerUsername,
				password: registerPassword,
			},
			withCredentials: true,
			url: 'http://localhost:5172/register',
		}).then((res) => console.log(res));
	};

	const login = () => {
		axios({
			method: 'POST',
			data: {
				username: loginUsername,
				password: loginPassword,
			},
			withCredentials: true,
			url: 'http://localhost:5172/login',
		}).then((res) => console.log(res));
	};

	const getUser = () => {
		axios({
			method: 'GET',
			withCredentials: true,
			url: 'http://localhost:5172/user',
		}).then((res) => {
			setData(res.data);
			console.log(res.data);
		})
	};

	return (
		<div className="App">

			<section>
				<h1>Register</h1>
				<input placeholder='username' onChange={e => setRegisterUsername(e.target.value)} />
				<input placeholder='password' onChange={e => setRegisterPassword(e.target.value)} />
				<button onClick={register}>Submit</button>
			</section>
			
			<section>
				<h1>Login</h1>
				<input placeholder='username' onChange={e => setLoginUsername(e.target.value)} />
				<input placeholder='password' onChange={e => setLoginPassword(e.target.value)} />
				<button onClick={login}>Submit</button>
			</section>
			
			<section>
				<h1>Get User</h1>
				<button onClick={getUser}>Submit</button>
				{ data ? <h1>Welcome back {data.username}</h1> : null }
			</section>
			
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			
			<h1>Vite + React</h1>
			
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			
		</div>
	)
}

export default App
