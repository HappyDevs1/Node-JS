const mongoose = require("mongoose"),
 Subscriber = require("./models/subscriber");
mongoose.connect(
 "mongodb://localhost:27017/recipe_db",
 {useNewUrlParser: true}
);
mongoose.Promise = global.Promise;
Subscriber.create({
 name: "Jon",
 email: "jon@jonwexler.com",
 zipCode: "12345"
})
 .then(subscriber => console.log(subscriber))
 .catch(error => console.log(error.message));
var subscriber;
Subscriber.findOne({
 name: "Jon"
}).then(result => {
 subscriber = result;
 console.log(subscriber.getInfo());
});
.edior
Subscriber.create({
 name: "Jon",
 email: "jon@jonwexler.com",
 zipCode: "12345"
})
 .then(subscriber => console.log(subscriber))
 .catch(error => console.log(error.message));
var subscriber;
Subscriber.findOne({
 name: "Jon"
}).then(result => {
 subscriber = result;
 console.log(subscriber.getInfo());
});
Subscriber.create({
 name: "Jon2",
 email: "jon@jonwexler.com",
 zipCode: "12345"
})
 .then(subscriber => console.log(subscriber))
 .catch(error => console.log(error.message));
var subscriber;
Subscriber.findOne({
 name: "Jon2"
}).then(result => {
 subscriber = result;
 console.log(subscriber.getInfo());
});
Subscriber.create({
 name: "Jon2",
 email: "jon@jonwexler2.com",
 zipCode: "1234"
})
 .then(subscriber => console.log(subscriber))
 .catch(error => console.log(error.message));
var subscriber;
Subscriber.findOne({
 name: "Jon2"
}).then(result => {
 subscriber = result;
 console.log(subscriber.getInfo());
});
