

let people = customers.results;
let selectedUl = document.querySelector('ul');

people.forEach((currentItem, index) => {
  // pictures
  const _li = document.createElement('li');

  const _pic = document.createElement('img');
  _pic.src =  currentItem.picture.large;
  _li.appendChild(_pic);

  const _names = document.createElement('p');
  _names.textContent = `${currentItem.name.first} ${currentItem.name.last}`;
  _names.classList.add('boldName');
  _li.appendChild(_names);

  const _email = document.createElement('p');
  _email.textContent = `${currentItem.email}`;
  _email.classList.add('emailFont');
  _li.appendChild(_email);

  const _addressOne = document.createElement('p');
  _addressOne.textContent = `${currentItem.location.street}`;
  _addressOne.classList.add('addressTextPhone')
  _li.appendChild(_addressOne);

  const _addressTwo = document.createElement('p');
  _addressTwo.textContent = `${currentItem.location.city} ${currentItem.location.state} ${currentItem.location.postcode}`;
  _addressTwo.classList.add('addressTextPhone')
  _li.appendChild(_addressTwo);

  const _phoneNumber = document.createElement('p');
  _phoneNumber.textContent = `${currentItem.phone}`;
  _phoneNumber.classList.add('addressTextPhone')
  _li.appendChild(_phoneNumber);

  const _ss = document.createElement('p');
  _ss.textContent = `${currentItem.id.value}`;
  _li.appendChild(_ss);

selectedUl.appendChild(_li);
})
