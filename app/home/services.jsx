// CartAnimation.jsx
import React from 'react';
import styles from '@/styles/CartAnimation.module.css'; // Ensure you create and link this CSS file


const CartAnimation = () => {
    return (
      <div>
        <div className={styles.service_head_text}>
          <h1>We Expertise On This Fields</h1>
          <div className={styles.service_sub_text}>More than just services, we're your partner. We collaborate with you to  <br /> understand your unique needs and deliver customized solutions that <br /> drive real results.</div>
        </div>
        <div className={styles.Service_cart}>
        <div className={styles.cart_item}>
         <div className={styles.content}>
          <div className={styles.background_content}>
          <span className={styles.span_con}> Consultancy</span>
          <p className={styles.cart_text}>Content goes here. This could be the item description or other details sdjfsdjfksl </p>
          <button className={styles.button_cart}>More...</button>
          </div>
          </div>
         <div className={styles.background}></div>
         <img className={styles.item_images} src="/hands.png" alt="" />
 
         <p className={styles.serivce_text_on}>consultancy</p>
        </div>


        <div className={styles.cart_item}>
         <div className={styles.content}>
          <div className={styles.background_content}>
          <span className={styles.span_con}> Consultancy</span>
          <p className={styles.cart_text}>Content goes here. This could be the item description or other details sdjfsdjfksl </p>
          <button className={styles.button_cart}>More...</button>
          </div>
          </div>
         <div className={styles.background}></div>
         <img className={styles.item_image} src="/hands.png" alt="" />
 
         <p className={styles.serivce_text_on}>consultancy</p>
        </div>

        <div className={styles.cart_item}>
         <div className={styles.content}>
          <div className={styles.background_content}>
          <span className={styles.span_con}> Consultancy</span>
          <p className={styles.cart_text}>Content goes here. This could be the item description or other details sdjfsdjfksl </p>
          <button className={styles.button_cart}>More...</button>
          </div>
          </div>
         <div className={styles.background}></div>
         <img className={styles.item_image} src="/hands.png" alt="" />
 
         <p className={styles.serivce_text_on}>consultancy</p>
        </div>

        <div className={styles.cart_item}>
         <div className={styles.content}>
          <div className={styles.background_content}>
          <span className={styles.span_con}> Consultancy</span>
          <p className={styles.cart_text}>Content goes here. This could be the item description or other details sdjfsdjfksl </p> 
          <button className={styles.button_cart}>More...</button>
          </div>
          </div>
         <div className={styles.background}></div>
         <img className={styles.item_image} src="/hands.png" alt="" />
 
         <p className={styles.serivce_text_on}>consultancy</p>
        </div>

        <div className={styles.cart_item}>
         <div className={styles.content}>
          <div className={styles.background_content}>
          <span className={styles.span_con}> Consultancy</span>
          <p className={styles.cart_text}>Content goes here. This could be the item description or other details sdjfsdjfksl </p>
          <button className={styles.button_cart}>More...</button>
          </div>
          </div>
         <div className={styles.background}></div>
         <img className={styles.item_image} src="/hands.png" alt="" />
 
         <p className={styles.serivce_text_on}>consultancy</p>
        </div>

        <div className={styles.cart_item}>
         <div className={styles.content}>
          <div className={styles.background_content}>
          <span className={styles.span_con}> Consultancy</span>
          <p className={styles.cart_text}>Content goes here. This could be the item description or other details sdjfsdjfksl </p>
          <button className={styles.button_cart}>More...</button>
          </div>
          </div>
         <div className={styles.background}></div>
         <img className={styles.item_image} src="/hands.png" alt="" />
 
         <p className={styles.serivce_text_on}>consultancy</p>
        </div>

        
        
        

      </div>
        
      </div>
      

    
    );
};

