import style from  "./SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <>
        <div className={style.container}>
            <input type="text" placeholder="Search Here" />
            <button >
              <FaSearch className={style.icon}/>
            </button>
        </div>
    </>
  )
}

export default SearchBar;