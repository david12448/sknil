// 1. URL의 공통된 부분 (기본 주소)을 변수로 저장합니다.
const BASE_URL = 'https://eapp.emart.com/branch/view.do?id=';

// 2. 각 지점의 고유한 ID만 객체에 저장합니다.
const martIds = {
    '이마트 분당점': '1118',
    '이마트 가든5점': '1499',
    '이마트 월계점': '1516',
    // ...더 많은 지점을 여기에 '지점명': 'ID' 형식으로 추가하세요.
};

// 3. 페이지 로드 후 실행될 함수
window.addEventListener('DOMContentLoaded', (event) => {
    const customLinks = document.querySelectorAll('.my-custom-mart-link');

    customLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // data-link-id 속성에서 ID를 가져옵니다.
            const linkId = this.getAttribute('data-link-id');

            // 정의된 ID가 있는지 확인하고 URL을 조합하여 이동합니다.
            if (linkId && martIds[linkId]) {
                const finalUrl = BASE_URL + martIds[linkId];
                window.location.href = finalUrl;
            } else {
                console.error(`Link ID "${linkId}" not found in martIds object.`);
            }
        });
    });
});
