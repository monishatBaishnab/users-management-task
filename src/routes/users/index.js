const router = require('express').Router();
const User = require('../../models/users');

router.get('/users', async (req, res, next) => {
    try {
        const result = await User.find();
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.get('/users/:id', async (req, res, next) => {
    try {
        const userId = req.params.id;
        const result = await User.findOne({ _id: userId });
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.put('/users/:id', async (req, res, next) => {
    try {
        const taskId = req.params.id;
        const data = req.body;
        const findTask = await User.findById({ _id: taskId });

        if (findTask.status === 'pending') {
            const result = await User.updateOne({ _id: taskId }, { $set: { ...data } });
            res.send(result);
            return;
        }
        res.send("Already Complated.");
    } catch (error) {
        next(error);
    }
})

router.delete('/users/:id', async (req, res, next) => {
    try {
        const taskId = req.params.id;
        const result = await User.deleteOne({ _id: taskId });
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.post('/login',async (req, res, next) => {
    try {
        const user = req.body;
        const findUser = await User.findOne({email: user.email});

        if(user.password === findUser.password && user.email === findUser.email){
            res.send({success: true})
        }
        res.send({success: false});
    } catch (error) {
        next(error);
    }
})

router.post('/regester',async (req, res, next) => {
    try {
        const data = new User(req.body);
        await data.save();
        res.send({success: true});
    } catch (error) {
        next(error);
    }
})

module.exports = router;