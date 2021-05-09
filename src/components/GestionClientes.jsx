import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Table, Button, Container, Modal, ModalBody, ModalHeader, formGroup,ModalFooter } from 'reactstrap';

const data=[
 {id: 1, nombre: "Patrick", apellido: "Castro", nit:"12345678790123", edad:"25", direccion: "Zona 10 3era Av", departamento:"San Marcos", municipio:"San Marcos"},
 {id: 2, nombre: "Deni", apellido: "Gomez", nit:"0987654321234", edad:"25", direccion: "Zona 10 3era Av", departamento:"San Marcos", municipio:"San Marcos"},
];

class GestionClientes extends React.Component{
state={ data: data}
    render(){
    return (
        <>
        <Container>
        <br/>
          <Button color="primary">
           Crear nuevo cliente
          </Button>
          <br/>  <br/>
             <Table>
               <thead><tr>
                   <th>id</th>
                   <th>nombre</th>
                   <th>apellido</th>
                   <th>nit</th>
                   <th>edad</th>
                   <th>direccion</th>
                   <th>departamento</th>
                   <th>municipio</th>
                   </tr></thead>
               
               <tbody>
                   {this.state.data.map((elemento)=>(
                        <tr>
                           <td>{elemento.id}</td>
                           <td>{elemento.nombre}</td>
                           <td>{elemento.apellido}</td>
                           <td>{elemento.nit}</td>
                           <td>{elemento.edad}</td>
                           <td>{elemento.direccion}</td>
                           <td>{elemento.departamento}</td>
                           <td>{elemento.municipio}</td>
                           <td><Button color="primary">Editar</Button><Button color="danger">Eliminar</Button></td>
                        </tr>
                   ))}
               </tbody>
             </Table>
          </Container>
        </>
    )
    }
}

export default GestionClientes;