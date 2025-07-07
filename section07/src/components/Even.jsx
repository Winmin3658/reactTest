import {useEffect} from 'react';

const Even = () => {
    // unmount 기능
    useEffect(() => {
        // 마운트 될 때 작동
        console.log('Even mount');
        return () => {
            // unmount 될 때 작동
            console.log('Even unmount');
        }
    }, []);
    return <div>짝수입니다</div>
};

export default Even;