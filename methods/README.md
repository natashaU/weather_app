# Holy Methods, Batman!

![batman](./assets/batman.gif)

We've been learning about:
- Using third-party APIs
- Making GET requests in Postman
- Parsing through big blocks of data (using array methods and object manipulation)
- Using array methods to add information to the DOM

Let's fuse all of those skills above into tonight's hw using a free movie API called OMDB!

### Setting up!

1. Check out <a href="http://www.omdbapi.com/">OMDB</a> to get used to reading API documentation.
2. Take this link `http://www.omdbapi.com/?s=batman&y=&plot=full&r=json` (from the OMDB docs) and make a `GET` request in Postman, to get Batman movies in OMDB's database!
3. See that beautiful data (AKA JSON Object)? Copy and paste that info into `/src/main.js` in the `response` object.
4. Now jump into the questions below using the `response` object data.

### Part One: Object Basics

1. Set the `TotalResults` number to a variable.

### Part Two: Map
As you may already know, the `.map()` method will take an array and return a new, modified version of it.

Now use [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to complete the following problems.

1. Grab all the Movie titles. Store that info in a new array using map.
2. Grab all of the Poster image urls. Store that info in a new array using map.
3. Now grab the Movie and Poster data at the same time using map and render that data in the browser (AKA use the DOM).

### Part Three: Filter
Remember `.filter()` takes an array and returns a new array of the elements that pass a boolean test. See below for an example:

``` js
var animals = [
  {
    "name": "Fluffykins",
    "species": "cat"
  },
  {
    "name": "Hamilton",
    "species": "dog"
  },
  {
    "name": "Shadow",
    "species": "dog"
  },
  {
    "name": "Sassy",
    "species": "cat"
  }
];

var dogs = animals.filter(function(animal){
  if (animal.species === "dog") {
    return animal;
  }
});

console.log(dogs);
  => [
       {
          "name": "Hamilton",
          "species": "dog"
        },
        {
          "name": "Shadow",
          "species": "dog"
        }
      ]
```
Now use [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to complete the following problems:

1. Using `map` create a new array named `movieTitleList` that contains all of the movie titles.
2. Then create an HTML input, that allows users to type in a title.
3. On click, run the title typed in against the `movieTitleList` array to see if it's in there (using `.filter()`).
4. If the movie title is there, alert the user saying 'heck yes it's in there', otherwise alert, 'no dice. sorry, try again'

### Part 4: Reduce
`.reduce()` is a kind of Swiss Army Knife for arrays. One of its best uses is adding up elements. It takes a callback function with two arguments, the first we can call `sum`. We can add each item of the array to the sum. The second argument is current, which is each element in the array as we iterate through it.

Example:
```js
var numbers = [0, 1, 2, 3];
var total = numbers.reduce(function(sum, current) {
  return sum += current;
});

console.log(total);
  => 6
```
Now use [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) to complete the next two problems:

1. Using `reduce()`, iterate over `response` and concatenate all the imdbIDs together, saving this string to a variable called `rambleOfImdbIDs`. Console log this.

#### Bonus: Let's combine some of these methods.

  - Take the `response` object and use `.map()` to add a new attribute `rating` to each object of Search array. Make every rating somehow different.

 - Use `.reduce()` to manipulate the newly created array (from the previous step). Add up all ratings that are greater than 3. Assign the result to a new variable.