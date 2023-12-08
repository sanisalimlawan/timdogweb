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
    text: `<h1> I no longer have to sniff other dog for love. I\' have found the hottest cogi Tin dog. woof,</h1>`,
    img: '<img src="images/dog-img.jpg" alt="dog profile" class="dog-img">'
   },
  //  {
  //    text: 'I no longer have to sniff other dog for love. I\' have found the hottest cogi Tin dog. woof',
  //    img: `<img src="images/angela.png" alt="dog profile" class="dog-img">`
  //  },
  //  {
  //   text: 'I no longer have to sniff other dog for love. I\' have found the hottest cogi Tin dog. woof',
  //   img: `<img src="images/HTMAA-thumbnail.png" alt="dog profile" class="dog-img">`
  //  }
 ];

 document.querySelector('.tes').innerHTML = data.text.value;
 console.log0(data)

 