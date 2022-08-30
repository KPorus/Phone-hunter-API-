let loadPhone = (search) =>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
    .then(res => res.json())
    .then(data => display(data.data))
}

let display = phone =>{
    let phoneContainer = document.getElementById(`phone-container`);
    phoneContainer.textContent = " ";
    let err = document.getElementById(`error`)
    if(phone.length == 0)
    {
      err.classList.remove(`d-none`);
    }
    else{
      err.classList.add(`d-none`);
    }
    phone.forEach(phones => {
        let phonebody = document.createElement(`div`);
        phonebody.classList.add(`col`);
        phonebody.innerHTML = `
        <div class="card bg-dark text-white">
          <img src="${phones.image}" class="card-img-top img-fluid w-100" alt="...">
          <div class="card-body">
            <h5 class="card-title">Phone name: ${phones.phone_name}</h5>
            <h5 class="card-title">Brand: ${phones.brand}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        `
        phoneContainer.appendChild(phonebody);
    });
    spinner(false);
}

document.getElementById(`search`).addEventListener(`click`,function(){
  spinner(true);
    let phoneSearch = document.getElementById(`phone-search`).value;
    let search =phoneSearch;
    loadPhone(search);
})

let spinner = isloading =>{
  let spin = document.getElementById(`spinner`);
  if(isloading)
  {
    spin.classList.remove(`d-none`);
  }
  else
  {
    spin.classList.add(`d-none`);
  }
}