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

router.post(
	'/signin', 
	passport.authenticate('local', { failureRedirect: '/' }),
	(req, res) => { res.redirect('/frontpage'); }
);

export default router;
