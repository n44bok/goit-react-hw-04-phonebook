import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ title, value, onChange }) => {
    return (
        <label className={styles.label}>
            <span className={styles.label_title}>{title}</span>
            <input
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
                className={styles.input}
            />
        </label>
    )
};

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;