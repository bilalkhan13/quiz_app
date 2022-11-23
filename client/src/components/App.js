import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

/** react routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/quiz',
    element: <Quiz />,
  },
  {
    path: '/result',
    element: <Result />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
