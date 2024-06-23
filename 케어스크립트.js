// JavaScript 코드
function scrollToSection(sectionId) {
    // 해당 sectionId에 해당하는 article 요소를 찾습니다.
    var articles = document.querySelectorAll('article');
    articles.forEach(function(article) {
        // 해당 article의 id와 sectionId가 일치하면 보이게 처리합니다.
        if (article.id === sectionId) {
            article.style.display = 'block';
        } else {
            // 일치하지 않으면 숨깁니다.
            article.style.display = 'none';
        }
    });

    // 스크롤 처리 - 해당 article의 위치로 스크롤링합니다.
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
