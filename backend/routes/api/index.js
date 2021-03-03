const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const spotsRouter = require('./spots'); 

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotsRouter);



module.exports = router;



//THESE ARE TEST ROUTES THAT YOU RAN FOR TOKENS AND SESSIONS
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth');
// const { User } = require('../../db/models');

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         },
//     })

//     setTokenCookie(res, user);
//     return res.json({ user })
// }))  // this route sets the cookie and the restore route checks
// that the cookie is still there

// const { restoreUser } = require('../../utils/auth');
// router.get('/restore-user', restoreUser, (req, res) => {
//     return res.json(req.user);
// })

// const { requireAuth } = require('../../utils/auth');
// router.get('/require-auth', requireAuth, (req, res) => {
//     return res.json(req.user);
// })

// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body})
// })
