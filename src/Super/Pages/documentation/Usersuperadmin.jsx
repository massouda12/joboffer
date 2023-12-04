import React ,{Component} from 'react';
import Backdrop from '../../../components/Backdrop/Backdrop';
import Modal from '../../../components/Modal/Modal';
import '../installation/style.css'
import {Link} from 'react-router-dom'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Box, Inline, Stack, Text, xcss } from '@atlaskit/primitives';
import Avatar from '@atlaskit/avatar';
import './style.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Fullname, email, Role, Add ) {
  return { Fullname, email, Role, Add };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24,),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];
class Usersuperadmin extends Component {
  state = {
    creating: false,
    events: []
  };
  modalCancelHandler = () => {
    this.setState({ creating: false });
  };
  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };
  render() {
    return (
      <React.Fragment>
      {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
        
          >
            <form >
              <div className="form-control">
                <label htmlFor="title" style={Styles.label}>Title</label>
                <input type="text" id="title" style={Styles.input} ref={this.titleElRef} placeholder='Title'/>
              </div>
              <div className="form-control">
                <label htmlFor="price" style={Styles.label}> Price</label>
                <input type="number" id="price" style={Styles.input} ref={this.priceElRef} placeholder='Price' />
              </div>
              <div className="form-control">
                <label htmlFor="date"style={Styles.label}>Date</label>
                <input type="datetime-local" style={Styles.input} id="date" ref={this.dateElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="description"style={Styles.label}>Description</label>
                <textarea
                  id="description"
                  rows="4"
                  ref={this.descriptionElRef}
                  style={Styles.input}
                  placeholder='Description'
                />
              </div>
            </form>
          </Modal>
          )}
          <div className='Title'>
            <h4>Creating Users
            <Link to="/main/addusers">
            <button className="btn" >
              Add User 
              <GroupAddIcon className='icon' />
            </button>
            </Link>
            </h4>
            </div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right"><button>Add</button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Fullname}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.Role}</TableCell>
              <TableCell align="right">{row.Add}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </React.Fragment>
    );
  }
}
const Styles = {
  label: {
    display: 'block',
    textAlign: 'center',
    fontSize: '20px',
    margin:'0 0 2vh 0 ',
  },
  input : {
    display:'block',
    width:'100%',
    padding : '0.5 rem 0.8rem 0.5rem 0.8rem',
    margin:'0.9vw 0',
    border:'0',
    borderRadius:'5px',
    fontSize:'20px',
    textarea:'fixed'
  }
}

const boxStyles = xcss({
  display: 'flex-box',
  justifyContent: 'start',
  flexDirection:"row",
  color: 'color.text',
  borderColor: 'color.border.disabled',
  borderStyle: 'solid',
  borderRadius: 'border.radius.200',
  width:"20%",
  height:"150px",
  textAlign:"center"
});
export default Usersuperadmin;
