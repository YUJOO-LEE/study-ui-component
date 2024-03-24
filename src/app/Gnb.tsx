'use client'

import { ChildRoute, gnbRootList, isParentRoute, ParentRoute, ROUTE, ROUTE_PATH, routes } from '@/routes';
import classNames from 'classnames';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type ParentGnbItemProps = {
  route: ParentRoute;
  currentPath: ROUTE_PATH;
};

const ParentGnbItem = (props: ParentGnbItemProps) => {
  const { route: { label, link, children }, currentPath } = props;

  const isOpen = children.includes(currentPath);

  return (
    <li className={classNames('parent', `items-${children.length}`, { open: isOpen })}>
      <Link href={link}>{label}</Link>
      <ul className="subRoutes">
        {children.map((subRoute) => {
          const route = routes[subRoute];
          return (
            <GnbItem route={route} currentPath={currentPath} key={route.key} />
          );
        })}
      </ul>
    </li>
  );
};

type ChildGnbItemProps = {
  route: ChildRoute;
  currentPath: ROUTE_PATH;
};

const ChildGnbItem = (props: ChildGnbItemProps) => {
  const { route: { label, link }, currentPath } = props;

  return (
    <li className={classNames({ active: link === currentPath })}>
      <Link href={link}>{label}</Link>
    </li>
  );
};

type GndItemProps = {
  route: ROUTE;
  currentPath: ROUTE_PATH;
};

const GnbItem = (props: GndItemProps) => {
  const { route, currentPath } = props;

  if (isParentRoute(route)) {
    return <ParentGnbItem route={route} currentPath={currentPath} />
  }
  return <ChildGnbItem route={route} currentPath={currentPath} />
};

export const Gnb = () => {
  const { item = [] } = useParams();
  const currentPath = ['', ...(Array.isArray(item) ? item : [item])].join('/') as ROUTE_PATH;


  return (
    <aside>
      <h1><Link href="/">Components</Link><sub>YUJOO</sub></h1>
      <ul className="mainRoutes">
        {gnbRootList.map((route) => (
          <GnbItem route={route} currentPath={currentPath} key={route.key} />
        ))}
      </ul>
    </aside>
  );
};