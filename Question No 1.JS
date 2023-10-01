//Answer a)
class Movie {
    constructor(tittle,studio,rating) {
        this.title;
        this.studio;
        this.rating;
    }
}

let movie1 = new Movie("Inception","Warner Bros.","PG-13");
let movie2 = new Movie("The Dark Knight", "Warner Bros.","PG-13");
 
console.log(movie1.title);
console.log(movie2.rating)

//Answer b)
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  
  const movie1 = new Movie("The Matrix", "Warner Bros", "R");
  const movie2 = new Movie("Toy Story", "Pixar");
  
  console.log(movie1); 
  console.log(movie2); 

  //Answer c)
  class Movie {
    constructor(title,studio,rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movies) {
        return movies.filter(Movie => movie1.rating ==="PG");
    }
  }

  const MOVIES = [
    new Movie("Spider3", "AVM STUDIO", "PG"),
    new Movie("Avengers", "MARS", "R"),
    new Movie("Iron man", "AR STUDIO", "PG"),
    new Movie("Dr strange", "AWC", "PG-13"),
  ];

  const pgMovies =  MOVIES.getPG(movies);
  console.log(pgMovies);

  //Answer d)class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log(casinoRoyale.title); 
console.log(casinoRoyale.studio); 
console.log(casinoRoyale.rating); 
