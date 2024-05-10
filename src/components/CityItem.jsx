import { Link } from "react-router-dom";

// import PropTypes from "prop-types";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

// CityItem.propTypes = {
//   city: PropTypes.shape({
//     cityName: PropTypes.string,
//     country: PropTypes.string,
//     emoji: PropTypes.string,
//     date: PropTypes.string,
//     notes: PropTypes.string,
//     position: PropTypes.shape({
//       lat: PropTypes.number,
//       lng: PropTypes.number,
//     }),
//     id: PropTypes.string,
//   }),
// };

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  // 236. Deleting a City
  function handleDeleteCity(e) {
    e.preventDefault();
    // console.log(e);
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleDeleteCity}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
