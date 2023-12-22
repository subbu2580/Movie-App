import { useState } from "react";
import styles from "./Homepage.module.css"; 
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
const HomePage = () => {
  const [movies, setMovies] = useState([
    {
      movieName: "Inception",
      year: 2010,
      releaseDate: "July 8, 2010",
      image: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      description: "A thief enters the dreams of others to steal their deepest secrets.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/YoHD9XEInc0"
    },
    {
      movieName: "The Shawshank Redemption",
      year: 1994,
      releaseDate: "September 23, 1994",
      image: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF1000,1000_QL80_.jpg",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/PLl99DlL6b4?si=ZuEzneYTQcCD1f-b"
    },
    {
      movieName: "The Dark Knight",
      year: 2008,
      releaseDate: "July 18, 2008",
      image: "https://picfiles.alphacoders.com/360/thumb-360100.jpg",
      description: "Batman faces a new adversary, The Joker, who seeks to create chaos in Gotham City.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/EXeTwQWrcwY?si=LZOCo-PYnVBz0fnu"
    },
    {
      movieName: "Pulp Fiction",
      year: 1994,
      releaseDate: "October 14, 1994",
      image: "https://www.miramax.com/assets/Pulp-Fiction1.png",
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/s7EdQ4FqbhY?si=UhkUwboYI-EPlHOc"
    },
    {
      movieName: "Forrest Gump",
      year: 1994,
      releaseDate: "July 6, 1994",
      image: "https://m.media-amazon.com/images/I/717C4+q+CrL.jpg",
      description: "The life journey of a man with low intelligence, who witnesses and unwittingly influences several defining historical events in the 20th century.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/XHhAG-YLdk8?si=ESmR3tneQn96m_Be"
    },
    {
      movieName: "The Matrix",
      year: 1999,
      releaseDate: "March 31, 1999",
      image: "https://c4.wallpaperflare.com/wallpaper/614/687/784/movies-matrix-movie-poster-poster-the-matrix-resurrections-hd-wallpaper-preview.jpg",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/vKQi3bBA1y8?si=aYpydJ-pqpqPcnT2"
    },
    {
      movieName: "The Godfather",
      year: 1972,
      releaseDate: "March 24, 1972",
      image: "https://www.koimoi.com/wp-content/new-galleries/2022/01/limited-re-release-to-mark-the-godfather-50th-anniversary-001.jpg",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/UaVTIH8mujA?si=n9aOVd76CW179nFW"
    },
    {
      movieName: "Schindler's List",
      year: 1993,
      releaseDate: "December 15, 1993",
      image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/gG22XNhtnoY?si=deq2AYa7gYSUnjCU"
    },
    {
      movieName: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      releaseDate: "December 19, 2001",
      image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      description: "A young hobbit, Frodo Baggins, embarks on a perilous journey to destroy the One Ring and save Middle-earth from the Dark Lord Sauron.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/V75dMMIW2B4?si=xxoRl5nzQCbzVr07"
    },
    {
      movieName: "Fight Club",
      year: 1999,
      releaseDate: "October 15, 1999",
      image: "https://m.media-amazon.com/images/M/MV5BODQ0OWJiMzktYjNlYi00MzcwLThlZWMtMzRkYTY4ZDgxNzgxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/BdJKm16Co6M?si=GA30aXtW7JcjnZ29"
    },
    {
      movieName: "Goodfellas",
      year: 1990,
      releaseDate: "September 19, 1990",
      image: "https://m.media-amazon.com/images/M/MV5BYjllYzEzZDUtMmUxMi00MjEwLWFiYTQtNTg5OWY1MTlhYjI0XkEyXkFqcGdeQW1pYnJ5YW50._V1_.jpg",
      description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/2ilzidi_J8Q?si=vL80pJeqlC6bl_Of"

    },
    {
      movieName: "The Silence of the Lambs",
      year: 1991,
      releaseDate: "February 14, 1991",
      image: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/6iB21hsprAQ?si=-od-N3Wq4DLMaWH_"
    },
    {
      movieName: "The Usual Suspects",
      year: 1995,
      releaseDate: "July 19, 1995",
      image: "https://rukminim2.flixcart.com/image/850/1000/l071d3k0/poster/d/r/9/medium-inglourious-basterds-poster-on-fine-art-paper-13x19-original-imagcfejv7y3g9a3.jpeg?q=90",
      description: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/oiXdPolca5w?si=3pCHyUajBdlh6x0a"
    },
    {
      movieName: "Inglourious Basterds",
      year: 2009,
      releaseDate: "August 21, 2009",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaElUF161aEeyDmxPx7PhvZcQS_qlDDJlSTUioo4E&s",
      description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/KnrRy6kSFF0?si=jsUBlHPAm4CffImP"
    },
    {
      movieName: "The Departed",
      year: 2006,
      releaseDate: "October 6, 2006",
      image: "https://m.media-amazon.com/images/I/71XlLHgkLFL._AC_UF1000,1000_QL80_.jpg",
      description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/iojhqm0JTW4?si=QVD2lUOtRq3nz3FJ"

    },
    {
      movieName: "The Social Network",
      year: 2010,
      releaseDate: "October 1, 2010",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*AGuIdqTVnRfTYLcEsByBFQ.jpeg",
      description: "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook but is later sued by two brothers who claimed he stole their idea.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/lB95KLmpLR4?si=Ji1gvF2BrR_FWxKW"
    },
    {
      movieName: "The Pianist",
      year: 2002,
      releaseDate: "September 6, 2002",
      image: "https://images.moviesanywhere.com/83be0db16d401bf62ecab4c4f8568a4b/a4d71c78-9856-49ef-abd3-db245d6b484f.jpg",
      description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto during World War II.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/BFwGqLa_oAo?si=FySk5oy_YSJS_SKI"
    },
    {
      movieName: "Avatar",
      year: 2009,
      releaseDate: "December 18, 2009",
      image: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
      description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting an alien civilization.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/5PSNL1qE6VY?si=e1slrDSu0x79YtIA"
    },
    {
      movieName: "The Green Mile",
      year: 1999,
      releaseDate: "December 10, 1999",
      image: "https://images.moviesanywhere.com/3875280af5270deacfc628d591b89847/ac6a8771-3fca-41a0-9be2-be20a14b983a.jpg",
      description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/Ki4haFrqSrw?si=86mrjSWb6VjIDegg"
    },
    {
      movieName: "Inception",
      year: 2010,
      releaseDate: "July 8, 2010",
      image: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
      description: "A thief enters the dreams of others to steal their deepest secrets.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/YoHD9XEInc0"
    },
    {
      movieName: "The Shawshank Redemption",
      year: 1994,
      releaseDate: "September 23, 1994",
      image: "https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_UF1000,1000_QL80_.jpg",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/PLl99DlL6b4?si=ZuEzneYTQcCD1f-b"
    },
    {
      movieName: "The Dark Knight",
      year: 2008,
      releaseDate: "July 18, 2008",
      image: "https://picfiles.alphacoders.com/360/thumb-360100.jpg",
      description: "Batman faces a new adversary, The Joker, who seeks to create chaos in Gotham City.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/EXeTwQWrcwY?si=LZOCo-PYnVBz0fnu"
    },
    {
      movieName: "Pulp Fiction",
      year: 1994,
      releaseDate: "October 14, 1994",
      image: "https://www.miramax.com/assets/Pulp-Fiction1.png",
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/s7EdQ4FqbhY?si=UhkUwboYI-EPlHOc"
    },
    {
      movieName: "Forrest Gump",
      year: 1994,
      releaseDate: "July 6, 1994",
      image: "https://m.media-amazon.com/images/I/717C4+q+CrL.jpg",
      description: "The life journey of a man with low intelligence, who witnesses and unwittingly influences several defining historical events in the 20th century.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/XHhAG-YLdk8?si=ESmR3tneQn96m_Be"
    },
    {
      movieName: "The Matrix",
      year: 1999,
      releaseDate: "March 31, 1999",
      image: "https://c4.wallpaperflare.com/wallpaper/614/687/784/movies-matrix-movie-poster-poster-the-matrix-resurrections-hd-wallpaper-preview.jpg",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/vKQi3bBA1y8?si=aYpydJ-pqpqPcnT2"
    },
    {
      movieName: "The Godfather",
      year: 1972,
      releaseDate: "March 24, 1972",
      image: "https://www.koimoi.com/wp-content/new-galleries/2022/01/limited-re-release-to-mark-the-godfather-50th-anniversary-001.jpg",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/UaVTIH8mujA?si=n9aOVd76CW179nFW"
    },
    {
      movieName: "Schindler's List",
      year: 1993,
      releaseDate: "December 15, 1993",
      image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/gG22XNhtnoY?si=deq2AYa7gYSUnjCU"
    },
    {
      movieName: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      releaseDate: "December 19, 2001",
      image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      description: "A young hobbit, Frodo Baggins, embarks on a perilous journey to destroy the One Ring and save Middle-earth from the Dark Lord Sauron.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/V75dMMIW2B4?si=xxoRl5nzQCbzVr07"
    },
    {
      movieName: "Fight Club",
      year: 1999,
      releaseDate: "October 15, 1999",
      image: "https://m.media-amazon.com/images/M/MV5BODQ0OWJiMzktYjNlYi00MzcwLThlZWMtMzRkYTY4ZDgxNzgxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into much more.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/BdJKm16Co6M?si=GA30aXtW7JcjnZ29"
    },
    {
      movieName: "Goodfellas",
      year: 1990,
      releaseDate: "September 19, 1990",
      image: "https://m.media-amazon.com/images/M/MV5BYjllYzEzZDUtMmUxMi00MjEwLWFiYTQtNTg5OWY1MTlhYjI0XkEyXkFqcGdeQW1pYnJ5YW50._V1_.jpg",
      description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/2ilzidi_J8Q?si=vL80pJeqlC6bl_Of"

    },
    {
      movieName: "The Silence of the Lambs",
      year: 1991,
      releaseDate: "February 14, 1991",
      image: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/6iB21hsprAQ?si=-od-N3Wq4DLMaWH_"
    },
    {
      movieName: "The Usual Suspects",
      year: 1995,
      releaseDate: "July 19, 1995",
      image: "https://rukminim2.flixcart.com/image/850/1000/l071d3k0/poster/d/r/9/medium-inglourious-basterds-poster-on-fine-art-paper-13x19-original-imagcfejv7y3g9a3.jpeg?q=90",
      description: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/oiXdPolca5w?si=3pCHyUajBdlh6x0a"
    },
    {
      movieName: "Inglourious Basterds",
      year: 2009,
      releaseDate: "August 21, 2009",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaElUF161aEeyDmxPx7PhvZcQS_qlDDJlSTUioo4E&s",
      description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/KnrRy6kSFF0?si=jsUBlHPAm4CffImP"
    },
    {
      movieName: "The Departed",
      year: 2006,
      releaseDate: "October 6, 2006",
      image: "https://m.media-amazon.com/images/I/71XlLHgkLFL._AC_UF1000,1000_QL80_.jpg",
      description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/iojhqm0JTW4?si=QVD2lUOtRq3nz3FJ"

    },
    {
      movieName: "The Social Network",
      year: 2010,
      releaseDate: "October 1, 2010",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*AGuIdqTVnRfTYLcEsByBFQ.jpeg",
      description: "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook but is later sued by two brothers who claimed he stole their idea.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/lB95KLmpLR4?si=Ji1gvF2BrR_FWxKW"
    },
    {
      movieName: "The Pianist",
      year: 2002,
      releaseDate: "September 6, 2002",
      image: "https://images.moviesanywhere.com/83be0db16d401bf62ecab4c4f8568a4b/a4d71c78-9856-49ef-abd3-db245d6b484f.jpg",
      description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto during World War II.",
      votes: 0,
      viwes: 0,
      triler: "https://youtu.be/BFwGqLa_oAo?si=FySk5oy_YSJS_SKI"
    }
  ]);

  const viwesIncrement = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].viwes += 1;
    setMovies(updatedMovies);
  };

  const handleIncrement = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].votes = 1;
    setMovies(updatedMovies);
  };
  const handleDecrement = (index) => {
    const updatedMovies = [...movies];
    if (updatedMovies[index].votes > 0) {
      updatedMovies[index].votes -= 1;
      setMovies(updatedMovies);
    }
  };

  return (
    <div className={styles.pageWrapper} >
      <h1 className={styles.mainHeading}>Welcome to Movie Box</h1>
      <div className={styles.cardContainer}>
        {movies.map((element, index) => (
          <Card className={styles.card} key={index}>
            <Card.Img variant="top" src={element.image} style={{ height: "300px" }} />
            <Card.Body className={styles["card-body"]}>
              <Card.Title className={styles["card-title"]}>{element.movieName}</Card.Title>
              <Card.Text className={styles["card-text"]}>
                <p>
                  <b>Year:</b> {element.year}
                </p>
                <p>
                  <b>Release date:</b> {element.releaseDate}
                </p>
                <p>
                  <b>Description:</b> {element.description}
                </p>
                <span>
                  <b>{element.viwes}</b> views |
                  <Button
                    variant="outline-primary"
                    onClick={() => handleIncrement(index)}
                    style={{ marginLeft: "10px" }}
                  >
                    <i className="bi bi-hand-thumbs-up-fill" />
                  </Button>

                  <b style={{ marginLeft: "10px", marginRight: "10px" }}>{element.votes}</b>

                  <Button
                    variant="outline-primary"
                    onClick={() => handleDecrement(index)}
                  >
                    <i className="bi bi-hand-thumbs-down-fill" />
                  </Button>
                </span>



              </Card.Text>

              <Button
               className={styles.buttonHover}
                variant="primary"
                onClick={() => {
                  if (element.triler) {
                    window.open(element.triler);
                    viwesIncrement(index);
                  } else {
                    console.log("Trailer URL not available");
                  }
                }}
              >
                Watch Trailer
              </Button>

            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

