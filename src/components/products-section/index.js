import React from "react"
import "./styles.scss"
import scrollToSectionHandler  from "../../utils/scrollToSectionHandler"

export default ({ products }) =>  {
    return (
        <section id="productos" className="section">
            <div className="columns">
                {products.map((product) =>
                    <div key={product.id} className={`product-item product-item-${product.color} column has-text-centered`}>
                        <figure className="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                        <h4 className="title is-spaced has-text-grey-dark">{product.title}</h4>
                        <p className="subtitle is-6 is-spaced has-text-grey-dark">{product.subtitle}</p>
                        <button className="icon is-large" onClick={scrollToSectionHandler} data-target={product.id}>
                            <i className="fas fa-plus fa-inverse" data-target={product.id}></i>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}