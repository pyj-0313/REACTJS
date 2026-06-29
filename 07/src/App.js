
import Parent_01 from "./07Component간통신/Props/Parent"
import CustomProvider from "./07Component간통신/ContextAPI/Provider"

//
// React Context API는 props를 여러 단계로 내려보내는 "prop drilling"을 피하고,
// 전역적으로 공유할 데이터(테마, 로그인 정보, 언어 설정 등)를 컴포넌트 트리 어디서든 꺼내 쓰게 해주는 기능

// ① 생성(Context 생성) → ② 제공(Provider) → ③ 소비(useContext)


function App() {
  return (
    <CustomProvider>
      <div className="App">
        <h1>컴포넌트 간 통신</h1>

        <Parent_01 />

        
      </div>
    </CustomProvider>
  );
}

export default App;
