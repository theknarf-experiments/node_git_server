import dom, {sls} from '../dom.js';

const importAll = (r)   => r.keys().map(r);
const random    = (arr) => arr[Math.floor(Math.random() * arr.length)];

let bg_pics = importAll( require.context('../img/', true, /\.jpg$/) );

export function signin_frontpage(req, res) {
	res.send(
		<html>
			<head>
				<style>
				{sls`
					body {
						background-image: url('${random(bg_pics)}');
						background-size: cover;
					}
					.center {
						display: flex;
						align-items: center;
						justify-content: center;
						min-height: 100%;
					}
					form {
						margin-top: -10%;
						min-width: 300px;
						color: white;
					}
					form h1 {
						text-align: center;
						text-shadow: 0px 0px 15px #000;
					}
					form a {
						display: block;
						float: left;
						color: lightgrey;
						text-decoration: none;
						margin-top: 30px;
						text-shadow: 0px 0px 5px #000;
					}
					form a:hover {
						text-shadow: 1px 1px 5px #000;
					}
					input {
						-webkit-appearance: none;
						-moz-appearance: none;
						appearance: none;
						display: block;
						margin: 15px 0;
						padding: 15px 20px;
						border: none;
						border-radius: 4px;
						background: rgba(50,50,50,0.6);
						color: white;
						outline: none;
					}
					input::placeholder {
						color: lightgrey;
						font: sans-serif;
					}
					input[type="textbox"], input[type="password"] {
						width: 100%;
					}
					input[type="submit"] {
						background-color: LightCoral;
						float: right;
					}
					input[type="submit"]:hover {
						text-decoration: underline;
						cursor: pointer;
					}
				`}
				</style>
			</head>
			<body>
				<div class="center">
					<form method="post" action="/signin">
						<h1>Sign in</h1>
						<input type="textbox" placeholder="Username" name="username" />
						<input type="password" placeholder="Password" name="password" />
						<input type="submit" value="Sign in" />
						<a href="#"> Lost your password? </a>
					</form>
				</div>
			</body>
		</html>
	);
}
