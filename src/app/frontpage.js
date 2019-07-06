import {sls} from '../dom.js';
import { dom } from 'isomorphic-jsx';

//import '../css/main.scss';

/// #if FRONTEND
import { WiredButton, WiredInput } from "wired-elements"
/// #endif

export default function frontpage_page(req, res) {
	res.send(
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="main.css" />
				<script src="frontend.js"></script>
			</head>
			<body>
				<button class="btn">Button</button>
				<wired-input placeholder="Enter name"></wired-input>
				<wired-button>Click Me</wired-button>
			</body>
		</html>
	);
}
