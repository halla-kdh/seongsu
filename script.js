document.addEventListener('DOMContentLoaded', () => {
    // 1. "학교 더 알아보기" 버튼 클릭 시 'vision' 섹션으로 부드럽게 스크롤
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    learnMoreBtn.addEventListener('click', () => {
        document.getElementById('vision').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // 2. 네비게이션 링크 클릭 시 부드럽게 스크롤
    document.querySelectorAll('.main-header nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. 스크롤 시 요소 나타나게 하는 애니메이션 (간단 구현)
    const sections = document.querySelectorAll('section:not(#hero)');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        observer.observe(section);
    });
});
