-- 테이블 순서는 관계를 고려하여 한 번에 실행해도 에러가 발생하지 않게 정렬되었습니다.

-- t_user Table Create SQL
CREATE TABLE IF NOT EXISTS t_user
(
    `id`            INT            NOT NULL    AUTO_INCREMENT, 
    `email`         VARCHAR(45)    NOT NULL    COMMENT '사용자 이메일', 
    `nickname`      VARCHAR(16)    NOT NULL    COMMENT '사용자 닉네임', 
    `provider`      CHAR(1)        NOT NULL    COMMENT '계정구분', --(로컬:0, 카카오:1, 네이버:2 등) 
    `phone_number`  CHAR(11)       NULL        COMMENT '핸드폰인증', 
    `bank_code`     CHAR(2)        NULL        COMMENT '은행코드', --(우리:00, 농협:01, 카뱅:02 등)
    `bank_account`  VARCHAR(30)    NULL        COMMENT '실계좌번호', 
    CONSTRAINT PK_USER PRIMARY KEY (id, email)
);
CREATE TABLE IF NOT EXISTS t_auth_local
(
    `id`            INT            NOT NULL    AUTO_INCREMENT, 
    `email`         VARCHAR(45)    NOT NULL    COMMENT '사용자 이메일', 
    `pwd_hash`      CHAR(64)       NOT NULL    COMMENT '비밀번호 해쉬값', --bcrypt 사용할 예정
    CONSTRAINT PK_USER PRIMARY KEY (id, email)
);
CREATE TABLE IF NOT EXISTS t_auth_social
(
    `id`            INT            NOT NULL    AUTO_INCREMENT, 
    `email`         VARCHAR(45)    NOT NULL    COMMENT '사용자 이메일', 
    `provider`      CHAR(1)        NOT NULL    COMMENT '계정구분', --(로컬:0, 카카오:1, 네이버:2 등) 
    CONSTRAINT PK_USER PRIMARY KEY (id, email)
);


ALTER TABLE t_user COMMENT '회원정보';

-- t_artist Table Create SQL
CREATE TABLE IF NOT EXISTS t_artist
(
    `id`           INT            NOT NULL    AUTO_INCREMENT, 
    `email`        VARCHAR(45)    NOT NULL    COMMENT '아티스트 계정', 
    `artist_name`  VARCHAR(45)    NOT NULL    COMMENT '아티스트 명', 
    `comment`      VARCHAR(500)   NULL        COMMENT '아티스트 설명', 
    `image_src`    VARCHAR(255)   NULL        COMMENT '아티스트 사진주소', 
    `nft_id`       INT            NULL        COMMENT '아티스트가 만든 음원',
    CONSTRAINT PK_ARTIST PRIMARY KEY (id, email)
);

ALTER TABLE t_artist COMMENT '등록된 아티스트 정보';

-- t_music_album Table Create SQL
CREATE TABLE IF NOT EXISTS t_music_album
(
    `id`         INT            NOT NULL    AUTO_INCREMENT, 
    `album_id`   INT            NOT NULL    COMMENT '앨범 아이디', 
    `title`      VARCHAR(45)    NOT NULL    COMMENT '앨범명', 
    `comment`    VARCHAR(45)    NULL        COMMENT '앨범소개', 
    `image_src`  VARCHAR(30)    NULL        COMMENT '앨범커버', 
    CONSTRAINT PK_NFT_ALBUM PRIMARY KEY (id, album_id)
);

ALTER TABLE t_music_album COMMENT 'NFT 음원의 앨범';

-- t_product Table Create SQL
CREATE TABLE IF NOT EXISTS t_product
(
    `id`            INT            NOT NULL    AUTO_INCREMENT, 
    `product_id`    INT            NOT NULL    COMMENT '굿즈 아이디', 
    `product_name`  VARCHAR(45)    NULL        COMMENT '굿즈 이름', 
    `price`         INT            NULL        COMMENT '굿즈 가격', 
    `description`   TEXT           NULL        COMMENT '굿즈 소개', 
    `detail`        TEXT           NULL        COMMENT '굿즈 세부설명', 
    `image_src`     VARCHAR(30)    NULL        COMMENT '굿즈 아이콘 링크', 
    CONSTRAINT PK_PRODUCT PRIMARY KEY (id, product_id)
);

