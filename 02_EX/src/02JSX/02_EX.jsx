// =====================================================================
// 02_EX - JSX 응용 연습 "문제" (단계별)
// ---------------------------------------------------------------------
// 아래 각 컴포넌트의 {TODO} 부분을 직접 채워서 완성하세요.
// 정답은 같은 폴더의 02_EX_정답.jsx 에서 확인할 수 있습니다.
// 테마: 쇼핑몰 상품
// =====================================================================

// ---------------------------------------------------------------------
// [단계 1] JSX 요소 만들기 (화살표 함수 / function 두 방식)
//  {TODO} ShopBanner  : 화살표 함수로 만들고 <h3>오늘의 마켓</h3> 을 반환
//  {TODO} ShopNotice  : function 키워드로 만들고 <h3>특가 진행중</h3> 을 반환
// ---------------------------------------------------------------------
export const ShopBanner = () => {
  // {TODO} <h3> 요소를 return 하세요.
  return <h3>오늘의 마켓</h3>;
};

export function ShopNotice() {
  // {TODO} <h3> 요소를 return 하세요.
  return <h3>특가 진행중</h3>;
}

// ---------------------------------------------------------------------
// [단계 2] Props 로 값 전달받기
//  {TODO} props 로 받은 name, price 를 "상품명 - 가격원" 형태로 출력하세요.
//         예) 아메리카노 - 3000원
// ---------------------------------------------------------------------
export function ProductLine(props) {
  // {TODO} props.name 과 props.price 를 사용해 <p>...</p> 를 return 하세요.
  return <p> {props.name} - {props.price}</p>
}

// ---------------------------------------------------------------------
// [단계 3] 구조분해할당 + 계산식 응용 (할인가 구하기)
//  {TODO} 1) props 를 { name, price, rate } 로 구조분해할당 받으세요.
//  {TODO} 2) 할인가 = price * (100 - rate) / 100 을 계산하세요.
//  {TODO} 3) "정가 ...원 -> rate% 할인가 할인가원" 형태로 출력하세요.
// ---------------------------------------------------------------------
export function DiscountLine({name,price,rate}) {
  // {TODO} 구조분해할당 + 할인가 계산 후 return
    return <p> {name} 정가{price}원 -> {rate}% 할인가 {price * (100 - rate) /100}  </p> 
    }

// ---------------------------------------------------------------------
// [단계 4] 조건부 출력 응용 (재고 수에 따라 3가지 상태)
//  {TODO} stock 값에 따라 status 를 정하세요.
//         - stock === 0   : "품절"
//         - stock <= 5    : "마감임박 (n개 남음)"   (n 은 stock 값)
//         - 그 외          : "구매가능"
//  {TODO} "상품명 : status" 형태로 출력하세요.
// ---------------------------------------------------------------------
export function StockStatus({ name, stock }) {
  // {TODO} if / else if / else 로 status 를 정한 뒤 <p> 로 return 하세요.
  if(stock === 0){
    return <p>{name} : 품절</p>
  }else if(stock <= 5){
    return <p>{name} : 마감임박 ({stock}개 남음)</p>
  }else{
  return <p>{name} : 구매가능</p>
  }
}

// ---------------------------------------------------------------------
// [단계 5] 객체 배열 map 반복 + 합계 계산
//  items 예시: [{ id, name, price, qty }, ...]
//  {TODO} 1) 각 상품을 "상품명 x 수량 = 금액원" 으로 <li> 목록 출력 (key 는 id)
//            금액 = price * qty
//  {TODO} 2) reduce 로 전체 합계를 구해 맨 아래 "합계 : 합계원" 출력
// ---------------------------------------------------------------------

export function Cart({ items }) {
    // {TODO} total 계산 (reduce)
  // {TODO} <ul> + map 으로 목록 출력, 아래에 합계 출력
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} x {item.qty} = {item.price * item.qty}원
          </li>
        ))}
      </ul>
      <p>
        <b>합계 : {total}원</b>
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------
// 전체 단계를 한 번에 보여주는 메인 컴포넌트 (수정하지 않아도 됩니다)
// ---------------------------------------------------------------------
function EX_02() {
  const cartItems = [
    { id: 1, name: "사과", price: 1000, qty: 3 },
    { id: 2, name: "우유", price: 2500, qty: 2 },
    { id: 3, name: "빵", price: 1800, qty: 1 },
  ];

  return (
    <div style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
      {/* 단계 1 */}
      <ShopBanner />
      <ShopNotice />
      <hr />

      {/* 단계 2 */}
      <h3>[단계 2] Props 전달</h3>
      <ProductLine name="아메리카노" price={3000} />
      <ProductLine name="카페라떼" price={3500} />
      <hr />

      {/* 단계 3 */}
      <h3>[단계 3] 구조분해 + 할인가 계산</h3>
      <DiscountLine name="노트북" price={1000000} rate={10} />
      <DiscountLine name="마우스" price={20000} rate={25} />
      <hr />

      {/* 단계 4 */}
      <h3>[단계 4] 재고 상태 (조건부)</h3>
      <StockStatus name="키보드" stock={0} />
      <StockStatus name="모니터" stock={3} />
      <StockStatus name="USB" stock={50} />
      <hr />

      {/* 단계 5 */}
      <h3>[단계 5] 장바구니 (map + 합계)</h3>
      <Cart items={cartItems} />
    </div>
  );
}

export default EX_02;
