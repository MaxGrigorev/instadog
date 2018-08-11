let express = require('express');
let DogsModel = require('../models/dogs');
var bodyParser = require ('body-parser');

var multer  = require('multer')
var upload = multer({ dest: 'dist/uploads/' })
let mongoose = require('mongoose');

let router = express.Router();

router.use(bodyParser.json());

//Получение постов
router.get('/', function (req, res, next) {

    DogsModel.find({}, function (err, dogs) {
        //Если ошибка
        if(err){
            return next(err);
        }
        //Если посты получены
        res.json(dogs);
    });
});

//Добавление поста в БД

//http://localhost:8082/api/dogs/add?breed=der&img=img

//Если используется post, то вместо router.get(); необходимо использовать router.post();
// router.post('/add', function (req, res, next) {
//     //console.log(req.query);
//     let breed = req.body.breed;
//     let img = req.body.img;
//     //TODO: получить body и выполнить сохранение модели
//     //http://mongoosejs.com/docs/models.html

// 	var small = new DogsModel({ breed: breed, img:img });
// 	small.save(function (err) {
// 	  if (err) return handleError(err);
// 	  // saved!
// 	});

//     res.json({status: "ok", breed, img});
// });

router.post('/add', function (req, res, next) {
    //console.log(req.query);
    let breed = req.body.breed;
    let img = req.body.img;
    
    //TODO: получить body и выполнить сохранение модели
    //http://mongoosejs.com/docs/models.html

	var small = new DogsModel({ breed: breed, img:img});
	small.save(function (err) {
	  if (err) return handleError(err);
	  // saved!
	});

    res.json({status: "ok", breed, img});
});

router.post('/like', function (req, res, next) {
    //console.log(req.query);
    let id = req.body.id;
    //TODO: получить body и выполнить сохранение модели
    //http://mongoosejs.com/docs/models.html
    console.log('do    ',id);
    // var conditions = { _id: id }
    // , update = { like: 1 }

    // Model.update(conditions, update, {}, callback)

	//var small = new DogsModel({ breed: breed, img:img });
	// small.save(function (err) {
	//   if (err) return handleError(err);
	//   // saved!
    // });
    DogsModel.findByIdAndUpdate(id, {$inc:{like: 1}}, function(err, user){
     
            //mongoose.disconnect();
            if(err) return console.log(err);
            console.log("Обновленный объект", user);
        });

        console.log('after   ',id);

    DogsModel.find({}, function (err, dogs) {
        //Если ошибка
        if(err){
            return next(err);
        }
        //Если посты получены

        console.log(dogs);
        res.json(dogs);
    });
});

router.post('/single', upload.single('photo'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.body)
    console.log(req.file)
    res.status(201).send('success')
  })

router.post('/array', upload.array('photos', 12), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
    console.log(req.body)
    console.log(req.files[0].filename)

    let breed = req.files[0].originalname;
    let img = req.files[0].filename;
    let like=0;

    var small = new DogsModel({ breed: breed, img:  img,like:like});
	small.save(function (err) {
	  if (err) return handleError(err);
	  // saved!
	});

    res.status(201).send('success')
  })

module.exports = router;
