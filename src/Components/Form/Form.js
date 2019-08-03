import React, {Component} from 'react';

class Form extends Component{

    constructor(){
        super() // ask for inheritance
        this.state = {
            name : "",
            description:"",
            price:"",
            image:"",
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(event.target);
        
    } 

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, description, price, image} = this.state
        fetch('https://ecc-kode-market.firebaseio.com/products.json',
        {
            method:"POST",
            body:JSON.stringify({name, description, price, image})
        }).then(response => {
            console.log(response)
        })
    }

    render(){
        const {name, description, price, image} =this.state
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 offset-sm-3 py-3">
                        <form onSubmit={this.handleSubmit} className="border border-dark shadow rounded p-3">
                            <div className="form-group">
                                <label htmlFor="name">Nombre del producto</label>
                                <input id="name" 
                                name="name" 
                                type="text" 
                                className="form-control"
                                value={name}
                                onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Descripción</label>
                                <input id="description" 
                                name="description" 
                                type="text" 
                                className="form-control"
                                value={description}
                                onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Precio</label>
                                <input id="price" 
                                name="price" 
                                type="text" 
                                className="form-control"
                                value={price}
                                onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">URL de la imagen</label>
                                <input id="image" 
                                name="image" 
                                type="text" 
                                className="form-control"
                                value={image}
                                onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-success">Agregar producto</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form