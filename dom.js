document.getElementById('btn').addEventListener('click', registerUser);

function registerUser(e){

    e.preventDefault();

    
    const name = document.getElementById('name').value
    const mail = document.getElementById('mail').value
    const phone = document.getElementById('phone').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value

    // console.log(name);
    // console.log(mail);
    // console.log(phone);
    // console.log(date);
    // console.log(time);


    const obj = {
        'name': name,
        'mail': mail,
        'phone': phone,
        'date': date,
        'time': time
    }

    // localStorage.setItem('name', name);
    // localStorage.setItem('mail', mail);
    // localStorage.setItem('phone', phone);
    // localStorage.setItem('date', date);
    // localStorage.setItem('time', time);

    // localStorage.setItem(mail, JSON.stringify(obj))
    axios.post('https://crudcrud.com/api/7b7fb21a339b4a21bb9fb2adc2c94b39/bookingappointmentdata', obj)
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
}

