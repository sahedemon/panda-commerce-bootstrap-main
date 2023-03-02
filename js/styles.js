/*৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে।
  তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।
  */



document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
    const text = event.target.value;
  
    const deleteButton = document.getElementById('btn-delete');
    if(text === 'email'){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled', true);
    }
      
})


/**
 * ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
 */
const someH2 = document.querySelectorAll('h2');
for (const h2 of someH2) {
   h2.style.color= 'lightblue';
    
}

//3. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 


const backPackId = document.getElementById('backpack').addEventListener('click', function(){
    document.body.style.backgroundColor='tomato';
})

/**
  4.card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
*/



const broder = document.getElementsByClassName('card')
 for (const card of broder) {
     card.style.borderRadius= '30px'

}

 /* ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 
 */
function handleOnClick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText= 'handle by function attached on onclick attribute';
   }

// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে card টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 
   const btnRemoves = document.getElementsByClassName('button');
   
  const ponts = document.getElementById('shoes')

  btnRemoves.addEventListener('click', function(){
    // ponts.parentNode.remove();
    console.log('remove')
  })


   