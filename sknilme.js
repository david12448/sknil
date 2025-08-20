// 1. URL의 공통된 부분 (기본 주소)을 변수로 저장합니다.
const BASE_URL = 'https://store.emart.com/branch/view.do?id=';  // ← store.emart.com 으로 수정

// 2. 각 지점의 고유한 ID만 객체에 저장합니다.
const martIds = {
    '이마트 분당점': '1118',
    '이마트 가든5점': '1499',
    '이마트 월계점': '1516',
    // 필요시 계속 추가
};

// 3. 페이지 로드 후 실행될 함수
window.addEventListener('DOMContentLoaded', () => {
    const customLinks = document.querySelectorAll('.my-custom-mart-link');

    customLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const linkId = this.getAttribute('data-link-id');

            if (linkId && martIds[linkId]) {
                const finalUrl = BASE_URL + martIds[linkId];
                window.open(finalUrl, '_blank'); // 새창 열기
            } else {
                console.error(`Link ID "${linkId}" not found in martIds object.`);
            }
        });
    });
});
