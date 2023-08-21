import { Space, Spin } from 'antd';

const Loading = () => (
    <Spin size="large" 
        style={{
            width: '100%',
            height: '2000px',
            paddingTop: '300px',
            position: 'fixed',
            backgroundColor: 'white',
            zIndex: 3,
        }}
    
    />
);
export default Loading;