

const Component01 = ({isAuth})=>{

    if(isAuth){

        return (
            <div>
                <h1>인증 완료 상태</h1>
            </div>
        )

    }else{

         return (
            <div>
                <h1>로그인이 필요합니다</h1>
            </div>
        )
    }
}

export default Component01;