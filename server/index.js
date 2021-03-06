import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from '../server/routes/posts.js'


const app = express();
app.use('/posts',postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://saif:123@cluster0.dhqnr.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3001;

mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT} `))).catch((err) => console.log(err));

// mongoose.set('useFindAndModify', false);