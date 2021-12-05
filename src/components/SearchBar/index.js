import PropTypes from 'prop-types';

// style
import './style.scss';

export default function SearchBar({ value, setValue, onSubmitForm}) {

    const handlesubmit = (event) => {
        event.preventDefault();
        // set city with input value
        onSubmitForm(value);
        // empty input text
        setValue('');
    }

    return (
        <div className="searchBar">
            <form onSubmit={handlesubmit} className="form">
                <input
                className="form__input"
                type="text"
                placeholder="Saisir la ville"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                />
            </form>
        </div>
    );
}

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    onSubmitForm: PropTypes.func.isRequired,
};