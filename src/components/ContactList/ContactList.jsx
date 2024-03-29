import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectVisibleContacts } from '../../redux/selectors';
import deleteContact from '../../redux/contactsSlice';

const ContactList = ({ id }) => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const handleDelItem = () => {
    dispatch(deleteContact.deleteContact(id));
  };

  return (
    <ul className={css.itemCard}>
      {contacts.map(item => {
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
