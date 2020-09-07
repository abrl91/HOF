const createFormBtn = document.getElementById('create-form__btn');

const myForm = `
    <label>test</label>
    <input type="text">
`

const exampleForm = FormGenerator(
    'example1',
    myForm,
    'success :)',
    'failed :(',
    () => {
        setTimeout(() => {
            window.location.href = "http://www.facebook.com"
        })
    },
    () => {
        setTimeout(() => {
            window.location.href = "http://www.w3schools.com"
        })
    }
    )

createFormBtn.addEventListener('click', exampleForm.createForm);
