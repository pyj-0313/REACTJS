// =====================================================================
// 06_EX_정답 - React Router 응용 연습 "정답"
// ---------------------------------------------------------------------
// 06_EX.jsx 문제의 모범 답안입니다. 직접 풀어본 뒤 비교용으로 보세요.
// 다루는 것: Routes/Route / Link / useParams / useLocation+쿼리 / useNavigate / * (NotFound)
// =====================================================================

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

// ---------------------------------------------------------------------
// 공통 네비게이션
// ---------------------------------------------------------------------
function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/user/7">USER (params)</Link></li>
        <li><Link to="/search?keyword=react">SEARCH (query)</Link></li>
        <li><Link to="/none">NOT FOUND</Link></li>
      </ul>
    </nav>
  );
}

// ---------------------------------------------------------------------
// [단계 1] Link / Route - 홈 페이지
// ---------------------------------------------------------------------
function Home() {
  return <h2>[단계 1] HOME 페이지 - 위 메뉴로 이동해 보세요.</h2>;
}

// ---------------------------------------------------------------------
// [단계 2] useParams - 경로 파라미터(/user/:id)
// ---------------------------------------------------------------------
function User() {
  const { id } = useParams();
  return <h2>[단계 2] USER 페이지 - 파라미터 id : {id}</h2>;
}

// ---------------------------------------------------------------------
// [단계 3] useLocation + URLSearchParams - 쿼리스트링(?keyword=)
// ---------------------------------------------------------------------
function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const keyword = query.get("keyword");
  return <h2>[단계 3] SEARCH 페이지 - 검색어 keyword : {keyword}</h2>;
}

// ---------------------------------------------------------------------
// [단계 4] useNavigate - 버튼으로 이동(프로그래매틱)
// ---------------------------------------------------------------------
function Move() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>[단계 4] 버튼으로 이동</h2>
      <button onClick={() => navigate("/user/99")}>USER 99 로 이동</button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}

// ---------------------------------------------------------------------
// [단계 5] * 경로 - 일치하는 라우트가 없을 때 (NotFound)
// ---------------------------------------------------------------------
function NotFound() {
  return <h2>[단계 5] 404 - 페이지를 찾을 수 없습니다.</h2>;
}

// ---------------------------------------------------------------------
// Router 설정 (모든 단계를 라우트로 연결)
// ---------------------------------------------------------------------
function EX_06_ANSWER() {
  return (
    <Router>
      <div style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
        <Nav />
        <Link to="/move">[단계 4] 이동 페이지</Link>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/search" element={<Search />} />
          <Route path="/move" element={<Move />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default EX_06_ANSWER;
