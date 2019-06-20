exports.loginPageHandler = function(req,res){

console.log("***** Login Page Called ******");
req.session.destroy();
res.render('login.ejs',{}); // System automatically searches all ejs files in views folder.
}


exports.landingPageHandler = function(req,res){

    console.log("***** Landing Page Called With Parameters ******"+req.query.nm);
    // for GET requests, it will be req.query or req.params.
    // for POST requests, it will be req.body

    var person;
    if(req.session.userName){ // userName variable doesnt exist in system so exit from this if block
        console.log("username already in session, it is "+req.query.userName);
        person = req.session.userName;
    }else{

        person = req.query.nm;
        req.session.userName= person; // // userName variable is created in t he system and assigned a value
        console.log("userName doesnt exist in session, so storing in session store ");
       //  ["+ person +");
    }
    res.render('landingPage.ejs',{welcomeMessage: person.toUpperCase()}); // key: value pair is stored here and sent along with the page
}


exports.cityPageHandler = function(req,res){

        console.log("***** City Page Called ******");
        // for GET requests, it will be req.query or req.params.
        // for POST requests, it will be req.body

        var interestValue = req.body.interest;
        var cityNameValue , tagLineValue;
        console.log("***** interestValue******"+interestValue);

        if(interestValue == 'history'){
            cityNameValue = 'Rome';
            tagLineValue = 'City of Earliest Civilisation';

        }else if(interestValue == 'fashion'){
            cityNameValue = 'Paris';
            tagLineValue = 'fashion capital of the world';


        }if(interestValue == 'buisness'){
            cityNameValue = 'Newyork';
            tagLineValue = 'Buisness capital of the world';

        }

res.render('city.ejs',{cityName:cityNameValue,tagline:tagLineValue,person:req.session.userName.toUpperCase()});



}