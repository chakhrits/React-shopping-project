import React from 'react'
import { connect } from 'react-redux'
import { lifecycle, compose } from 'recompose'

import ProductItem from './components/ProductItem'
import { findAll } from '../../actions/products'

const HomePage = ({ products }) => {
  return (
    <div className="home">
      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Ahoy Shop!</h1>
            <h2 className="subtitle">
              Shopping Website with React and Firebase
            </h2>
          </div>
        </div>
      </section>
      <section className="section home-products">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <h2 className="title">Our Products</h2>
            </div>
          </div>

          <div className="columns is-multiline">
            {products &&
              products.map(product => {
                const linkToDetail = `/products/${product.id}`

                return (
                  <div className="column is-4">
                    <ProductItem product={product} to={linkToDetail} />
                  </div>
                )
              })}
          </div>
        </div>
      </section>
    </div>
  )
}

const withLifeCycle = lifecycle({
  componentDidMountI() {
    const { dispatch } = this.props
    dispatch(findAll())
  }
})

const mapStateToProps = state => ({
  isFetching: state.products.list.isFetching,
  products: state.products.list.data
})

export default compose(connect(mapStateToProps), withLifeCycle)(HomePage)