ALTER TABLE t_product COMMENT 'NFT 음원에 대한 굿즈_끝';

-- t_music_nft Table Create SQL
CREATE TABLE IF NOT EXISTS t_music_nft
(
    `id`           INT            NOT NULL, 
    `nft_id`       INT            NOT NULL    COMMENT 'NFT 아이디', 
    `album_id`     INT            NOT NULL    COMMENT '앨범 아이디', 
    `music_name`   VARCHAR(45)    NOT NULL    COMMENT '음원명', 
    `description`  TEXT           NULL        COMMENT '음원설명',
    `issuance`     INT            NOT NULL    COMMENT '최초배포량', 
    CONSTRAINT PK_NFT PRIMARY KEY (id)
);

ALTER TABLE t_music_nft COMMENT 'NFT 음원 정보';

-- t_nft_owner Table Create SQL
CREATE TABLE IF NOT EXISTS t_nft_owner
(
    `id`      INT            NOT NULL    AUTO_INCREMENT, 
    `nft_id`  INT            NOT NULL    COMMENT 'NFT 아이디', 
    `email`   VARCHAR(45)    NOT NULL    COMMENT '사용자 이메일', 
    `amount`  INT            NOT NULL    COMMENT '보유량', 
    CONSTRAINT PK_OWNER PRIMARY KEY (id, nft_id)
);

ALTER TABLE t_nft_owner COMMENT 'NFT 별 소유현황';

-- t_investment Table Create SQL
CREATE TABLE IF NOT EXISTS t_investment
(
    `id`              INT            NOT NULL    AUTO_INCREMENT, 
    `nft_id`          INT            NOT NULL    COMMENT 'NFT 아이디', 
    `status`          CHAR(1)        NOT NULL    COMMENT '투자진행여부(0:정상종료, 1:진행중, 2:보류, 3:중단 등)'
    `end_date`        DATETIME       NOT NULL    COMMENT '마감일', 
    `artist`          VARCHAR(45)    NOT NULL    COMMENT '아티스트명', 
    `target_amount`   INT            NOT NULL    COMMENT '목표금액,달성금액', 
    `current_amount`  INT            NOT NULL    COMMENT '현재모금된 금액', 
    CONSTRAINT PK_FUND PRIMARY KEY (id, nft_id)
);

ALTER TABLE t_investment COMMENT 'NFT 음원 펀딩 리스트들';

-- t_agreement Table Create SQL
CREATE TABLE IF NOT EXISTS t_agreement
(
    `id`       INT            NOT NULL    AUTO_INCREMENT, 
    `email`    VARCHAR(45)    NOT NULL    COMMENT '사용자 이메일', 
    `agree_1`  CHAR(1)        NULL        COMMENT '각각의 동의 항목 체크여부를 Object string형태로 저장', 
    `agree_2`  CHAR(1)        NULL, 
    `agree_3`  CHAR(1)        NULL, 
    `agree_4`  CHAR(1)        NULL, 
    `agree_5`  CHAR(1)        NULL, 
    `agree_6`  CHAR(1)        NULL, 
    CONSTRAINT PK_PLEDGE PRIMARY KEY (id)
);

ALTER TABLE t_agreement COMMENT '보안서약서 및 개인정보제공 동의 항목 내용_끝';

-- t_user_nft_asset Table Create SQL
CREATE TABLE IF NOT EXISTS t_user_nft_asset
(
    `id`      INT            NOT NULL    AUTO_INCREMENT, 
    `nft_id`  VARCHAR(45)    NOT NULL    COMMENT '보유 NFT', 
    `email`   VARCHAR(45)    NOT NULL    COMMENT '사용자 이메일', 
    `amount`  INT            NOT NULL    COMMENT '보유량', 
    CONSTRAINT PK_ASSET PRIMARY KEY (id)
);

