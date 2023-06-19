
const alertSave = document.querySelector('#alertSave');
function save(){
    alert("Booking is succesfully saved.")
}
alertSave.addEventListener('click', save);

const alertCancel = document.querySelector('#alertCancel');
function cancel(){
    alert("Booking can not be saved.")
}
alertCancel.addEventListener('click', cancel);