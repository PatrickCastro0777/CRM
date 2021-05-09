import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import DashboardGeneral from '../components/DashboardGeneral';
import DashboardClientes from '../components/DashboardClientes';
import GestionClientes from '../components/GestionClientes'
import Inicio from '../components/Inicio';

function Dashboard() {
    return (
        <Router>
        <div className="container mt-5">
          <h1>PROYECTO CRM </h1>
        <div className="btn-group">    

           <Link to="/" className="btn btn-dark">
           Inicio
           </Link>

           <Link to="/GestorClientes" className="btn btn-dark">
           Gestor Clientes
           </Link>

           <Link to="/GraficaVentaCliente" className="btn btn-dark">
            Grafica Venta Cliente
           </Link>
   

           <Link to="/GraficaGeneral" className="btn btn-dark">
           Grafica General
           </Link>
           </div>
           <hr/>
<Switch>
<Route path="/GraficaVentaCliente">
  <DashboardClientes/> 
</Route>

<Route path="/GraficaGeneral">
  <DashboardGeneral/> 
</Route>

<Route path="/GestorClientes">
<GestionClientes/>
</Route>

<Route path="/" exact>
  <Inicio/>
</Route>
</Switch> 
        </div>
        </Router>
    );
}

export default Dashboard;




