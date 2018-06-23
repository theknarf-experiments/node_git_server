import dom, {sls} from '../dom.js';
require('../css/main.scss');
import Hello from './test.md'

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
				<Hello />
			</body>
		</html>
	);
}
