// const Math = require('./Math');
// //simport * as Math from './Math';
console.log("JS loaded")

function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="https://api.thecatapi.com/v1/images/search?format=src&type=gif&size=small";
    div.appendChild(image);
}



// MAP FUNCTION
console.log("Map function")
var map=[1,2,3,4,5].map(function(n){
    console.log(n);
    return n*2;
});

console.log(map);


//Filter Function
console.log("Filter function")
var filter=[1,2,3,4,5].filter(function(n){
    console.log(n);
    return n%2==0;
})

console.log(filter)


//Reduce functiom
console.log("reduce function")
var reduce=[1,2,3,4,5].reduce(function(accumulator,current){
    console.log(current);
    console.log(accumulator);
    return accumulator+current;
});
console.log(reduce);



//Callback function
console.log("callback funct");

var callback=function(name){
    return "Hello "+name;
}

function callbackExample(name,callback){
    console.log(callback(name));
}

callbackExample("Rick",callback);



// console.log(Math.add(2,2));
// console.log(Math.subtract(2,2));
// console.log(Math.multiply(2,2));
// console.log(Math.divide(2,2));
// console.log(Math.PI);


const posts=[
    {title:'Post one',body:'This is post one'},
    {title:'Post two',body:'This is post two'}
];


function getPosts(){
    setTimeout(() => {
        let output="";
        posts.forEach((post,index)=>{
            output=`its ${post.title} and its written ${post.body}`;
            console.log(output);

        });
        // the function prints after 5000ms
    }, 1000);

}

function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
    }, 1000);
}

getPosts();

createPost({title:'Post three',body:'This is post3'},getPosts);

getPosts();