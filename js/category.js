document.addEventListener('DOMContentLoaded', function () {
    const slidebarItems = document.querySelectorAll('._slidebar');

    let activeItem = null;

    slidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            if (activeItem !== null) {
                activeItem.classList.remove('active');
            }

            if (activeItem !== item) {
                item.classList.add('active');
                activeItem = item;
            } else {
                activeItem = null;
            }
        });
    });

    const contentFrame = document.getElementById('contentFrame');

    contentFrame.addEventListener('load', () => {
        const iframeDocument = contentFrame.contentDocument || contentFrame.contentWindow.document;
        const iframeBodyId = iframeDocument.body.id;

        slidebarItems.forEach(item => {
            if (item.querySelector('a').getAttribute('href') === `${iframeBodyId}.html`) {
                if (activeItem !== null) {
                    activeItem.classList.remove('active');
                }
                item.classList.add('active');
                activeItem = item;
            }
        });
    });
});
