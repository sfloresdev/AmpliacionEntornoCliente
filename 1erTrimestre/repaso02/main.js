const zona = document.querySelectorAll('.article');

zona.forEach(tarjeta => {
    const info = tarjeta.querySelector('.info-extra');

    tarjeta.addEventListener('mouseenter', () => {
        const tamañoCompleto = info.scrollHeight + 'px';
        info.style.height = tamañoCompleto;
        info.style.opacity = '1';
    });

    tarjeta.addEventListener('mouseleave', () => {
        info.style.height = '0';
        info.style.opacity = '0';
    });
});