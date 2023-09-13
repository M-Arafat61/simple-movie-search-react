import PropTypes from "prop-types";

const Movie = ({ movie }) => {
  const { Year, Poster, Title, Type } = movie;
  return (
    <div className="card card-compact p-2 bg-[#181823] hover:bg-teal-900 shadow-xl rounded-lg">
      <div className="flex justify-center items-center">
        <img className="w-[250px] h-[200px]" src={Poster} alt="" />
      </div>
      <div className="text-white card-body font-semibold text-center bg-teal-900">
        <i>
          <h3 className="">{Year}</h3>
          <p>{Type}</p>
        </i>
      </div>
      <hr className="border border-gray-300" />
      <p className="bg-teal-900 text-white font-semibold text-start">{Title}</p>
    </div>
  );
};
Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
