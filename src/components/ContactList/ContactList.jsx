import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts, selectFilters } from '../../redux/selectors';
import deleteContact from '../../redux/contactsSlice';

const ContactList = ({ id }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleDelItem = () => {
    dispatch(deleteContact.deleteContact(id));
  };

  const filter = useSelector(selectFilters);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.itemCard}>
      {visibleContacts.map(item => {
        return (
          <li key={item.id} className={css.listCard}>
            <Contact onDelete={handleDelItem} item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
