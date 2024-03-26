import Test1 from '@/components/test1';
import Test2React from '@/components/test2/react';
import Test2Vanilla from '@/components/test2/vanilla';
import React from 'react';

const routePaths = ['/', '/test1', '/test2', '/test2/vanilla', '/test2/react'] as const;
export type ROUTE_PATH = (typeof routePaths)[number];

type BaseRoute = {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  label: string;
};

export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[];
}

export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => React.ReactElement) | null;
}

export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
  '/': {
    key: '/',
    link: '/',
    label: 'root',
    children: ['/test1', '/test2'],
  },
  '/test1': {
    key: '/test1',
    link: '/test1',
    label: '테스트1',
    children: Test1,
  },
  '/test2': {
    key: '/test2',
    link: '/test2/vanilla',
    label: '테스트2',
    children: ['/test2/vanilla', '/test2/react'],
  },
  '/test2/vanilla': {
    key: '/test2/vanilla',
    link: '/test2/vanilla',
    label: 'Vanilla',
    children: Test2Vanilla,
  },
  '/test2/react': {
    key: '/test2/react',
    link: '/test2/react',
    label: 'React',
    children: Test2React,
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute => Array.isArray(route.children);

export const gnbRootList = (routes['/'] as ParentRoute).children.map((route) => routes[route]);