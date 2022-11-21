import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { StyledTableCell, StyledTableRow } from './ContactsTable.styled';
//
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import Box from 'components/Box';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import EditContactForm from 'components/EditContactForm';

function ContactsTable() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(null);

  const contacts = useSelector(selectFilteredContacts);

  const onDelete = ({ id }) => {
    dispatch(deleteContact(id));
  };

  const openContactForm = contact => {
    setContact(contact);
    setOpen(true);
  };

  return (
    <>
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
            {contacts.map(({ id, name, number }) => (
              <StyledTableRow key={id}>
                <StyledTableCell scope="row">{id}</StyledTableCell>
                <StyledTableCell align="right">{name}</StyledTableCell>
                <StyledTableCell align="right">{number}</StyledTableCell>
                <StyledTableCell align="right">
                  <Box flexDirection="row" gridGap="5px">
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={() => openContactForm({ id, name, number })}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
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
      {/* /////////////////////////////////////// */}
      <Dialog open={open}>
        <DialogTitle>Edit contact</DialogTitle>
        <DialogContent>
          <EditContactForm contact={contact} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ContactsTable;
