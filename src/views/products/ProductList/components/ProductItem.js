import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteProduct } from '../../../../actions/products'

const ProductItem = ({ product, dispatch }) => {
  const linkToEdit = `/products/${product.id}/edit`

  return (
    <div className="columns">
      <div className="column is-8">
        <div className="box">
          <div className="columns">
            <div className="column is-9">
              <div className="product-box">
                <img src={product.coverImage} alt={product.name} />

                <div className="product-box-meta">
                  <p>
                    <strong>Name:</strong> {product.name}
                  </p>
                  <p>
                    <strong>Price:</strong> {product.price}
                  </p>
                </div>
              </div>
            </div>

            <div className="column is-3">
              <div className="field is-grouped">
                <p className="control">
                  <Link to={linkToEdit} className="button is-link">
                    Edit
                  </Link>
                </p>

                <p className="control">
                  <button
                    className="button is-danger"
                    onClick={() => {
                      onHandleDelete(product.id, dispatch)
                    }}
                  >
                    Delete
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const onHandleDelete = (id, dispatch) => {
  const isConfirm = window.confirm('Are you sure to delete')
  if (isConfirm) {
    dispatch(deleteProduct(id))
  }
}

export default connect()(ProductItem)
