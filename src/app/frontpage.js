import dom, {sls} from '../dom.js';
require('../css/main.scss');

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
