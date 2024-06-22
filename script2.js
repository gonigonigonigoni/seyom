document.addEventListener('DOMContentLoaded', () => {
    const hamster = document.getElementById('hamster');
    hamster.addEventListener('click', () => {
        window.location.href = 'home.html';
    });

    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        heart.style.animationDelay = `${index * 1}s`;
    });
});
// script2.js

// 페이지가 로드될 때 실행되는 함수
window.onload = function() {
    // 알림창을 띄우기 위한 함수 정의
    function showWelcomeMessage() {
        alert("어서오세요! 이 곳을 찾아내셨군요!");

        // 사용자 선택 받기
        var answer = prompt("당신은 햄스터를 좋아하나요? (네/아니요)");

        // 사용자의 선택에 따라 다른 메시지 보여주기
        if (answer === "네") {
            alert("정말 잘 찾아오셨어요♡⁺◟(●˙▾˙●)◞⁺♡\n 얼른 귀여운 햄스터들의 정보를 알아보러 가요!");
        } else if (answer === "아니요") {
            alert("아쉬운 소식이네요 :(˘•̥ㅁ•̥˘ ): \n하지만 그래도 한 번 둘러보세요 !");
        } else {
            alert("올바른 답변을 입력해주세요.");
            showWelcomeMessage(); // 잘못된 입력 시 다시 함수 호출
        }
    }

    // 페이지 로드 후 바로 실행
    showWelcomeMessage();
};
