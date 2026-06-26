

const Component02 = ({ isAuth }) => {
    // //01
    // if(isAuth){
    //     return (
    //         <div>
    //             <h1>인증 완료 상태</h1>
    //         </div>
    //     )

    // }else{
    //      return (
    //         <div>
    //             <h1>로그인이 필요합니다</h1>
    //         </div>
    //     )
    // }

    // 02
    // return isAuth ? (
    //     <div>
    //         <h1>인증 완료 상태</h1>
    //     </div>
    // ) : (
    //     <div>
    //         <h1>로그인이 필요합니다</h1>
    //     </div>
    // );

    //03
    // return (
    // <>
    //     {isAuth ? (
    //         <div>
    //             <h1>인증 완료 상태</h1>
    //         </div>
    //     ) : (
    //         <div>
    //             <h1>로그인이 필요합니다</h1>
    //         </div>
    //     )};
    // </>
    // )

    //04
    return isAuth ?<div><h1>인증 완료 상태</h1></div> : <div><h1>로그인이 필요합니다</h1></div>


}

export default Component02;