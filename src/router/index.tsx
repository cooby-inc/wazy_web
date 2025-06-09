import InstallPage from '@/pages/InstallPage';
import UninstallPage from '@/pages/UninstallPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/install',
    element: <InstallPage />,
  },
  {
    path: '/uninstall',
    element: <UninstallPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
