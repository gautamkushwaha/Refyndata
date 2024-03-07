import React from 'react';
<<<<<<< HEAD

export default function ServiceSection() {
  return (
    <section className="pb-100 py-12 ml-50 ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-700">We Expertise On This Field</h2>
        <p className="text-gray-600 mt-2 px-50 w-[40%] text-center mx-auto pb-10">
        More than just services, we're your partner. We collaborate with you to understand your unique needs and deliver customized solutions that drive real results.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-40 ">
          {/* Service Card 1 */}
          <div className="bg-[#0079A0] py-12 rounded-lg flex flex-col items-center px-5">
            <img src="https://img.freepik.com/premium-vector/handshake-icon-friendship-sign-partnership-symbol-hand-shake-vector-icon_564974-1217.jpg?w=1060" alt="Service 1" className="w-24 h-24 my-10 text-center" />
            <h3 className="text-4xl text-white font-extrabold text-center">Consultation</h3>
          </div>

          {/* Service Card 2 */}
          <div className="bg-[#0079A0] py-12 rounded-lg flex flex-col items-center px-5">
            <img src="https://img.freepik.com/premium-vector/handshake-icon-friendship-sign-partnership-symbol-hand-shake-vector-icon_564974-1217.jpg?w=1060" alt="Service 1" className="w-24 h-24 my-10 text-center" />
            <h3 className="text-4xl text-white font-extrabold text-center">Consultation</h3>
          </div>

          {/* Service Card 3 */}
          <div className="bg-[#0079A0] py-12 rounded-lg flex flex-col items-center px-5">
            <img src="https://img.freepik.com/premium-vector/handshake-icon-friendship-sign-partnership-symbol-hand-shake-vector-icon_564974-1217.jpg?w=1060" alt="Service 1" className="w-24 h-24 my-10 text-center" />
            <h3 className="text-4xl text-white font-extrabold text-center">Consultation</h3>
          </div>

          {/* Service Card 4 */}
          <div className="bg-[#0079A0] py-12 rounded-lg flex flex-col items-center px-5">
            <img src="https://img.freepik.com/premium-vector/handshake-icon-friendship-sign-partnership-symbol-hand-shake-vector-icon_564974-1217.jpg?w=1060" alt="Service 1" className="w-24 h-24 my-10 text-center" />
            <h3 className="text-4xl text-white font-extrabold text-center">Consultation</h3>
          </div>

          {/* Service Card 5 */}
          <div className="bg-[#0079A0] py-12 rounded-lg flex flex-col items-center px-5">
            <img src="https://img.freepik.com/premium-vector/handshake-icon-friendship-sign-partnership-symbol-hand-shake-vector-icon_564974-1217.jpg?w=1060" alt="Service 1" className="w-24 h-24 my-10 text-center" />
            <h3 className="text-4xl text-white font-extrabold text-center">Consultation</h3>
          </div>

          {/* Service Card 6 */}
          <div className="bg-[#0079A0] py-12 rounded-lg flex flex-col items-center px-5">
            <img src="https://img.freepik.com/premium-vector/handshake-icon-friendship-sign-partnership-symbol-hand-shake-vector-icon_564974-1217.jpg?w=1060" alt="Service 1" className="w-24 h-24 my-10 text-center" />
            <h3 className="text-4xl text-white font-extrabold text-center">Consultation</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
=======
import styles from '@/styles/CartAnimation.module.css'; // Ensure you create and link this CSS file


const CartAnimation = () => {
    return (
      <div className={styles.Service_cart}>
        <div className={styles.cart_item}>
         <div className={styles.content}>
          <div className={styles.background_content}>
          <span className={styles.span_con}> Consultancy</span>
          Content goes here. This could be the item description or other details sdjfsdjfksl 
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
          Content goes here. This could be the item description or other details sdjfsdjfksl 
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
          Content goes here. This could be the item description or other details sdjfsdjfksl 
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
          Content goes here. This could be the item description or other details sdjfsdjfksl 
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
          Content goes here. This could be the item description or other details sdjfsdjfksl 
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
          Content goes here. This could be the item description or other details sdjfsdjfksl 
          <button className={styles.button_cart}>More...</button>
          </div>
          </div>
         <div className={styles.background}></div>
         <img className={styles.item_image} src="/hands.png" alt="" />
 
         <p className={styles.serivce_text_on}>consultancy</p>
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

>>>>>>> 062ddabf1efa7563d040098cad0176ce4357a2e7
