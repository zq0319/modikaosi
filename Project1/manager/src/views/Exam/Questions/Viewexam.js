import { useEffect } from 'react';

function SiderDemo(props) {

    useEffect(() => {
        console.log(1111, props)
    }, [props])

    return <div>1111</div>
}

export default SiderDemo;
