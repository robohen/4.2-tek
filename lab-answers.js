//Easy Going//
// for(let i = 0; i <= 20; i++){
//     console.log(i);
// }
//
//Get Even//
// for(let i = 0; i <= 200; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }
//
//Fizz Buzz//
// for(let i = 1; i <= 100; i++){
//     if (i % 3 ===0 && i % 5===0){
//         console.log("FizzBuzz");
//     }else if (i % 3 ===0){
//         console.log("Fizz");
// }
//     else if (i % 5 ===0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }
//
// Wild Wild Life//
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = 5001;
// console.log(plantee);
// wolfy[3] = "Gotham City";
// console.log(wolfy);
// dart.push("Hawkins");
// console.log(dart);
// wolfy[0] = "Gameboy";
// console.log(wolfy);
//
//Yell at the Ninja Turtles//
// const array =["Donatello", "Michaelangelo","Rafael", "Leonardo"];
// for (const element of array){
//     console.log(element.toUpperCase());
// }
//
//Methods revisted //
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// favMovies.sort();
// console.log(favMovies);
// //does alter the original array
// favMovies.pop();
// favMovies.push("Guardians of the Galaxy");
// favMovies.reverse();
// favMovies.shift();
// favMovies.unshift();
// favMovies.splice(1,3, "Avatar");
// // does permanently alter the original array
// var lastHalf = favMovies.slice(-Math.floor(favMovies.length / 2));
// console.log(lastHalf);
// // no this does not alter the original array just spits out a new array containing the last half of the array
// console.log(favMovies.indexOf("Fast and Furious"));
// outputs -1
// const just makes the variable unreassignable but the contents of the array can be modified
//
//Where is Waldo //
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                       ["Lucinda", "Jacc", "Neff", "Snoop"],
//                       ["Petunia", ["Baked Goods", "Waldo"]]];
//  whereIsWaldo.splice(1,1);
//  console.log(whereIsWaldo);
//  whereIsWaldo.splice(2,1, ["Lucinda", "Jacc", "No One", "Snoop"]);   
//  console.log(whereIsWaldo);
// console.log(whereIsWaldo[3][1][1]);                  
//
//Excited Kitten//
// let kittens = " ";
// for (let i = 0; i < 20; i++){
//     const lines = ["...human... why you taking pictures of me...?", "...the catnip made me do it...", "...why does the red dot always get away...?" ];
//     const randomLines = Math.floor(Math.random() * 3);
    
//     if(i % 2 === 0)
//     {console.log("Love me, pet me! HSSSSSS!")
//     }
//     else
//     {console.log(lines[randomLines])}
    
// }
//
//Find the Median//
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort((a, b) => a - b)

//declare median variable
let median;

//if else block to check for even or odd
if(nums.length%2 != 0){
    //odd case
    //find middle index
    let middleIndex = Math.floor(nums.length/2)
    //find median
    median = nums[middleIndex]
}else{
    //even case
    //find middle index
    let middleIndex = Math.floor(nums.length/2)
    //find median
    median = (nums[middleIndex] + nums[middleIndex - 1])/2
}
console.log(median);
//