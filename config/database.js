const mongoose= require ('mongoose');

// création du nom de la database

mongoose.connect ('mongodb://localhost/PEPITE',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
});

//shortcut to mongoose.Connection object

const db = mongoose.connection;
db.on ('connected',function(){
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});