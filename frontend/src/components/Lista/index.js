import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ExitToApp from '@material-ui/icons/ExitToApp';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" onClick={() => window.location.href='/dashboard'}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddLocationIcon />
      </ListItemIcon>
      <ListItemText primary="Cadastrar Unidade" onClick={() => window.location.href= '/registrarunidade'} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ScheduleIcon />
      </ListItemIcon>
      <ListItemText primary="Agendar Vacina" onClick={() => window.location.href= '/checkout'}/>
    </ListItem>
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Sair" onClick={() => window.location.href= '/'}/>
    </ListItem>
    
  </div>
);