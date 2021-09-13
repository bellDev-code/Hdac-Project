// 여기엔 설정 or 초기값들을 집어넣음


module.exports = {
    // ---- 홈 화면 ----

    // 아티스트 소개 모듈
    // 아티스트 사진, 아티스트 이름, 인터뷰내용
    getArtistList : {
        query : `select image_src, artist_name, comment
                 from t_artist`
    },

    // 음악 리스트 모듈
    // 앨범사진, 앨범이름, 가수, 목표금액, 남은기한, D-Day
    getFundingList : {
        query : `select t1.image_src, t1.title, t3.artist_name, t4.target_amount, t4.end_date 
                 from t_music_album t1, t_music_nft t2, t_artist t3, t_investment_list t4
                 where t1.album_id == t2.album_id and
                       t2.nft_id == t3.nft_id and
                       t2.nft_id == t4.nft_id`
    },

    // 굿즈 목록 모듈
    // 굿즈사진, 상품이름, 상품소개
    getGoodsList : {
        query : `select image_src, product_name, description
                 from t_product`
    },

    // 뉴스 목록 모듈
    // 기사사진, 기사제목
    // 뉴스는 어떤 구조를 써야할까요? 뉴스테이블 생성 어떻게?
    getNewsFeed : {
        query : `select `
    },


// ---- 사용자 인증 화면 ----

    // 로그인 결과
    // 이메일, 비밀번호
    getUserAccount : {
        query : ``
    },

    // 아이디 찾기
    findUserAccount : {
        query : ``
    },

    // 회원가입
    // 이메일, 비밀번호, 약관동의 항목
    addUserAccount : {
        query : ``
    },

    // 비밀번호 재설정
    setUserPassword : {
        query : ``
    },


// ---- 사용자 자산 화면 ----

    // 유저별 보유 NFT
    getUserNFT : {
        query:``
    },
    
    getUserCash : {
        query:``
    },
    
    getCashTxHistory : {

    },

    getNFTTxHistory : {

    },

    updateFunding : {
        
    },

    testQuery : {
        query : `select * from t_test`
    },
    testQuery2 : {
        query : `select * from t_test where testcol <= 1000`
    },

}