$(document).ready(function () {


    // the global variable
    var watchList = [
        {
            "Title": "Inception",
            "Year": "2010",
            "Rated": "PG-13",
            "Released": "16 Jul 2010",
            "Runtime": "148 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Christopher Nolan",
            "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
            "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
            "Language": "English, Japanese, French",
            "Country": "USA, UK",
            "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.8",
            "imdbVotes": "1,446,708",
            "imdbID": "tt1375666",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Interstellar",
            "Year": "2014",
            "Rated": "PG-13",
            "Released": "07 Nov 2014",
            "Runtime": "169 min",
            "Genre": "Adventure, Drama, Sci-Fi",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan, Christopher Nolan",
            "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
            "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.6",
            "imdbVotes": "910,366",
            "imdbID": "tt0816692",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "The Dark Knight",
            "Year": "2008",
            "Rated": "PG-13",
            "Released": "18 Jul 2008",
            "Runtime": "152 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
            "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
            "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
            "Language": "English, Mandarin",
            "Country": "USA, UK",
            "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            "Metascore": "82",
            "imdbRating": "9.0",
            "imdbVotes": "1,652,832",
            "imdbID": "tt0468569",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Batman Begins",
            "Year": "2005",
            "Rated": "PG-13",
            "Released": "15 Jun 2005",
            "Runtime": "140 min",
            "Genre": "Action, Adventure",
            "Director": "Christopher Nolan",
            "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
            "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
            "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
            "Language": "English, Urdu, Mandarin",
            "Country": "USA, UK",
            "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
            "Metascore": "70",
            "imdbRating": "8.3",
            "imdbVotes": "972,584",
            "imdbID": "tt0372784",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Avatar",
            "Year": "2009",
            "Rated": "PG-13",
            "Released": "18 Dec 2009",
            "Runtime": "162 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "James Cameron",
            "Writer": "James Cameron",
            "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
            "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            "Language": "English, Spanish",
            "Country": "USA, UK",
            "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
            "Metascore": "83",
            "imdbRating": "7.9",
            "imdbVotes": "876,575",
            "imdbID": "tt0499549",
            "Type": "movie",
            "Response": "True"
        }
    ];

    // Add your code below this line

    var ratings = [];

    ratings = watchList.map(({ Title: title, imdbRating: rating }) =>
        ({ title, rating }))

    var ratings2 = [];

    ratings2 = watchList.map((item) =>
        ({ title: item.Title, rating: item.imdbRating }))


    // Add your code above this line

    // console.log(JSON.stringify(ratings));
    // console.log(JSON.stringify(ratings2));

    // the global Array



    var s = [23, 65, 98, 5];

    Array.prototype.myMap = function (callback) {
        var newArray = [];


        // console.log(this);

        return newArray;

    };

    var new_s = s.myMap(function (item) {
        return item * 2;
    });


    // the global variable
    var watchList = [
        {
            "Title": "Inception",
            "Year": "2010",
            "Rated": "PG-13",
            "Released": "16 Jul 2010",
            "Runtime": "148 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Christopher Nolan",
            "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
            "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
            "Language": "English, Japanese, French",
            "Country": "USA, UK",
            "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.8",
            "imdbVotes": "1,446,708",
            "imdbID": "tt1375666",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Interstellar",
            "Year": "2014",
            "Rated": "PG-13",
            "Released": "07 Nov 2014",
            "Runtime": "169 min",
            "Genre": "Adventure, Drama, Sci-Fi",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan, Christopher Nolan",
            "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
            "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.6",
            "imdbVotes": "910,366",
            "imdbID": "tt0816692",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "The Dark Knight",
            "Year": "2008",
            "Rated": "PG-13",
            "Released": "18 Jul 2008",
            "Runtime": "152 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
            "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
            "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
            "Language": "English, Mandarin",
            "Country": "USA, UK",
            "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            "Metascore": "82",
            "imdbRating": "9.0",
            "imdbVotes": "1,652,832",
            "imdbID": "tt0468569",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Batman Begins",
            "Year": "2005",
            "Rated": "PG-13",
            "Released": "15 Jun 2005",
            "Runtime": "140 min",
            "Genre": "Action, Adventure",
            "Director": "Christopher Nolan",
            "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
            "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
            "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
            "Language": "English, Urdu, Mandarin",
            "Country": "USA, UK",
            "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
            "Metascore": "70",
            "imdbRating": "8.3",
            "imdbVotes": "972,584",
            "imdbID": "tt0372784",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Avatar",
            "Year": "2009",
            "Rated": "PG-13",
            "Released": "18 Dec 2009",
            "Runtime": "162 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "James Cameron",
            "Writer": "James Cameron",
            "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
            "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            "Language": "English, Spanish",
            "Country": "USA, UK",
            "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
            "Metascore": "83",
            "imdbRating": "7.9",
            "imdbVotes": "876,575",
            "imdbID": "tt0499549",
            "Type": "movie",
            "Response": "True"
        }
    ];

    // Add your code below this line

    var filteredList;

    filteredList = watchList
        .filter(({ imdbRating: rating }) => (rating > 8))
        .map(({ Title: title, imdbRating: rating }) => ({ title, rating }))

    // Add your code above this line

    // console.log(filteredList);


    // the global Array
    var s = [23, 65, 98, 5];

    Array.prototype.myFilter = function (callback) {
        var newArray = [];
        // Add your code below this line

        // console.log(this);
        this.forEach(item => { if (callback(item)) newArray.push(item) })
        // console.log(newArray);

        // Add your code above this line
        return newArray;

    };

    var new_s = s.myFilter(function (item) {
        return item % 2 === 1;
    });



    function sliceArray(anim, beginSlice, endSlice) {
        // Add your code below this line

        let ret = anim.slice(beginSlice, endSlice)

        // console.log(ret);

        // console.log(anim.slice(endSlice).concat(anim.slice(0, beginSlice)));

        // Add your code above this line
    }

    var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    sliceArray(inputAnim, 1, 3);




    function nonMutatingSplice(cities) {
        // Add your code below this line
        // console.log(cities.slice(0, 3));

        return cities.slice(0, 3);

        // Add your code above this line
    }
    var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
    nonMutatingSplice(inputCities);






    // the global variable
    var watchList = [
        {
            "Title": "Inception",
            "Year": "2010",
            "Rated": "PG-13",
            "Released": "16 Jul 2010",
            "Runtime": "148 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Christopher Nolan",
            "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
            "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
            "Language": "English, Japanese, French",
            "Country": "USA, UK",
            "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.8",
            "imdbVotes": "1,446,708",
            "imdbID": "tt1375666",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Interstellar",
            "Year": "2014",
            "Rated": "PG-13",
            "Released": "07 Nov 2014",
            "Runtime": "169 min",
            "Genre": "Adventure, Drama, Sci-Fi",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan, Christopher Nolan",
            "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
            "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.6",
            "imdbVotes": "910,366",
            "imdbID": "tt0816692",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "The Dark Knight",
            "Year": "2008",
            "Rated": "PG-13",
            "Released": "18 Jul 2008",
            "Runtime": "152 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
            "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
            "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
            "Language": "English, Mandarin",
            "Country": "USA, UK",
            "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            "Metascore": "82",
            "imdbRating": "9.0",
            "imdbVotes": "1,652,832",
            "imdbID": "tt0468569",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Batman Begins",
            "Year": "2005",
            "Rated": "PG-13",
            "Released": "15 Jun 2005",
            "Runtime": "140 min",
            "Genre": "Action, Adventure",
            "Director": "Christopher Nolan",
            "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
            "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
            "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
            "Language": "English, Urdu, Mandarin",
            "Country": "USA, UK",
            "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
            "Metascore": "70",
            "imdbRating": "8.3",
            "imdbVotes": "972,584",
            "imdbID": "tt0372784",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Avatar",
            "Year": "2009",
            "Rated": "PG-13",
            "Released": "18 Dec 2009",
            "Runtime": "162 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "James Cameron",
            "Writer": "James Cameron",
            "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
            "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            "Language": "English, Spanish",
            "Country": "USA, UK",
            "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
            "Metascore": "83",
            "imdbRating": "7.9",
            "imdbVotes": "876,575",
            "imdbID": "tt0499549",
            "Type": "movie",
            "Response": "True"
        }
    ];

    function getRating(watchList) {
        // Add your code below this line
        var averageRating;
        var len = 0;

        averageRating = watchList.reduce((obj, { imdbRating: myrating, Director: mydirect }, index) => {
            if (mydirect == "Christopher Nolan") { obj = (parseFloat(myrating) + obj); len++ }
            return obj;
        }, 0) / len;

        // Add your code above this line
        return averageRating;

    }

    // console.log(getRating(watchList));

    const squareList = (arr) => {
        // only change code below this line

        let back = arr
            .filter(item => item % 1 == 0 && item > 0)
            .map(squared => squared * squared);

        let back2 = arr
            .reduce((sum, item) => {
                if (item % 1 == 0 && item > 0) sum.push(Math.pow(item, 2));
                // console.log(parseInt(item));
                return sum;
            }, [])

        // console.log(back2);

        return back;
        // only change code above this line
    };

    // test your code
    const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])
    // console.log(squaredIntegers);


    function reverseAlpha(arr) {
        return arr.sort(function (a, b) {
            return a === b ? 0 : a < b ? 1 : -1;
        });
    }

    //  console.log( reverseAlpha(['e', 'b', 'c', 'd', 'a']));
    //Returns['z', 's', 'l', 'h', 'b']


    var stringArray = ['Blue', 'Humpback', 'Beluga'];
    // console.log('stringArray:', stringArray.join());
    // console.log('Sorted:', stringArray.sort());




    function alphabeticalOrder(arr) {
        // Add your code below this line
        let ret = arr.sort();

        // console.log(ret);
        return ret;


        // Add your code above this line
    }
    alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);




    var globalArray = [5, 6, 3, 2, 9];

    function nonMutatingSort(arr) {
        // Add your code below this line
        let workArray = [...arr];

        // console.log(workArray.sort());

        return workArray;

        // Add your code above this line
    }
    nonMutatingSort(globalArray);


    function splitify(str) {
        // Add your code below this line

        // console.log(str.split(/\W/));


        // Add your code above this line
    }
    splitify("Hello World,I-am code");


    function sentensify(str) {
        // Add your code below this line
        // console.log(str.split());
        let r = str.split(/\W/).join(" ")
        // console.log(r);

        // Add your code above this line
    }
    sentensify("May-the-force-be-with-you");





    // the global variable
    var globalTitle = "Winter Is Coming";

    // Add your code below this line
    function urlSlug(title) {

        var retVal = title
            .toLowerCase()
            .trim()
            .split(/\W/)

        //.filter(item => item.length !=0)
        //.join('-');
        // console.log(('winter  is').trim());
        //console.log(retVal.filter(item => item.length !=0));
        // console.log(retVal);

    }
    // Add your code above this line
    var winterComing = urlSlug(" Winter Is  Coming") // Should be "winter-is-coming"

    function checkPositive(arr) {
        // Add your code below this line
        let isPos = arr.every(item => item > 0)
        // console.log(isPos);
        // Add your code above this line
    }
    //checkPositive([1, 2, 3, 4, 5]);

    function checkPositive(arr) {
        // Add your code below this line
        let ret = arr.some(item => item < 10);
        // console.log(ret);     
        // Add your code above this line
    }
    checkPositive([1, 2, 3, -4, 5]);




    function add(x) {

        return function (y) {
            return function (z) {
                return x + y + z
            }
        }




    }

    // console.log(add(10)(20)(30))//(20)(30));

    function sumAll(arr) {

        let to = Math.min(...arr);
        let from = Math.max(...arr);
        let val = 0;
        for (to; to <= from; to++) {
            val = val + to;
        }

        return val;
    }
    sumAll([4, 1]);




    function diffArray(arr1, arr2) {
        return arr1.concat(arr2).filter((item, index, self) => {
            return self.filter(x => x === item).length == 1
        })
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


    /*
    [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
    */


    function diffArray(arr1, arr2) {
        return arr1.concat(arr2).filter(
            item => !arr1.includes(item) || !arr2.includes(item)
        )

    }

    let r = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

    // console.log(r);




    function destroyer(arr) {

        //let param =  [...arguments].slice(1)

        var args = Array.prototype.slice.call(arguments);

        // console.log(args);

        // console.log([...arguments]);

        return arr.filter(item => ![...arguments].slice(1).includes(item))

    }


    destroyer([1, 2, 3, 1, 2, 3], 2, 3);



    // function whatIsInAName(collection, source) {
    //     var arr = [];
    //     // Only change code below this line

    //     arr = collection.filter(x => {

    //         let col = Object.entries(x);
    //         let src = Object.entries(source);

    //         let A = [];
    //         let B = [];

    //         col.map(x => A.push(x.join("")))
    //         src.map(x => B.push(x.join("")))

    //         return B.every(item => {
    //             return A.some(inA => { return inA === item })
    //         }
    //         )
    //     })
    //     // Only change code above this line
    //     return arr;
    // }

    function whatIsInAName(collection, source) {
        // "What's in a name? that which we call a rose
        // By any other name would smell as sweet.”
        // -- by William Shakespeare, Romeo and Juliet
        var srcKeys = Object.keys(source);


        return collection.filter(function (obj) {
            return srcKeys.every(function (key) {
                return obj.hasOwnProperty(key) && obj[key] === source[key];
            });
        });
    }

    whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })


    function spinalCase(str) {
        str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
        // console.log(str);
        let r = str.split(/\s|_+/g).join("-").toLowerCase();
        // console.log(r);
        // console.log(r.join(""));
        return str;
    }
    spinalCase('This Is_Spinal_Tap');




    function translatePigLatin(str) {

        const vowel = ['e', 'u', 'i', 'o', 'a'];

        let str2 = str.split("");
        let result;
        const len = str.length-1;


        if (vowel.some(item => str2[0] === item)) {
           
            str2.splice(str.length, 0, 'way');

        } else {
        
            // str2.push( str2.shift() );       
            str2.splice(str.length, 0, 'ay');
            // 
        }
        result = str2.join("")
        console.log(result);


        return str;
    }



    translatePigLatin("rhythm");















});