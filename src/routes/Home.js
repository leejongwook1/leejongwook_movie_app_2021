import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    //비동기, 데이터를 받아올때까지 기다리게
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); //데이터를 가져오는데 시간이 걸릴수 있기때문에 await으로 기다림, sort_by=rating 은 별점순으로 정렬

    this.setState({
      movies, //받아온 영화 데이터
      isLoading: false,
    }); //데이터를 state에 넣어주면 로딩이 끝나게 함
  };

  componentDidMount() {
    this.getMovies();
    // setTimeout(() => {                    로딩 시간을 설정
    //   this.setState({ isLoading: false });
    // }, 6000);
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-text"> Loading..... </span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
