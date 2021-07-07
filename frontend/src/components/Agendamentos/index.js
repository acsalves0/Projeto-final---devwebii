import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Titulo from '../Titulo';

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

async function getAgendamentos() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '14 Jul, 2021', 'Julia Fernandes', ' juliaalmeidafernandes@gmail.com', 'Unidade Sede', '09:30'),
  createData(1, '14 Jul, 2021', 'Crystal Thomas', 'crystalnthomas@hotmail.com', 'Unidade Sede', '13:10'),
  createData(2, '14 Jul, 2021', 'Evelyn Castro', 'evelynlimacastro@outlook.com', 'Unidade São Marcos', '10:40'),
  createData(3, '15 Jul, 2021', 'Rafael Cardoso', 'rafaelaraujocardoso@hotmail.com', 'Unidade Laranjeiras', '10:20'),
  createData(4, '15 Jul, 2021', 'Douglas Silva', 'douglasazevedosilva@gmail', 'Unidade Laranjeiras', '11:50'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Agendamentos() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Titulo>Agendamentos</Titulo>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Local</TableCell>
            <TableCell align="right">Data/hora</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver mais agendamentos
        </Link>
      </div>
    </React.Fragment>
  );
}