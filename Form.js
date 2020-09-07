function FormGenerator(id, formBody, messageSuccess, messageError, actionSuccess, actionFailed) {


    const renderForm = () =>  `
            <form id="${id}">
                ${formBody}
                <div>
                    <button id="send" type="submit">send</button>
                </div>
            </form>
        `;

    const createForm = () => {
        document.body.insertAdjacentHTML('beforeend', renderForm());

        document.getElementById(id).addEventListener('submit', function (e) {
            e.preventDefault();
            const formInputs = Array.from(e.target.elements);
            if (validateForm(formInputs)) {
                success();
            } else {
                failed();
            }
        })
    }

    const validateForm = (form) => {
        let isValid = true;

        for (let i = 0; i < form.length; i++) {
            if (form[i].type === 'submit') break;

            if (form[i].type === 'text') {
                if (!form[i].value.trim()) {
                    isValid = false;
                }
            }
        }
        return isValid;
    }


    const success = () => {
        messageSuccess = `<div>success</div>`
        document.body.insertAdjacentHTML('beforeend', messageSuccess);
        actionSuccess();
    }

    const failed = () => {
        messageError = `<div>failed</div>`
        document.body.insertAdjacentHTML('beforeend', messageError);
        actionFailed();
    }

    return {
        createForm
    }
}
