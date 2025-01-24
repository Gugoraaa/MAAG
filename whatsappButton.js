const whatsappButton = document.getElementById('whatsapp-button');
const footer = document.getElementById('page-footer');

function adjustButtonPosition() {
    const buttonRect = whatsappButton.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();
    if (buttonRect.bottom > footerRect.top) {
        whatsappButton.style.bottom = `${window.innerHeight - footerRect.top + 20}px`;
    } else {
        whatsappButton.style.bottom = '3rem'; 
    }
}

window.addEventListener('scroll', adjustButtonPosition);
window.addEventListener('resize', adjustButtonPosition);

adjustButtonPosition();
