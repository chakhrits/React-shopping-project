import firebase from '../../firebase'
import { createActionSet } from '../../helpers'

const productRef = firebase.db.collection('products')

export const FETCH_PRODUCTS = createActionSet('FETCH_PRODUCTS')

export const findAll = () => async dispatch => {
  dispatch({
    type: FETCH_PRODUCTS.PENDING
  })

  try {
    const products = await productRef.orderBy('price').get()
    const payload = products.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    dispatch({
      type: FETCH_PRODUCTS.SUCCESS,
      payload
    })
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS.FAILED,
      error
    })
  }
}
