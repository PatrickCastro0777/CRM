import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import EventIcon from '@material-ui/icons/Event';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CartaInfo from './CartaInfo';
import GraficasGeneral from './GraficasGeneral';

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

function DashboardGeneral(props) {
    const classes= useStyles(); 
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>  

               <Grid item xs={12} sm={4} md={4} lg={3} xl={3} >
               <CartaInfo icono={<FormatListNumberedIcon  className={classes.iconos}/>} 
               titulo='Numero total de clientes' 
               texto='###' 
               color='rgba(248,80,50,1)' 
               font='white'/>
               </Grid>    

               <Grid item xs={12} sm={4} md={4} lg={3} xl={3} >
               <CartaInfo icono={< EventIcon className={classes.iconos}/>} 
               titulo='Número total de nuevos clientes de los ultimos 30 días' 
               texto='###' 
               color='rgba(200,8,5,1)' 
               font='white'/>
               </Grid>

               <Grid item xs={12} sm={4} md={4} lg={3} xl={3} >
               <CartaInfo icono={< CalendarTodayIcon className={classes.iconos}/>} 
               titulo='Número total de nuevos clientes del ultimo año' 
               texto='###' 
               color='rgba(248,80,50,1)' 
               font='white'/>
               </Grid> 

               <Grid item xs={12} sm={4} md={4} lg={3} xl={3} >
               <CartaInfo icono={<MonetizationOnIcon className={classes.iconos}/>} 
               titulo='Total de ventas' 
               texto='$$$' 
               color='rgba(248,80,50,1)' 
               font='white'/>
               </Grid>        
                       
     
               <Grid container spacing={1}>  
               <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <h1>Clientes por departamento</h1>
                  <GraficasGeneral/>
                  </Grid>

                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <h1>Cliente por rango de edad</h1>
                  <GraficasGeneral/>
                  </Grid>

                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <h1>Cantidad de ventas  del año por mes</h1>
                  <GraficasGeneral/>
                  </Grid>


               </Grid>
            </Grid>
        </div>
    );
}

export default DashboardGeneral;