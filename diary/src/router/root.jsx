import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from '../pages/Loading';
const MainPage = lazy(() => import('../pages/MainPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ListPage = lazy(() => import('../pages/diary/ListPage'));
const ReadPage = lazy(() => import('../pages/diary/ReadPage'));
const AddPage = lazy(() => import('../pages/diary/AddPage'));
const ModifyPage = lazy(() => import('../pages/diary/ModifyPage'));
const ProductListPage = lazy(() => import('../pages/product/ListPage'));
const ProductAddPage = lazy(() => import('../pages/product/AddPage'));
const ProductReadPage = lazy(() => import('../pages/product/ReadPage'));
const ProductModifyPage = lazy(() => import('../pages/product/ModifyPage'));

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
]);
export default root;