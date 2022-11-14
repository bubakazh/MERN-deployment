const { mongoose } = require("mongoose");

mongoose.connect('mongodb://localhost/pirates_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('データベースに接続完成。'))
    .catch(err => console.log('Something went wrong'))