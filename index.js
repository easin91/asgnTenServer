const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/Categories.json');
const course = require('./Data/news.json');
const checkOut = require('./Data/news.json');

app.get('/', (req, res) => {
    res.send('Course API Running');
});
app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(course);
    }
    else {
        const course_category = course.filter(n => n.category_id === id);
        res.send(course_category);
    }
})

app.get('/course', (req, res) => {
    res.send(course);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(n => n._id === id);
    res.send(selectedCourse);
});

app.get('/checkOut', (req, res) => {
    res.send(checkOut);
});

app.get('/checkOut/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourseCheckOut = checkOut.find(n => n._id === id);
    res.send(selectedCourseCheckOut);
});

app.listen(port, () => {
    console.log('Programming course Server running on port', port);
})