import express from 'express';
import { studentData } from './data/student.js'
 
const app = express();

app.use(express.static('public'));
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/student', (req, res) => {
  res.json(studentData);
});
 
app.listen(3000, () => {
  console.log('App running on port 3000');
});
 