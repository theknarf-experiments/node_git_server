import express from 'express';
import { signin_frontpage } from './signin';
import frontpage from './frontpage';
import bodyParser from 'body-parser';
import dom from '../dom';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

let router = express.Router();
router.get('/', signin_frontpage);
router.get('/frontpage', frontpage);

router.get('/success', (req, res) => {
	res.send(<b> Success </b>);
});

export default router;
