import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const ContactItem = ({ contact, onDelete }) => {
    const { id, name, number } = contact;
    return (
        <li className={styles.list__item}>
            <p className={styles.text}>{name}</p>
            <p className={styles.text}>{number}</p>
            <button
                type="button"
                className={styles.button}
                id={id}
                onClick={event =>
                onDelete(event.target.id)}
            >Delete</button>
        </li>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
    onDelete: PropTypes.func.isRequired,
};

export { ContactItem };