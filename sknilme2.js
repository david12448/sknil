// 1. URL의 공통된 부분 (기본 주소)을 변수로 저장합니다.
const BASE_URL = 'https://eapp.emart.com/branch/view.do?id=';  //

// 2. 각 지점의 고유한 ID만 객체에 저장합니다.
const martIds = {
'이마트 가든5점': '1118',
'이마트 구로점': '1012',
'이마트 마포점': '1123',
'이마트 명일점': '1041',
'이마트 목동점': '1104',
'이마트 목동점': '1117',
'이마트 미아점': '1093',
'이마트 수색점': '1108',
'이마트 수서점': '1029',
'이마트 신도림점': '1083',
'이마트 신월점': '1013',
'이마트 신촌점': '1139',
'이마트 양재점': '1062',
'이마트 여의도점': '1087',
'이마트 역삼점': '1095',
'이마트 영등포점': '1106',
'이마트 왕십리점': '1090',
'이마트 용산점': '1060',
'이마트 월계점': '1059',
'이마트 은평점': '1033',
'이마트 자양점': '1080',
'이마트 창동점': '1001',
'이마트 천호점': '1016',
'이마트 청계천점': '1089',
'이마트 하월곡점': '1125',
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
