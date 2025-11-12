document.addEventListener('DOMContentLoaded', () => {
    // Proste przewijanie do sekcji po kliknięciu linku w nawigacji
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Przykład prostej walidacji formularza (możesz rozbudować)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Zapobiega domyślnej wysyłce formularza

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Wszystkie pola muszą być wypełnione!');
            } else if (!validateEmail(email)) {
                alert('Proszę wprowadzić prawidłowy adres email!');
            } else {
                alert('Dziękujemy za wiadomość, ' + name + '! Skontaktujemy się z Tobą wkrótce.');
                // Tutaj w prawdziwej aplikacji wysłałbyś dane formularza na serwer (np. za pomocą fetch API)
                contactForm.reset(); // Czyści formularz po wysłaniu
            }
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Dodatkowy efekt: zmiana koloru tła nagłówka po przewinięciu
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Po przewinięciu o 50px
            header.style.backgroundColor = '#222';
        } else {
            header.style.backgroundColor = '#333';
        }
    });
});