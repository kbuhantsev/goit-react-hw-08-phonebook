import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Paper, Button, Dialog, DialogContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { StyledTableCell, StyledTableRow } from './ContactsTable.styled';
//
import Box from 'components/Box';
import { useState } from 'react';
import EditContactForm from 'components/EditContactForm';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/services/contactsApi';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';

function ContactsTable() {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(null);

  const { data: contacts = [], error, isLoading } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  let filteredContacts = contacts;

  const filter = useSelector(selectFilter);
  if (filter) {
    filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const onDelete = ({ id }) => {
    deleteContact(id);
  };

  const openContactForm = contact => {
    setContact(contact);
    setOpen(true);
  };

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      <TableContainer component={Paper} sx={{ maxWidth: '900px' }}>
        <Table aria-label="contacts table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Contact ID</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredContacts.map(({ id, name, phone }) => (
              <StyledTableRow key={id}>
                <StyledTableCell scope="row">{id}</StyledTableCell>
                <StyledTableCell align="right">{name}</StyledTableCell>
                <StyledTableCell align="right">{phone}</StyledTableCell>
                <StyledTableCell align="right">
                  <Box flexDirection="row" gridGap="5px">
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={() => openContactForm({ id, name, phone })}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      disabled={isDeleting}
                      onClick={() => onDelete({ id })}
                    >
                      Delete
                    </Button>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open}>
        <DialogContent>
          <EditContactForm contact={contact} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ContactsTable;
