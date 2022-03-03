function component() {
    let element = document.createElement('div');
  
    // Lodash, now imported by this script
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.textContent = "Home page";
  
    return element;
  }
  
  //document.body.appendChild(component());

  export default component;