import css from './App.module.css';

import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import TitlePhonebook from './Title/Title';

export const App = () => {
  return (
    <div className={css.container}>
      <TitlePhonebook />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
