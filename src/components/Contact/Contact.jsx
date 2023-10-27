import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/ContactFormReducer';
import { DeleteBtn, Item, Name } from './Contact.styled';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <Item key={id}>
      <Name>
        {name}: {number}
      </Name>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
    </Item>
  );
};
