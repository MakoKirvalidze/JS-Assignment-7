//N1 დავალება/////////////
function expo(num, power, callback) {
    if (power === 0) {
      return callback(1);
    } else {
      return expo(num, power - 1, (result) => {
        return callback(result * num);
      });
    }
  }
  
  expo(4, 5, (result) => {
    console.log(result); 
  });

//N2 დავალება///////////
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    const post = document.createElement('div');
    post.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.body}</p>
    `;
    document.body.appendChild(post);
  })
  .catch(error => console.error('Error:', error));


  //N3 დავალება//////////
  function deepCopy(obj) {
    return new Promise((resolve, reject) => {
      if (typeof obj !== 'object' || obj === null) {
        reject(new Error('Argument is not an object'));
      } else {
        const copy = Array.isArray(obj) ? [] : {};
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            copy[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
          }
        }
        resolve(copy);
      }
    });
  }
  
  deepCopy({ a: 1, b: { c: 2 } })
    .then(result => console.log(result))
    .catch(error => console.error(error));