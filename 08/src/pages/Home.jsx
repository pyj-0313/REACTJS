import Layout from "../layouts/Layout"

const Home = ()=>{

    return (
        <Layout isShowAside={false}>
            <h1> HOME PAGE</h1>
            <p>
                기본 페이지("/") 영역 입니다 - !
            </p>
        </Layout>
    );
}

export default Home;