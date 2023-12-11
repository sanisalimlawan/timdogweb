const ul = document.querySelector('ul')
const menu = document.querySelector('.menu').addEventListener('click', e => {
   if(ul.classList.contains('open')){
      ul.classList.remove('open')
   }else{
      ul.classList.add('open')
   }
})

const data = [
   {
    text: ` I no longer have to sniff other dog for love. I\' have found the hottest cogi Tin dog. woof,`,
    img:  `<img src="images/dog-img.jpg" alt="dog profile" class="dog-img">`
   },
   {
     text: 'I no longer have to sniff other dog for love. I\' have found the hottest cogi Tin dog. woof',
     img: `<img src="images/angela.png" alt="dog profile" class="dog-img">`
   },
   {
    text: 'I no longer have to sniff other dog for love. I\' have found the hottest cogi Tin dog. woof',
    img: `<img src="images/HTMAA-thumbnail.png" alt="dog profile" class="dog-img">`
   }
 ];

 const datas = data;
 const dater = itrator(datas);

 nextprof();

 document.querySelector('.next-i').addEventListener('click', nextprof);

 function nextprof(){
   const currentProfile = dater.next().value;
   if(currentProfile !== undefined){
   document.querySelector('.index').innerHTML = `
   <h1>${currentProfile.text}</h1>
   <span>${currentProfile.img}</span>
 `;
      console.log(currentProfile)
   }else{
      const prof = data;
const kaya = itrator(prof);
document.querySelector('.prev-i').addEventListener('click', nextprofe);

function nextprofe(){
  const currentProfile = kaya.next().value;
  if(currentProfile !== undefined){
  document.querySelector('.index').innerHTML = `
  <h1>${currentProfile.text}</h1>
  <span>${currentProfile.img}</span>
`;
     console.log(currentProfile)
  }
}


function itrator(data){
 let nextIndex = 0;
 

 return{
  next: function () { 
  return    nextIndex < data.length ?
  {value: data[nextIndex --], done: false} :
  {done: true}
  }
 }
}
   }
 }


 function itrator(data){
  let nextIndex = 0;
  

  return{
   next: function () { 
   return    nextIndex < data.length ?
   {value: data[nextIndex ++], done: false} :
   {done: true}
   }
  }
}