import React from "react";
import "../routes/Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    const { state } = location;
    if (state) {
      return (
        <div className="movie__detail">
          <img src={state.poster} alt={state.title} title={state.title} />
          <div className="movie__detail__data">
            <h3 className="movie__detail__title">{state.title}</h3>
            <h5 className="movie__detail__year">{state.year}</h5>
            <ul className="movie__detail__genres">
              {state.genres.map((genre, index) => (
                <li key={index} className="detail__genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__detail__summary">{state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
