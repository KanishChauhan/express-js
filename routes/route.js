const express=require('express')
// const { allowedNodeEnvironmentFlags } = require('process')
// const app=express()
const path=require('path')
const blogs=require('../blogs/blogs.js')
const router=express.Router()

// router.route('/ab*cd').get((req, res) => {
//     res.sendFile(path.join(__dirname, '../template/index.html'))
// })
// console.log(blogs)

router.route('/').get((req, res) => {
    // res.sendFile(path.join(__dirname, '../template/index.html'))
    res.render('home')
    // res.render('home',{layout:false})
})

// router.route('/index').get((req, res) => {
//     // res.sendFile(path.join(__dirname, '../template/index.html'))
//     res.render('index')
//     // res.render('home',{layout:false})
// })

router.route('/blog/:slug').get((req, res) => {

    const blog=blogs.filter((e)=>{return e.rollno==req.params.slug})
//   console.log(bl)
res.render('blog',{blog:blog})
    // res.sendFile(path.join(__dirname, '../template/index.html'))

})

module.exports=router