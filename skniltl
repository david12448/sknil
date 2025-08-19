// 각 지점의 지역과 고유한 ID를 함께 저장합니다.
const martDetails = {
    '롯데마트 맥스 영등포점': {
        area: '%EC%84%9C%EC%9A%B8',  // 서울
        id: '103'
    },
    '롯데마트 맥스 금천점': {
        area: '%EC%84%9C%EC%9A%B8', // 서울
        id: '335'
    },
    '롯데마트 맥스 송천점': {
        area: '%EC%A0%84%EB%9D%BC%EB%B6%81%EB%8F%84', // 전라북도
        id: '110'
    },
    // 필요에 따라 더 많은 지점을 여기에 추가하세요.
    // '지점명': { area: '지역_URL_인코딩', id: '숫자' },
};

// 페이지가 로드되었을 때 실행
window.addEventListener('DOMContentLoaded', () => {
    // 특정 클래스를 가진 모든 링크를 찾습니다.
    const customLinks = document.querySelectorAll('.my-custom-mart-link');

    // 각 링크에 클릭 이벤트 리스너를 추가합니다.
    customLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // 기본 링크 이동을 막습니다.
            event.preventDefault();

            // HTML의 data-link-id 속성에서 지점명을 가져옵니다.
            const linkId = this.getAttribute('data-link-id');

            // JavaScript 객체에서 해당 지점의 상세 정보를 찾습니다.
            const linkDetail = martDetails[linkId];

            if (linkDetail) {
                // 지역과 ID를 사용하여 완전한 URL을 조합합니다.
                const finalUrl = `https://company.lottemart.com/mobiledowa/market/search_shop.asp?m_area=${linkDetail.area}&m_market=${linkDetail.id}`;

                // 새 탭에서 완성된 주소로 이동합니다.
                window.open(finalUrl, '_blank');
            } else {
                console.error(`Link ID "${linkId}" not found in martDetails object.`);
            }
        });
    });
});
