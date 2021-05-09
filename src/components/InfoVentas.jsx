import React from 'react';
import {Card,Typography,CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles= makeStyles(()=>({
    root:{
  textAlign: 'center',
  background: 'rgba(200,8,5,1)',
    },
texto:{
 fontSize: 18,
 color:'white'
},
titulo:{
    fontWeight: 'bold',
    fontSize: 20,
    color:'white'
   },
}));     

function InfoVentas(props) {
    const classes= useStyles(); 
    return (
        <Card className={classes.root}>
             <CardContent>
                 <Typography className={classes.titulo}>
                    {props.titulo}
                 </Typography>

                 <Typography className={classes.texto}>
                    {props.texto}
                 </Typography>
             </CardContent>
        </Card>
    );
}

export default InfoVentas;