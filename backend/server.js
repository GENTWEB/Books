const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const PORT = 4000;
const bookroutes = express.Router();

app.use('/model/books.js', bookroutes);
app.use(cors());
app.use(bodyParser.json());

const app = express();
const router = express.Router();

router.use(express.urlencoded( { extended: false}));
router.use(express.json());
router.use(logger("dev"));


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/27017";
const connection = mongoose.connect(MONGODB_URI, {useNewUrlParser: false });


router.get("/pop", (req, res) => {
    const giphy = {
        baseURL: "https://api.giphy.com/v1/gifs/",
        key: "&api_key=r5zJ6IQVZrTVcmo4vNJxx0r3FnDMqrPW",
        tag: "q=archer",
        type: "search?",
        limit: "&limit=15"
        };
        axios
            .get(giphy.baseURL+giphy.type+giphy.tag+giphy.key+giphy.limit)
            .then(function(response){
                // console.log(response.data.data[0])

                for( i=0; response.data.data.length; i++){
                    result = {
                        id: "",
                        url: ""
                    };

                    result.id=response.data.data[i].id
                    result.url=response.data.data[i].images.fixed_width.url;
                    
                    db.create(result) 
                        .then(function(dbgif){
                            console.log(dbgif);
                        })
                        .catch(function(err){
                            console.log(err)
                        });
                    }
                    console.log(result)
            })
            .catch(error => console.log(error));
});


connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

bookroutes.route('/').get(function(req, res) {
    Books.find(function(err, books) {
        if (err) {
            console.log(err);
        } else {
            res.json(books);
        }
    });
});

bookRoutes.route('/search/:id').get(function(req, res) {
    let id = req.params.id;
    Books.findById(id, function(err, book) {
        res.json(book);
    });
});

bookroutes.route('/add').post(function(req, res) {
    let book = new Book(req.body);
    book.save()
        .then(book => {
            res.status(200).json({'book': 'book added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new book failed');
        });
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});