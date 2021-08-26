// const user = {id:2, name :'amir'};
//  const item = JSON.stringify(user);
//  console.log(user);

// // akta objest ke JSON.stringfy kore string akaredekha jay // tar por abar ai srting ke objest akare korte JSON.parse korte seta object akare hoye jabe //
// const shop ={
//     name: 'aliya soet',
//     addesss: 'borobari',
//     prducts: ['laptop', 'mobil', 'watch'],
//     owner :{
//         name: 'anik',
//         profeshon: 'actor'
//     },
//     isExpensive : false,
// }
// const shopStingiFied = JSON.stringify(shop);
// // console.log(shop);
// console.log(shopStingiFied);
// const converted = JSON.parse(shopStingiFied);
// console.log(converted);


/// 



  function loadDate(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(date  => console.log(date))
  }

  function loadUser(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => displayUsers(json));
  }
  function loadPosts(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(rap => rap.json())
      .then(post => console.log(post))
  }

  function displayUsers(json){
      const ul = document.getElementById('users');

    for (const user of json){
        // console.log(user.name)
        const li = document.createElement('li');
        li.innerText = `email:${user.email} name: ${user.name}` ;
        ul.appendChild(li);
    }
  }



  