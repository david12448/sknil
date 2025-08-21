// 1. URL의 공통된 부분 (기본 주소)을 변수로 저장합니다.
const BASE_URL = 'https://eapp.emart.com/branch/view.do?id=';  //

// 2. 각 지점의 고유한 ID만 객체에 저장합니다.
const martIds = {
'이마트 가든5점': '1118',
'구로점': '1012',
'마포점': '1123',
'명일점': '1041',
'목동점': '1104',
'목동점': '1117',
'미아점': '1093',
'수색점': '1108',
'수서점': '1029',
'신도림점': '1083',
'신월점': '1013',
'신촌점': '1139',
'양재점': '1062',
'여의도점': '1087',
'역삼점': '1095',
'영등포점': '1106',
'왕십리점': '1090',
'용산점': '1060',
'월계점': '1059',
'은평점': '1033',
'자양점': '1080',
'창동점': '1001',
'천호점': '1016',
'청계천점': '1089',
'하월곡점': '1125',
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
