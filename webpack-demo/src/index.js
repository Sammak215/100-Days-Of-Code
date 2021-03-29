// import _ from 'lodash';
import printMe from './print.js';

// function component() {
function getComponent() {

  const element = document.createElement('div');
  const btn = document.createElement('button');
  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return import('lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;
}
    
  getComponent().then((component) => {
    document.body.appendChild(component);
  });

//   element.appendChild(btn);

  
//   return element;
// }

// document.body.appendChild(component());