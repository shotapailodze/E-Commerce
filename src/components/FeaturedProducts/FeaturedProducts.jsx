import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            img: 'https://images.boardriders.com/globalGrey/billabong-products/all/default/large/abjzt00971_billabong,w_arm_frt1.jpg',
            img2: 'https://media.nastygal.com/i/nastygal/bgg00720_white_xl/female-white-long-sleeve-oversized-graphic-t-shirt/?w=1070&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
            title: 'Long Sleeve Graphic T-Shirt',
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: 'https://i.pinimg.com/564x/2b/ac/62/2bac62214025ac21a7b7ab35e94ebc13.jpg',
            title: 'Coat',
            isNew: true,
            oldPrice: 33,
            price: 22,
        },
        {
            id: 3,
            img: 'https://ofiveegypt.com/oopuneen/HM402519_5GFLT-NAVY-scaled.jpg',
            title: 'Jacket',
            isNew: false,
            oldPrice: 40,
            price: 20,
        },
        {
            id: 4,
            img: 'https://cdn11.bigcommerce.com/s-2fhihzl616/images/stencil/1280x1280/products/5194/26808/MT31-Mens-Blue-Denim-Jeans__33041.1680622685.jpg?c=1',
            title: 'Jeens',
            isNew: false,
            oldPrice: 35,
            price: 15,
        },
    ]
  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum exercitationem voluptas ratione nam voluptatum dolorem officia. Fuga dolore, et magni vel numquam officiis eos, minima facilis ipsum, repudiandae nam accusantium.</p>
        </div>
        <div className="bottom">
            {data.map(item => <Card item={item} key={item.id} />)}
        </div>
    </div>
  )
}

export default FeaturedProducts