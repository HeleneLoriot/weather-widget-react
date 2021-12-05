// style
import './style.scss';

export default function SearchBar() {
    return (
        <div className="searchBar">
            <form className="form">
                <input
                className="form__input"
                type="text"
                placeholder="Saisir la ville"
                value=""
                onChange={(event) => console.log(event.target.value)}
                />
            </form>
        </div>
    );
}
