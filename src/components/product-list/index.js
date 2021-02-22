import React, {useState, useEffect} from "react";
import "./index.css";

const ProductList = ({handleAdd, handleRemove, products}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const newProducts = products.map(product => ({...product, added: false}))
        setItems(newProducts)
    },[products])

    const addItem = i => {
        const newProduct = items.map((product, idx) => {
            if (idx === i)  return {...product, added: true}
            return {...product}
        })
        setItems(newProduct)
        handleAdd(i)
    }

    const removeItem = i => {
        const newProduct = items.map((product, idx) => {
            if (idx === i)  return {...product, added: false}
            return {...product}
        })
        setItems(newProduct)
        handleRemove(i)
    }

        return (
            <div className="layout-row wrap justify-content-center flex-70 app-product-list">
                {items.map((item, i) => {
                    return (
                        <section className="w-30"
                                 data-testid={'product-item-' + i}
                                 key={item.id}>
                            <div className="card ma-16">
                                <img alt="Your Cart" src={item.image}
                                     className="d-inline-block align-top product-image"/>
                                <div className="card-text pa-4">
                                    <h5 className="ma-0 text-center">{item.name}</h5>
                                    <p className="ma-0 mt-8 text-center">${item.price}</p>
                                </div>
                                <div className="card-actions justify-content-center pa-4">
                                    {item && !(item.added)
                                     ?
                                    <button onClick={()=> addItem(i)} className="x-small outlined" data-testid="btn-item-add">
                                        Add To Cart
                                    </button>
                                    :
                                    <button onClick={()=> removeItem(i)} className="x-small danger" data-testid="btn-item-remove">
                                        Remove
                                    </button>
                                    }
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
        )
    }

export default ProductList