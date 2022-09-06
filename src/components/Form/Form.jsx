import React, { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });
    };
    
    render() {
        const { name, number } = this.state;
        return (
            <form className={styles.form} action="submit" onSubmit={this.handleSubmit}>
                <div className={styles.container}>
                    <label className={styles.label}>
                        <span className={styles.label_title}>Name</span>  
                        <input
                            type="text"
                            className={styles.input}
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <label className={styles.label}> 
                        <span className={styles.label_title_number}>Number</span> 
                        <input
                            type="tel"
                            className={styles.input}
                            name="number"
                            value={number}
                            onChange={this.handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                </div>
                <button className={styles.button} type="submit">Add contact</button>
            </form>
        );
  }
}


export default Form;