export default CartAnimation;
/*import React from 'react';
//import styles from '@/styles/CartAnimation.module.css'; // Adjust the import path as needed

const CartAnimation = () => {
    return (
      <div className="grid grid-cols-3 grid-rows-2 gap-10 justify-center " > 
        <div className="relative w-[300px] h-[400px] overflow-hidden cursor-pointer rounded-[30px]"> 
          <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center transition-transform duration-500" style={{transform: "translateY(100%);"}}>
            <span className="mt-[20%] inline-block p-[5px] bg-blue-500 text-white mr-[55%]">Consultancy</span>
            <p className="absolute z-10 mt-[90%] ml-[25%] text-white text-xl">Content goes here. This could be the item description or other details sdjfsdjfksl fsfjsf ksddjfsd sdlkjfjs sllkjfsd lllfsdd lfflsdk </p>
            <button className="bg-blue-500 text-white border-none rounded-md p-[6px] mt-[10%]">More...</button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-blue-500 transition-all duration-500"></div>
          <img src="/hands.png" alt="Hands" class="absolute top-[20%] left-1/2 -translate-x-1/2 z-30 transition-transform duration-500" style={{transform: "scale(1);"}} />
          <p >consultancy</p>
        </div>
        <div className="relative w-[300px] h-[400px] overflow-hidden cursor-pointer rounded-[30px]"> 
          <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center transition-transform duration-500" style={{transform: "translateY(100%);"}}>
            <span className="mt-[20%] inline-block p-[5px] bg-blue-500 text-white mr-[55%]">Consultancy</span>
            <p className="absolute z-10 mt-[90%] ml-[25%] text-white text-xl">Content goes here. This could be the item description or other details sdjfsdjfksl fsfjsf ksddjfsd sdlkjfjs sllkjfsd lllfsdd lfflsdk </p>
            <button className="bg-blue-500 text-white border-none rounded-md p-[6px] mt-[10%]">More...</button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-blue-500 transition-all duration-500"></div>
          <img src="/hands.png" alt="Hands" class="absolute top-[20%] left-1/2 -translate-x-1/2 z-30 transition-transform duration-500" style={{transform: "scale(1);"}} />
          <p >consultancy</p>
        </div>
        <div className="relative w-[300px] h-[400px] overflow-hidden cursor-pointer rounded-[30px]"> 
          <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center transition-transform duration-500" style={{transform: "translateY(100%);"}}>
            <span className="mt-[20%] inline-block p-[5px] bg-blue-500 text-white mr-[55%]">Consultancy</span>
            <p className="absolute z-10 mt-[90%] ml-[25%] text-white text-xl">Content goes here. This could be the item description or other details sdjfsdjfksl fsfjsf ksddjfsd sdlkjfjs sllkjfsd lllfsdd lfflsdk </p>
            <button className="bg-blue-500 text-white border-none rounded-md p-[6px] mt-[10%]">More...</button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-blue-500 transition-all duration-500"></div>
          <img src="/hands.png" alt="Hands" class="absolute top-[20%] left-1/2 -translate-x-1/2 z-30 transition-transform duration-500" style={{transform: "scale(1);"}} />
          <p >consultancy</p>
        </div>
        <div className="relative w-[300px] h-[400px] overflow-hidden cursor-pointer rounded-[30px]"> 
          <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center transition-transform duration-500" style={{transform: "translateY(100%);"}}>
            <span className="mt-[20%] inline-block p-[5px] bg-blue-500 text-white mr-[55%]">Consultancy</span>
            <p className="absolute z-10 mt-[90%] ml-[25%] text-white text-xl">Content goes here. This could be the item description or other details sdjfsdjfksl fsfjsf ksddjfsd sdlkjfjs sllkjfsd lllfsdd lfflsdk </p>
            <button className="bg-blue-500 text-white border-none rounded-md p-[6px] mt-[10%]">More...</button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-blue-500 transition-all duration-500"></div>
          <img src="/hands.png" alt="Hands" class="absolute top-[20%] left-1/2 -translate-x-1/2 z-30 transition-transform duration-500" style={{transform: "scale(1);"}} />
          <p >consultancy</p>
        </div>
        <div className="relative w-[300px] h-[400px] overflow-hidden cursor-pointer rounded-[30px]"> 
          <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center transition-transform duration-500" style={{transform: "translateY(100%);"}}>
            <span className="mt-[20%] inline-block p-[5px] bg-blue-500 text-white mr-[55%]">Consultancy</span>
            <p className="absolute z-10 mt-[90%] ml-[25%] text-white text-xl">Content goes here. This could be the item description or other details sdjfsdjfksl fsfjsf ksddjfsd sdlkjfjs sllkjfsd lllfsdd lfflsdk </p>
            <button className="bg-blue-500 text-white border-none rounded-md p-[6px] mt-[10%]">More...</button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-blue-500 transition-all duration-500"></div>
          <img src="/hands.png" alt="Hands" class="absolute top-[20%] left-1/2 -translate-x-1/2 z-30 transition-transform duration-500" style={{transform: "scale(1);"}} />
          <p >consultancy</p>
        </div>
        <div className="relative w-[300px] h-[400px] overflow-hidden cursor-pointer rounded-[30px]"> 
          <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center transition-transform duration-500" style={{transform: "translateY(100%);"}}>
            <span className="mt-[20%] inline-block p-[5px] bg-blue-500 text-white mr-[55%]">Consultancy</span>
            <p className="absolute z-10 mt-[90%] ml-[25%] text-white text-xl">Content goes here. This could be the item description or other details sdjfsdjfksl fsfjsf ksddjfsd sdlkjfjs sllkjfsd lllfsdd lfflsdk </p>
            <button className="bg-blue-500 text-white border-none rounded-md p-[6px] mt-[10%]">More...</button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-blue-500 transition-all duration-500"></div>
          <img src="/hands.png" alt="Hands" class="absolute top-[20%] left-1/2 -translate-x-1/2 z-30 transition-transform duration-500" style={{transform: "scale(1);"}} />
          <p >consultancy</p>
        </div>
        
      </div>
    );
};

export default CartAnimation;*/

