import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CityList.module.css";
// import PropTypes from "prop-types";
import { useCities } from "../contexts/CitiesContext";

// CityList.propTypes = {
//   cities: PropTypes.array,
//   isLoading: PropTypes.bool,
// };

function CityList() {
  // 228. Consuming the CitiesContext
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message={"Add your first city by clicking on the map."} />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
