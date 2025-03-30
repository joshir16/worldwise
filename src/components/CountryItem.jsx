import styles from "./CountryItem.module.css";
import { flagemojiToPNG } from "../utilities/flagemojiToPNG";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
