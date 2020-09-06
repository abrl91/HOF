const createFormBtn = document.getElementById('create-form__btn');

const myForm = `
    <label>test</label>
    <input type="text">
`

createFormBtn.addEventListener('click', FormGenerator(
    '123',
    myForm,
    'success :)',
    'failed :(',
    window.location.href = "http://www.facebook.com",
    window.location.href = "http://www.w3schools.com"
).showForm);
