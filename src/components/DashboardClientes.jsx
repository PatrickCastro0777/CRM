import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RoomIcon from '@material-ui/icons/Room';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import CartaInfo from './CartaInfo';
import InfoVentas from './InfoVentas';
import Graficas from './Graficas';

const useStyles= makeStyles(()=>({
    root:{
        flexGrow:1
    },
    iconos:{
        color: 'white'
    },
    container:{
         paddingTop: '48px',
         alignItems: 'center' 
    },
    }));

function DashboardClientes(props) {
    const classes= useStyles(); 
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>         
               <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
               <CartaInfo icono={<FingerprintIcon className={classes.iconos}/>} 
               titulo='ID Cliente' 
               texto='ID' 
               color='rgba(248,80,50,1)' 
               font='white'/>
               </Grid>    

               <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
               <CartaInfo icono={<AccountCircleIcon className={classes.iconos}/>} 
               titulo='Cliente' 
               texto='Nombre cliente' 
               color='rgba(200,8,5,1)' 
               font='white'/>
               </Grid>

               <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
               <CartaInfo icono={<RoomIcon className={classes.iconos}/>} 
               titulo='Departamento' 
               texto='Nombre departamento' 
               color='rgba(248,80,50,1)' 
               font='white'/>
               </Grid>       
                       
     
               <Grid container spacing={1} className={classes.container} xs={12} sm={6} md={6} lg={4} xl={4}>  
                  <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                   <InfoVentas 
                   titulo='Total acumulado de ventas '  
                   texto='$$$' 
                   color='rgba(248,80,50,1)' 
                   font='white'/>
                  </Grid>

                  <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                   <InfoVentas 
                   titulo='Ventas en el ultimo mes '  
                   texto='$$$' 
                   color='rgba(248,80,50,1)' 
                   font='white'/>
                  </Grid>

                  <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                   <InfoVentas 
                   titulo='Ventas en el ultimo año '  
                   texto='$$$' 
                   color='rgba(248,80,50,1)' 
                   font='white'/>
                  </Grid>
               </Grid>

               <Grid item xs={0} sm={0} md={1} lg={1} xl={1}>
                
               </Grid>

               <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className={classes.container}>
               <Graficas/>
               </Grid>

            </Grid>
        </div>
    );
}

export default DashboardClientes;