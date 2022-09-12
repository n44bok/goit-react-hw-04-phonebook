import PropTypes from 'prop-types';

import { ContactItem } from './ContactItem';
import styles from './Contact.module.css';

const ContactList = ({ allContacts, onDelete }) => {
    return (
        <ul  className={styles.list}>
            {allContacts.map(({ id, name, number }) => {
                return (
                    <ContactItem
                        contact={{ id, name, number }}
                        key={id}
                        onDelete={onDelete}
                    />
                );
            })}
        </ul>
    )
};

ContactList.propTypes = {
    allContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    onDelete:PropTypes.func.isRequired,
};

export default ContactList;