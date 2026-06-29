// =====================================================================
// 08_EX - 레이아웃 합성(Composition) 응용 연습 "문제" (단계별)
// ---------------------------------------------------------------------
// 아래 각 {TODO} 부분을 직접 채워서 완성하세요.
// 정답은 같은 폴더의 08_EX_정답.jsx 에서 확인할 수 있습니다.
// 다루는 것:
//   단계 1) children prop      : 컴포넌트 사이(여는/닫는 태그)의 내용 받기
//   단계 2) 컴포넌트 합성        : 작은 컴포넌트를 모아 Layout 만들기
//   단계 3) 기본 prop값 + 조건부 : isShowAside=true 기본값, && 로 조건부 렌더
// =====================================================================

// ---------------------------------------------------------------------
// 레이아웃 조각들 (수정 불필요)
// ---------------------------------------------------------------------
function Header() {
  return (
    <header style={{ background: "#cfe2ff", padding: "8px" }}>
      <b>HEADER</b>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#e2e3e5", padding: "8px" }}>
      <b>FOOTER</b>
    </footer>
  );
}

function Aside() {
  return (
    <aside style={{ background: "#fff3cd", padding: "8px", width: "120px" }}>
      ASIDE
    </aside>
  );
}

// ---------------------------------------------------------------------
// [단계 1] children prop
//  {TODO} props 에서 children 을 받아 <section> 안에 {children} 으로 그려주세요.
//         (Section 을 <Section>내용</Section> 처럼 쓰면 '내용' 이 children 으로 들어옵니다)
// ---------------------------------------------------------------------
function Section({ children }) {
  return (
    <section style={{ flex: 1, background: "#d1e7dd", padding: "8px" }}>
      {/* {TODO} children 출력 */}
    </section>
  );
}

// ---------------------------------------------------------------------
// [단계 2] 컴포넌트 합성 + [단계 3] 기본 prop값 / 조건부 렌더
//  {TODO} 1) children, isShowAside 를 props 로 받되 isShowAside 의 기본값을 true 로 주세요.
//            ( function Layout({ children, isShowAside = true }) )
//  {TODO} 2) <Header /> 와 <Footer /> 사이의 <main> 안에
//            - isShowAside 가 true 일 때만 <Aside /> 를 렌더 ( && 사용 )
//            - <Section>{children}</Section> 로 본문을 합성
// ---------------------------------------------------------------------
function Layout({ children }) {
  return (
    <div style={{ border: "1px solid #999", marginBottom: "12px" }}>
      {/* {TODO} Header / main(조건부 Aside + Section) / Footer 합성 */}
      <main style={{ display: "flex" }}></main>
    </div>
  );
}

// ---------------------------------------------------------------------
// 전체 단계를 한 번에 보여주는 메인 컴포넌트 (수정하지 않아도 됩니다)
// ---------------------------------------------------------------------
function EX_08() {
  return (
    <div style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
      <h3>ABOUT 페이지 (Aside 있음 - 기본값)</h3>
      <Layout>
        <h2>ABOUT</h2>
        <p>Aside 가 함께 보이는 레이아웃입니다.</p>
      </Layout>

      <h3>HOME 페이지 (Aside 없음 - isShowAside={"{false}"})</h3>
      <Layout isShowAside={false}>
        <h2>HOME</h2>
        <p>Aside 없이 본문만 넓게 쓰는 레이아웃입니다.</p>
      </Layout>
    </div>
  );
}

export default EX_08;
