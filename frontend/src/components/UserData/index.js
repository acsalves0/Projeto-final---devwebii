import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
// import { values } from 'sequelize/types/lib/operators';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

function initialState() {
  return {
    name: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    dataVacina: '',
    horarioVacina: '',
  };
}

export default function UserData(props) {
  const classes = useStyles();

  const [values, setValues] = useState(initialState);
  

  function verificarInformacoes({
    name,
    email,
    dataNascimento,
    dataVacina,
    horarioVacina,
  }) {}

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    verificarInformacoes(values);
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Dados do paciente
      </Typography>

      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              name="name"
              label="Nome completo"
              fullWidth
              onChange={onChange}
              value={values.name}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              onChange={onChange}
              value={values.email}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField 
            required id="cpf" 
            name="cpf" 
            label="CPF" 
            fullWidth 
            onChange={onChange}
            value={values.cpf}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="date"
              type="date"
              label="Data de nascimento"
              fullWidth
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
              defaultValue={values.dataNascimento}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Selecionar data e horário
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dateVacina"
              type="date"
              label="Data de vacinação"
              fullWidth
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
              defaultValue={values.dataVacina}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="time"
              type="time"
              label="Horário"
              fullWidth
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={onChange}
              defaultValue={values.horarioVacina}
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
}
