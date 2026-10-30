/* BLOG - preview posts and data synchronization */
const teaserCards = document.querySelectorAll(".teaser__card");

function getBlogPostsFromHTML() {
    return fetch('./html/blog.html')
        .then(response => response.text())
        .then(html => {
            const blogDocument = new DOMParser().parseFromString(html, 'text/html');

            return Array.from(blogDocument.querySelectorAll('.post'))
                .slice(0, 3)
                .map(post => ({
                    title: post.querySelector('h3')?.textContent.trim() || '',
                    image: post.querySelector('img')?.getAttribute('src') || ''
                }));
        });
}

function downloadBlogData(data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'blog_data.json';
    link.click();
    URL.revokeObjectURL(url);
}

function syncBlogData() {
    Promise.all([
        fetch('./js/blog_data.json').then(response => response.json()),
        getBlogPostsFromHTML()
    ])
        .then(([currentData, blogPosts]) => {
            teaserCards.forEach((card, index) => {
                const postData = blogPosts[index];

                if (!postData) {
                    return;
                }

                card.querySelector('.teaser__thumbnail').setAttribute('src', postData.image);
                card.querySelector('.teaser__title').textContent = postData.title;
            });

            if (JSON.stringify(currentData) !== JSON.stringify(blogPosts)) {
                downloadBlogData(blogPosts);
            }
        })
        .catch(error => console.error('Error synchronizing blog data:', error));
}

syncBlogData();

/* Slider controls */
const teaserCardWrapper = document.querySelector('.teaser__card-wrapper');
const nextCardButton = document.querySelector('.next-card');
let isTeaserAnimating = false;

function setTeaserCardPositions(cards) {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'middle', 'bottom');
        card.classList.add(['active', 'middle', 'bottom'][index]);
    });
}

function showNextTeaserCard() {
    if (isTeaserAnimating || !teaserCardWrapper || !nextCardButton || typeof gsap === 'undefined') {
        return;
    }

    const cards = Array.from(teaserCardWrapper.querySelectorAll('.teaser__card'));
    const frontCard = cards[0];

    if (cards.length < 3) {
        return;
    }

    isTeaserAnimating = true;
    nextCardButton.disabled = true;

    gsap.to(frontCard, {
        yPercent: 130,
        duration: 0.25,
        ease: 'power4.in',
        onComplete: () => {
            teaserCardWrapper.appendChild(frontCard);
            const rotatedCards = Array.from(teaserCardWrapper.querySelectorAll('.teaser__card'));

            setTeaserCardPositions(rotatedCards);
            gsap.set(rotatedCards, { clearProps: 'transform' });
            gsap.set(frontCard, { yPercent: 130 });
            gsap.to(frontCard, {
                yPercent: 0,
                duration: 0.25,
                ease: 'power4.out',
                onComplete: () => {
                    isTeaserAnimating = false;
                    nextCardButton.disabled = false;
                }
            });
        }
    });
}

nextCardButton?.addEventListener('click', showNextTeaserCard);
