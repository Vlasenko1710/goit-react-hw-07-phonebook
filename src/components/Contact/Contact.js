import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getAllContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { TiDelete } from 'react-icons/ti';
import { ContactItemBtn, ListItem } from './Contact.styled';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const warningMsg = name =>
  toast.warn(`${name} contact has been removed!`, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
export const Contact = () => {
  const allContacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const dispatc = useDispatch();

  return (
    <>
      {allContacts.contacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(item => {
          return (
            <ListItem key={item.name}>
              <span>
                {item.name}:{item.number}
              </span>
              <ContactItemBtn
                type="button"
                onClick={() => {
                  dispatc(deleteContact(item.name));
                  warningMsg(item.name);
                }}
              >
                <TiDelete />
              </ContactItemBtn>
            </ListItem>
          );
        })}
      <ToastContainer />
    </>
  );
};
