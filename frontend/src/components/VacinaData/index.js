import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  dropdown: {
    display: "flex",
    textAlign: "center",
    justifyContent: "left",
    margin: "10px",
  },
  buttonSelect: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    fontSize: "1rem",
    color: "#888",
  }
}));

export default function VacinaData() {
  const classes = useStyles();

  function initialState(){
    return{ 
      nomeUnidade: '',
      servicos: ''
    }
  }


  const [values, setValues] = useState(initialState);
  const [count, setCount] = useState(true);
  const [service, setService] = useState([]);
  const [unidade, setUnidade] = useState([]);

  let servicos = [];
  let nomeUnidade = []

  useEffect(() =>{
    if(count){
      (async function(){
        await axios.get('http://localhost:5000/api/unidades')
        .then(async (response) =>{
          if(response.data.status === 'ok'){
            for (let i = 0; i < response.data.message.length; i++) {
              servicos.push(response.data.message[i].descricao);
              nomeUnidade.push(response.data.message[i].nome_unidade)
            }
            setService(servicos);
            setUnidade(nomeUnidade);
            console.log(service);  
            console.log(unidade);
            setCount(false);
          }
        })
      })();
    }
  });

  function onChange(event) {
    const {value, name} = event.target;

    setValues({
      ...values,
      [name]: value,
    })
  }

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Escolha um local
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <FormControl variant='filled' className={classes.dropdown}>
            <InputLabel htmlFor='servico'>Selecione o serviço</InputLabel>
            <Select
              native
              fullWidth
              value={values.servicos}
              onChange={onChange}
              inputProps={{
                name:'selecionarServico',
                id:'servico'
              }}
            >

              <option aria-label='None' value=''/>
              {service ? (
                service.map((item) => {
                  console.log(item);
                  <option>{item}</option>
                  })
               ) : console.log(service)}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} >
          <FormControl variant='filled' className={classes.dropdown}>
            <InputLabel htmlFor='unidade'>Selecione a unidade de saúde</InputLabel>
            <Select
              native
              fullWidth
              value={values.nomeUnidade}
              onChange={onChange}
              inputProps={{
                name:'selecionarUnidade',
                id:'unidade'
              }}
            >

              <option aria-label='None' value=''/>
              {unidade ? (
                unidade.map((item) => {
                  console.log(item);
                  <option>{item}</option>
                  })
               ) : console.log(unidade)}
            </Select>
          </FormControl>
          
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}