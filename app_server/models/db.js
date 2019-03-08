var mongoose = require('mongoose');
var readLine = require('readline');

    

var dbURI = 'mongodb://localhost/ToorDhaba';
if(process.env.NODE_ENV==='production'){
dbURI = 'mongodb://heroku_dz6m9zzx:heiicmcklpv2nj280bvkpjgr12@ds163255.mlab.com:63255/heroku_dz6m9zzx';

}


mongoose.connect(dbURI,{useNewUrlParser: true});


mongoose.connection.on('connected', function(){

    console.log('Mongoose connected to '+dbURI)
})

mongoose.connection.on('error',function(error){
console.log('Mongoose connection error: '+error)

})

mongoose.connection.on('disconnected',function(){

    console.log('Mongoose disconnected');
});


if(process.platform=="win32"){
    var r1 = readLine.createInterface({ 
        input: process.stdin,
        output:process.stdout
    });

    r1.on('SIGINT', function(){
        process.emit('SIGINT');
    });

    }


var gracefulShutdown = function(msg, callback){

    mongoose.connection.close(function(){
       console.log('Mongoose disconnected through '+msg);
       callback();
        
    });

}
//For nodemon restarts
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
    
    });
    
});

//For app termination
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
    process.exit(0);

    });

});


//for Heroku app termination
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);

    });
});    


require('./foodItems');
