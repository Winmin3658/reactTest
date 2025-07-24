import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
// 앱의 퍼포먼스 시간들을 분석하여 객체 형태로 보여주는 것
// 사용자들에게 편의를 제공하는 페이지나 컴포넌트는 아니므로 삭제해도 무방
// reportWebVitals();