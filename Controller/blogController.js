const Blog = require('../model/blog');

const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('index', { title: 'All Blogs', blogs: result})
    })
}

const blog_details = (req, res) => {
    // const id = req.params.id;
    // Blog.findById(id)
    // .then((result) => {
    //     res.render('detail', { title: 'Blog Detail', blog: result })
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
    Blog.findById(req.params.id, function(err, blog){
            if(err){
                res.render('err', {title: 'Error'})
            } else{
                res.render("detail", {title: 'Blog Detail', blog });
            }
        })
}

const blog_create_get = (req, res) => {
    res.render('create', { title: "Create New Blog" });
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err)
    })
}

const blog_create_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect: '/blogs'})
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_create_delete
}