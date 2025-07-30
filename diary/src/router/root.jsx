import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from '../pages/Loading';
// main
const MainPage = lazy(() => import('../pages/MainPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));

// diary
const ListPage = lazy(() => import('../pages/diary/ListPage'));
const ReadPage = lazy(() => import('../pages/diary/ReadPage'));
const AddPage = lazy(() => import('../pages/diary/AddPage'));
const ModifyPage = lazy(() => import('../pages/diary/ModifyPage'));

// product
const ProductListPage = lazy(() => import('../pages/product/ListPage'));
const ProductAddPage = lazy(() => import('../pages/product/AddPage'));
const ProductReadPage = lazy(() => import('../pages/product/ReadPage'));
const ProductModifyPage = lazy(() => import('../pages/product/ModifyPage'));

// member
const LoginPage = lazy(() => import('../pages/member/LoginPage'));
const LogoutPage = lazy(() => import('../pages/member/LogoutPage'));
const KakaoRedirect = lazy(() => import('../pages/member/KakaoRedirectPage'));
const MemberModify = lazy(() => import('../pages/member/ModifyPage'));
const MyPage = lazy(() => import('../pages/member/MyPage'));

const root = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<Loading />}>
                <MainPage />
            </Suspense>
        ),
    },
    {
        path: "/about",
        element: (
            <Suspense fallback={<Loading />}>
                <AboutPage />
            </Suspense>
        ),
    },

    // diary
    {
        path: '/diary/list',
        element: (
            <Suspense fallback={<Loading />}>
                <ListPage />
            </Suspense>
        ),
    },
    {
        path: '/diary/read/:tno',
        element: (
            <Suspense fallback={<Loading />}>
                <ReadPage />
            </Suspense>
        ),
    },
    {
        path: '/diary/add',
        element: (
            <Suspense fallback={<Loading />}>
                <AddPage />
            </Suspense>
        ),
    },
    {
        path: '/diary/modify/:tno',
        element: (
            <Suspense fallback={<Loading />}>
                <ModifyPage />
            </Suspense>
        ),
    },

    // product
    {
        path: '/product/list',
        element: (
            <Suspense fallback={<Loading />}>
                <ProductListPage />
            </Suspense>
        ),
    },
    {
        path: '/product/add',
        element: (
            <Suspense fallback={<Loading />}>
                <ProductAddPage />
            </Suspense>
        ),
    },
    {
        path: '/product/read/:pno',
        element: (
            <Suspense fallback={<Loading />}>
                <ProductReadPage />
            </Suspense>
        ),
    },
    {
        path: '/product/modify/:pno',
        element: (
            <Suspense fallback={<Loading />}>
                <ProductModifyPage />
            </Suspense>
        ),
    },
    {
        path: '/member/login',
        element: (
            <Suspense fallback={<Loading />}>
                <LoginPage />
            </Suspense>
        ),
    },
    {
        path: '/member/logout',
        element: (
            <Suspense fallback={<Loading />}>
                <LogoutPage />
            </Suspense>
        ),
    },
    {
        path: '/member/kakao',
        element: (
            <Suspense fallback={<Loading />}>
                <KakaoRedirect />
            </Suspense>
        ),
    },
    {
        path: '/member/modify',
        element: (
            <Suspense fallback={<Loading />}>
                <MemberModify />
            </Suspense>
        ),
    },
    {
        path: '/member/mypage',
        element: (
            <Suspense fallback={<Loading />}>
                <MyPage />
            </Suspense>
        ),
    },
]);
export default root;