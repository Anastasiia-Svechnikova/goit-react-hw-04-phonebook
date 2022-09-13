import PropTypes from 'prop-types';
import s from './filter.module.css';

export default function Filter({ filterHandler, filter }) {
    return (
        <label className='label'>
            Find contacts by name
            <input
                onChange={filterHandler}
                type="text"
                value={filter}
                placeholder='start typing the name...'
                className={s.input}
            ></input>
        </label>
    )
}
Filter.propTypes = {
    filterHandler: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}