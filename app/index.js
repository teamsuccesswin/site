import React        from 'react';
import ReactDOM     from 'react-dom';
import AppWrapper   from '../src';
import { RouterProvider } from 'react-router5';
import createHistory from 'history/createBrowserHistory'
import initRouter from './initRouter';

const router = initRouter(true);
const app = <RouterProvider router={ router }><AppWrapper /></RouterProvider>;

const history = createHistory();
router.start(() => {
  ReactDOM.render(
    app,
    document.getElementById('react-app')
  );
});
