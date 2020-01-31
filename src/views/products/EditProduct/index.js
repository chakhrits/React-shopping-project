import React, { Fragment } from 'react'
import { lifecycle, compose } from 'recompose'
import { connect } from 'react-redux'

import Form from '../components/Form'
import BaseHero from '../../../components/BaseHero'

import { findById, updateProduct } from '../../../actions/products'
import Loading from '../../../components/Loading'

const handleSubmitProduct = (id, values, dispatch) => {
  const coverImage = values.coverImage.imageUrl
    ? values.coverImage.imageUrl
    : values.coverImage

  const payload = { ...values, coverImage }

  dispatch(updateProduct(id, payload))
}

const EditProduct = ({ isFetching, product, match }) => {
  if (isFetching) {
    return <Loading />
  }

  const { id } = match.params
  return (
    <Fragment>
      <BaseHero />
      <Form
        onSubmit={(values, dispatch) => {
          handleSubmitProduct(id, values, dispatch)
        }}
        initialValues={product}
        coverImage={product.coverImage}
      />
    </Fragment>
  )
}

const withLifeCycle = lifecycle({
  componentDidMount() {
    const { match, dispatch } = this.props
    const { id } = match.params

    dispatch(findById(id))
  }
})

const mapStateToProps = state => ({
  isFetching: state.products.detail.isFetching,
  product: state.products.detail.data
})

export default compose(connect(mapStateToProps), withLifeCycle)(EditProduct)
