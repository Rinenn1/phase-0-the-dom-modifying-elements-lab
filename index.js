//removing the main tag with an id of 'main'
const main = document.getElementById('main');

main.remove();

//has a 'newHeader' variable pointing to an <h1> node and setting it's id name to equal 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

//the <h1> includes the text \"is the champion\" inside it"
newHeader.textContent = "ISAAC is the champion";