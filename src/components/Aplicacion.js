import React from 'react';
import Productos from './Productos';
import Header from './Header'
import Footer from './Footer'

class Aplicacion extends React.Component{
    render() {
        const productos = [
            {nombre: 'Libro', precio: 200},
            {nombre: 'Disco de música', precio: 100},
            {nombre: 'Instrumento musical', precio: 800},
            {nombre: 'Reproductor musical', precio: 1500},
            {nombre: 'Álbum Ed. Especial', precio: 500}
        ]
        return (
            <div>
                < Header 
                    titulo = "Nuestra tienda Virtual"
                />
                < Productos
                    productos = {productos}
                />
                < Footer />
            </div>
        );
    }
}

export default Aplicacion;