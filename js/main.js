let paymentCheckbox = document.querySelector('.payment-modal .form_checkbox input[type="checkbox"]'),
    promoCode = document.querySelector('.payment-modal .promocode'),
    promoCodeBtn = document.querySelector('.promocode button'),
    promoCodeInp = document.querySelector('.promocode input');

const checkPaymentCheckbox = () => {
    if (paymentCheckbox.checked) {
        promoCode.classList.add('active');
    } else {
        promoCode.classList.remove('active');
    }
}

if (paymentCheckbox) {
    checkPaymentCheckbox();
    paymentCheckbox.oninput = () => {
        checkPaymentCheckbox();
    }

    promoCodeBtn.onclick = () => {
        promoCode.classList.add('error');
    }
}

let bankCheckbox = document.querySelectorAll('.bank-card-modal .form_checkbox input')[1],
    bankEmail = document.querySelector('.bank-card-modal .email'),
    bankSubmit = document.querySelector('.bank-card-modal .submit-btn'),
    bankCard = document.querySelectorAll('.bank-card__data_item')[0];

const checkBankCheckbox = () => {
    if (bankCheckbox.checked) {
        bankEmail.classList.add('active');
    } else {
        bankEmail.classList.remove('active');
    }
}

if (bankCheckbox) {
    checkBankCheckbox();

    bankCheckbox.oninput = () => {
        checkBankCheckbox()
    };

    bankSubmit.onclick = () => {
        bankCard.classList.add('error')
    }
}