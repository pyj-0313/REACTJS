

const Component03 = ({items})=>{
    console.log('itmes',items);
    // console.log('length',items.length);

    // //01
    // return (
    //     <ul>
    //         {items && items.map((item,idx)=>{
    //             console.log('itme',item);
    //             return (
    //                 <li key={idx}>{item}</li>
    //             );
    //         })}
    //     </ul>
    // )

        //02
    return (
        <ul>
            {items && items.map((item,idx)=> <li key={idx}>{item}</li>)}
        </ul>
    )

}

export default Component03;