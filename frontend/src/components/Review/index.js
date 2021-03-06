import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const payments = [
  { name: '14/07/2021', detail: '09:30' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Confirmar Dados
      </Typography>
  
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
         
          <Typography variant="subtitle2" gutterBottom>Nome: Julia Fernandes</Typography>
          <Typography variant="subtitle2" gutterBottom>Email: juliaalmeidafernandes@gmail.com</Typography>
          <Typography variant="subtitle2" gutterBottom>CPF: 922.343.802-00</Typography>
          <Typography variant="subtitle2" gutterBottom>Data de nascimento: 20/10/1981</Typography>
          
        </Grid>
        <Grid item container direction="column" xs={12} >
          <Typography variant="h6" gutterBottom className={classes.title}>
            Data e horário
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}