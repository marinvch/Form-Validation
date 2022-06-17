import { configure } from '@testing-library/react';
import axios from 'axios';

const binId ='1655478465926-8489048315677';

export const postData = (data)=>{
    console.log(data);
    axios.post('https://www.toptal.com/developers/postbin/api/bin',).then(res=>{
        console.log(res.data);
    })
}



// 'https://www.toptal.com/developers/postbin',{data}).then((res)=>{
//         console.log(res.data);