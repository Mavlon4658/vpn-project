const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

let paymentCheckbox = document.querySelector('.payment-modal .form_checkbox input[type="checkbox"]'),
    promoCode = document.querySelector('.payment-modal .promocode'),
    promoCodeBtn = document.querySelector('.payment-modal .promocode button'),
    promoCodeInp = document.querySelector('.payment-modal .promocode input');

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

let qrCheckbox = document.querySelectorAll('.qr-modal .form_checkbox input')[1],
    qrEmail = document.querySelector('.qr-modal .email'),
    qrModal = document.querySelector('.qr-modal'),
    qrModalClose = document.querySelector('.qr-modal .main-modal__close');

const handleQrCheckbox = () => {
    if (qrCheckbox.checked) {
        qrEmail.classList.add('active');
    } else {
        qrEmail.classList.remove('active');
    }
}

handleQrCheckbox();
qrCheckbox.oninput = () => {
    handleQrCheckbox();
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
        qrModal.classList.add('active')
        bankCard.classList.add('error');
    }
}

const modal1 = document.querySelector('.payment-modal');
const modal1Open = document.querySelector('.payment-modal__open');
const modal1Close = document.querySelector('.payment-modal .main-modal__close');

modal1Open.onclick = e => {
    e.preventDefault();
    modal1.classList.add('active');
    bodyHidden();
}

modal1Close.onclick = e => {
    e.preventDefault();
    modal1.classList.remove('active');
    bodyVisible();
}

const cardsModal = document.querySelector('.cards-modal');
const cardsModalOpen = document.querySelector('.cards-modal__open');
const cardsModalClose = document.querySelector('.cards-modal .main-modal__close');
const cardsModalBg = document.querySelector('.cards-modal .main-modal__bg');
const cardsModalItem = document.querySelectorAll('.cards-modal .payment_card');

cardsModalOpen.onclick = e => {
    e.preventDefault();
    cardsModal.classList.add('active');
}

cardsModalClose.onclick = () => {
    cardsModal.classList.remove('active');
}

cardsModalBg.onclick = () => {
    cardsModal.classList.remove('active');
}

cardsModalItem.forEach(el => {
    el.onclick = () => {
        cardsModal.classList.remove('active');
    }
})

const bankCardModal = document.querySelector('.bank-card-modal');
const bankCardOpen = document.querySelector('.bank-card-modal__open');
const bankCardClose = document.querySelector('.bank-card-modal .main-modal__close');

bankCardOpen.onclick = e => {
    e.preventDefault();
    bankCardModal.classList.add('active');
}

bankCardClose.onclick = () => {
    bankCardModal.classList.remove('active');
    modal1.classList.remove('active');
    bodyVisible();
}

qrModalClose.onclick = () => {
    qrModal.classList.remove('active');
    bankCardModal.classList.remove('active');
    modal1.classList.remove('active');
    bodyVisible();
    
}