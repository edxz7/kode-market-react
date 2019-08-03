import React, {Component} from 'react';


class Product extends Component {
    render() {
        return (
            <div className="col-12 col-sm-3">
                <div className="card">
                    <img src={this.props.image} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <p className="text-right font-italic text-green">{this.props.price}</p>
                        <div className="btn btn-primary">Comprar</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;