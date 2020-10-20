const Joi = require('joi');
const express = require('express');
const { response } = require('express');
const app = express();

const courses = [
    {
        id: 1,
        name: 'Data Structure'
    },
    {
        id: 2,
        name: 'Algorithm Designing'
    },
    {
        id: 3,
        name: 'Theory of Computation'
    }
];

app.use(express.json());


app.get('/api/courses', (req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req,res) => {
    const id = req.params.id;
    if (!id) return res.status(400).send('ID is mandatory field');
    const course = courses.find(c => c.id === parseInt(id));
    if (!course) return res.status(404).send('requested course not found');
    return res.send(course);
})

app.post('/api/courses', (req,res) => {
    const course = req.body;
    const isValidBOdy = validateRequestData(course);
    if (isValidBOdy.error) return res.status(400).send(isValidBOdy.error.details[0].message);    
    const cousrseWithId = {
        id: courses.length + 1,
        name: course.name
    };
    courses.push(cousrseWithId);
    return res.send(courses);
});

app.put('/api/courses/:id', (req,res) => {
    const id = req.params.id;
    if (!id) return res.status(400).send('Id is mandatory to update course');
    
    const body = req.body;

    const course = courses.find(c => c.id === parseInt(id));
    if (!course) return res.status(404).send('Requested course not found');

    const isValidBody = validateRequestData(body);
    if (isValidBody.error) return res.status(400).send(isValidBOdy.error.details[0].message);    

    course.name = body.name;
    return res.send(course);
})

app.delete('/api/courses/:id', (req,res) => {
    const id = req.params.id;
    if (!id) return res.status(400).send('Id is mandatory to update course');

    const index = courses.findIndex(c => c.id === parseInt(id));
    if (index < 0) return res.status(404).send('course not found');

    courses.splice(index, 1);
    return res.send(courses);

})

function validateRequestData(data) {
    const schema = Joi.object({ name: Joi.string().min(3).required() })
    return schema.validate(data);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Sever is listening on port: ${port}`));