function FormGenerator(id, formBody, messageSuccess, messageError, actionSuccess, actionFailed) {


    const renderForm = () =>  `
            <form id="${id}">
                ${formBody}
                <div>
                    <button id="send" type="button">send</button>
                </div>
            </form>
        `;

    const showForm = () => {
        document.body.insertAdjacentHTML('beforeend', renderForm());

        let isSuccess = false;
        document.getElementById('send').addEventListener('click', function () {
            if (isSuccess) {
                success();
            } else {
                failed();
            }
        })
    }


    const success = () => {
        messageSuccess = `<div>success</div>`
        document.body.insertAdjacentHTML('beforeend', messageSuccess);
        actionSuccess = window.location.href = "http://www.facebook.com";
    }

    const failed = () => {
        messageError = `<div>failed</div>`
        document.body.insertAdjacentHTML('beforeend', messageError);
        actionFailed = window.location.href = "http://www.w3schools.com";
    }

    return {
        showForm,
        success,
        failed
    }
}
