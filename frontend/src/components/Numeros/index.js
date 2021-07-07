import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Titulo from '../Titulo';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Numeros() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Titulo>Total de Vacinados</Titulo>
      <Typography component="p" variant="h4">
        298.483
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        em 07 Jul, 2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver detalhes
        </Link>
      </div>
    </React.Fragment>
  );
}