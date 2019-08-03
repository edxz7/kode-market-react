import React, { Component } from 'react';
import Product from '../Product/Product'

class Products extends Component {
  state = {products:[]}
  // asynchronous request
  async componentDidMount(){
    // we brought a response and then we nneed reconstruct a json from firebase 
    const response = fetch('https://ecc-kode-market.firebaseio.com/products.json')
    .then(results=>{
      return results.json().then( data => {
        console.log(data)

        let productsArray = []
        for(const prop in data){
          let item = data[prop]
          productsArray.push(item)
        }
        this.setState({products:productsArray})
      })

    })
  }
    render(){
        return(
          <div className="container">
          <div className="row">
              {
                  this.state.products.map((product,index) => {
                      return <Product 
                          image = {product.image}
                          name = {product.name}
                          description = {product.description}
                          price = {product.price}
                          key = {index}
                      />
                  })
              }
          </div>
      </div>
        );
    }
}

export default Products;