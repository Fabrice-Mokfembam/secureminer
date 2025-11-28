import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Features/Home/pages/HomePage';
import RewardCenterPage from './Features/Reward Center/pages/RewardCenterPage';
import AboutPage from './Features/About/pages/AboutPage';
import TeamPage from './Features/Team/Pages/TeamPage';
import ProfilePage from './Features/Profile/Pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/reward-center',
        element: <RewardCenterPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/team',
        element: <TeamPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
