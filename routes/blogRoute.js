const express = require('express');
const router = express.Router();
const blogController = require('../Controller/blogController')

// router.get('/add-blog', (req, res) => {
//     const blog = new Blog({ 
//         title: 'new blog2', 
//         snippet: 'about m new blog', 
//         body: 'more about my new blog'
//     })
//     blog.save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err))
// })

// router.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err))
// })

// router.get('/single-blog', (req, res) => {
//     Blog.findById('6247cb3f0b5af07b2aed1e6e')
//         .then((result) => res.send(result))
//         .catch((err) => console.log(err))
// })

router.get('/', blogController.blog_index)
router.post('/', blogController.blog_create_post)
router.get('/create', blogController.blog_create_get)
router.get('/:id', blogController.blog_details)
router.delete('/:id', blogController.blog_create_delete)

module.exports = router;