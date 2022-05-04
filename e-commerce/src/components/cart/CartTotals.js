import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mt-5 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-end'>
            <Link to='/'>
              <button
                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                type='button'
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className='text-title'>
                subtotal : <strong>₹ {cartSubtotal}</strong>
              </span>
            </h5>
            <h5>
              <span className='text-title'>
                gst(18%) : <strong>₹ {cartTax}</strong>
              </span>
            </h5>
            <h5>
              <span className='text-title'>
                total : <strong>₹ {cartTotal}</strong>
              </span>
            </h5>
            <Link to='/checkout'>
              <button
                className='btn btn-outline-primary text-uppercase mb-3 px-5'
                type='button'
              >
                checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
