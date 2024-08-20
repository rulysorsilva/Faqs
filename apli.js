document.addEventListener('DOMContentLoaded', function () {
    const mob = document.getElementsByClassName('img-mobile');
    const desk = document.getElementsByClassName('img-desktop');
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            faqItems.forEach(i => {
                if (i !== item) {
                    i.querySelector('.faq-answer').style.maxHeight = null;
                    i.classList.remove('active');
                }
            });

            const answer = item.querySelector('.faq-answer');

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                item.classList.remove('active');
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                item.classList.add('active');
            }
        });
    });

    changeBackground()

    document.body.onresize = function () {
        changeBackground()
    }

    function changeBackground() {
        if (document.body.clientWidth < 767) {
            desk[0].classList.add('d-none');
            mob[0].classList.remove('d-none')
        } else {
            mob[0].classList.add('d-none');
            desk[0].classList.remove('d-none');
        }
    }
});