ALTER TABLE t_user_nft_asset COMMENT '사용자가 가진 NFT 자산';

-- t_cash_tx_history Table Create SQL
CREATE TABLE IF NOT EXISTS t_cash_tx_history
(
    `id`         INT            NOT NULL    AUTO_INCREMENT,
    `gubun`      CHAR(1)        NOT NULL    COMMENT '거래구분(0:매수, 1:매도, 2:선물받음, 3:선물보냄)', 
    `tx_amount`  INT            NOT NULL    COMMENT '거래금액', 
    `date`       DATETIME       NOT NULL    COMMENT '거래일(년월일시분초)', 
    `sender`     VARCHAR(45)    NOT NULL    COMMENT '보낸 사람', 
    `recipient`  VARCHAR(45)    NOT NULL    COMMENT '받는 사람', 
    CONSTRAINT PK_CASHFLOWLOG PRIMARY KEY (id, email)
);

ALTER TABLE t_cash_tx_history COMMENT '현금 거래 로그_끝';

-- t_nft_tx_history Table Create SQL
CREATE TABLE IF NOT EXISTS t_nft_tx_history
(
    `id`         INT            NOT NULL    AUTO_INCREMENT,
    `nft_id`     VARCHAR(45)    NOT NULL    COMMENT 'NFT 아이디', 
    `gubun`      CHAR(1)        NOT NULL    COMMENT '거래구분(0:매수, 1:매도, 2:선물받음, 3:선물보냄)', 
    `tx_amount`  INT            NOT NULL    COMMENT '거래 수량', 
    `date`       DATETIME       NOT NULL    COMMENT '거래일(년월일시분초)', 
    `sender`     VARCHAR(45)    NOT NULL    COMMENT '보낸 사람', 
    `recipient`  VARCHAR(45)    NOT NULL    COMMENT '받는 사람', 
    CONSTRAINT PK_NFTFLOWLOG PRIMARY KEY (id)
);

ALTER TABLE t_nft_tx_history COMMENT 'NFT 거래 로그_끝';

-- t_user_cash_asset Table Create SQL
CREATE TABLE IF NOT EXISTS t_user_cash_asset
(
    `id`        INT            NOT NULL    AUTO_INCREMENT, 
    `email`     VARCHAR(45)    NOT NULL    COMMENT '사용자 이메일', 
    `reserves`  VARCHAR(45)    NOT NULL    COMMENT '보유 금액', 
    CONSTRAINT PK_USER_CASH_ASSET PRIMARY KEY (id)
);

ALTER TABLE t_user_cash_asset COMMENT '사용자가 가진 NFT 자산';

-- t_user_investment_status Table Create SQL
CREATE TABLE IF NOT EXISTS t_user_investment_status
(
    `id`        INT            NOT NULL    AUTO_INCREMENT, 
    `email`     VARCHAR(45)    NULL        COMMENT '사용자 이메일', 
    `nft_id`    VARCHAR(45)    NULL        COMMENT 'NFT 아이디', 
    `reserves`  INT            NULL        COMMENT '투자 갯수', 
    `amount`    INT            NULL        COMMENT '투자 금액', 
    CONSTRAINT PK_FUNDING_MONITOR PRIMARY KEY (id)
);

ALTER TABLE t_user_investment_status COMMENT '계정별 현재 펀딩현황(NFT 자산현황과 다름)';

-- t_order_book Table Create SQL
CREATE TABLE IF NOT EXISTS t_order_book
(
    `id`          INT            NOT NULL    AUTO_INCREMENT, 
    `email`       VARCHAR(45)    NULL        COMMENT '사용자 이메일', 
    `product_id`  INT            NULL        COMMENT '굿즈아이디', 
    `pay_status`  CHAR(1)        NULL        COMMENT '금액지불여부(무통장일경우 0)', 
    CONSTRAINT PK_PRODUCT_BUY_MONITOR PRIMARY KEY (id)
);

ALTER TABLE t_order_book COMMENT 'NFT 음원 굿즈 거래현황';