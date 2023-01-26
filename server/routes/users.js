const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const userdb = require("../model/userdb");
const friends = require("../model/user");
const games = require("../model/game");
// const getModel = require("../model/usermsg");
// const { default: mongoose } = require("mongoose");

router.get('/',async(req,res) =>{
    try{
        const user = await friends.find();
        // console.log(user);
        res.send(user)
    }catch(err){
        res.send(err);
    }
});

router.get('/game',async(req,res) =>{
    try{
        let p1=req.body.p1;
        let p2=req.body.p2;
        if(p1>p2){
            let temp=p1;
            p1=p2;
            p2=temp;
        }
        const game = await games.findOne({player1:p1 , player2:p2});
        res.send(game);
    }catch(err){
        res.send(err);
    }
});

router.post('/game',async(req,res) =>{
    try{
        let p1=req.body.p1;
        let p2=req.body.p2;
        let arr=new Array(3);
        for(let i=0 ; i<3 ; i++){
            arr[i]=new Array(3);
        }
        for(let i=0 ; i<3 ; i++){
            for(let j=0 ; j<3 ; j++){
                arr[i][j]=""
            }
        }
        console.log(arr);
        const newgame= new games({
            player1:p1,
            player2:p2,
            turn:p1,
            result:"",
            game:arr
        })
        const a1=await newgame.save();
        res.send(a1);
    }catch(err){
        res.send(err);
    }
});

// router.put('/update',async(req,res) =>{
//     try{
//         let p1=req.body.p1;
//         let p2=req.body.p2;
//         if(p1>p2){
//             let temp=p1;
//             p1=p2;
//             p2=temp;
//         }
//         const game = await games.findOne({player1:p1 , player2:p2});
//         res.send(game);
//     }catch(err){
//         res.send(err);
//     }
// });

router.post('/message/append',async(req,res) =>{
    // try{
    //     const messagedb = mongoose.connection.db.collection(req.body.modelname);
    //     messagedb.insertOne({
    //         sender:req.body.sender,
    //         reciever:req.body.reciever,
    //         message:req.body.msg,
    //         time:req.body.time
    //     }).then(res.send(messagedb));
    // }catch(err){
    //     res.send(err);
    // }
});

router.post('/login',async(req,res) =>{
    // console.log(req.body);
    const user = await userdb.findOne({userid:req.body.username});
    if(user === null){
        res.send({status:false});
        return;
    }

    try{
        if(await bcrypt.compare(req.body.password,user.password)){
            res.send({status:true});
        }
        else{
            res.send({status:false});
        }
    }catch(err){
        res.send(err);
    }
});

router.post('/register',async(req,res) =>{
    const user = await friends.findOne({username:req.body.username , email:req.body.email});
    if(user !== null){
        res.send({status:false});
        return;
    }

    try{
        const hashedpassword = await bcrypt.hash(req.body.password,10);
        const newuser = new userdb({
            userid: req.body.username,
            email: req.body.email,
            name: req.body.name,
            password: hashedpassword
        });
        const newfriend = new friends({
            email:req.body.email,
            name:req.body.name
        })
        const a1 = await newuser.save();
        const a2 = await newfriend.save();
        res.send({status:true});
    }catch(err){
        res.send(err);
    }
});

module.exports = router;