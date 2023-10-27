import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Cart.scss'

const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.boardriders.com/globalGrey/billabong-products/all/default/large/abjzt00971_billabong,w_arm_frt1.jpg',
      img2: 'https://media.nastygal.com/i/nastygal/bgg00720_white_xl/female-white-long-sleeve-oversized-graphic-t-shirt/?w=1070&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
      title: 'Long Sleeve Graphic T-Shirt',
      desc: 'Long Sleeve Shirt',
      isNew: true,
      oldPrice: 19,
      price: 12,
  },
  {
      id: 2,
      img: 'https://i.pinimg.com/564x/2b/ac/62/2bac62214025ac21a7b7ab35e94ebc13.jpg',
      title: 'Coat',
      desc: 'Coat',
      isNew: true,
      oldPrice: 33,
      price: 22,
  },
  ]
  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        {data?.map(item => (
          <div className="item" key={item.id}>
            <img src={item.img} alt='' />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0,100)}</p>
              <div className="price">
                1 x {item.price}
              </div>
            </div>
            <DeleteOutlineIcon className='delete'/>

          </div>
        ))}
        <div className="total">
          <span>Subtotal</span>
          <span>$123</span>
        </div>
        <button>Proceed To Checkout</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart