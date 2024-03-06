// CartAnimation.jsx
import React from 'react';
import Image from 'next/image';
// import styles from './CartAnimation.module.css'; // Import the CSS file
import style from "@/styles/CartAnimation.module.css"
const CartAnimation = () => {
  return (
    <div className={style['cart-item']}>
      <div className={style.content}>
        Content goes here. This could be the item description or other details.
      </div>
      <div className={style.background}></div>
      <Image src="/hands.png" alt="client" width={200} height={200} className='bg-black' />
      <p>consultancy</p>
    </div>
  );
};

export default CartAnimation;
