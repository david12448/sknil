// 대형마트 지점별 주소를 관리하는 객체
const martLinks = {
    '이마트 가든5점': 'https://eapp.emart.com/branch/view.do?id=1118',
    '이마트 월계점': 'https://eapp.emart.com/branch/view.do?id=',
    '홈플러스 강서점': 'https://corporate.homeplus.co.kr/store/gangseo.aspx',
    '홈플러스 잠실점': 'https://my.homeplus.co.kr/store/store_detail?storId=685',
    '롯데마트 강변점': 'https://company.lottemart.com/mobiledowa/market/search_shop.asp?m_area=%EC%84%9C%EC%9A%B8&m_market=301',
    // ...더 많은 지점을 여기에 추가하세요.
    // '지점명': '해당 지점의 URL',
};

// 페이지 로드 후 실행될 함수
window.addEventListener('DOMContentLoaded', (event) => {
    // 특정 클래스를 가진 모든 링크 요소를 선택합니다.
    const customLinks = document.querySelectorAll('.my-custom-mart-link');

    customLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 링크 이동을 막습니다.

            // data-link-id 속성에서 ID를 가져옵니다.
            const linkId = this.getAttribute('data-link-id');

            // 정의된 링크가 있는지 확인하고 이동합니다.
            if (linkId && martLinks[linkId]) {
                window.location.href = martLinks[linkId];
            } else {
                console.error(`Link ID "${linkId}" not found in martLinks object.`);
            }
        });
    });
});
