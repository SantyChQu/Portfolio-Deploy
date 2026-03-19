import { Route, Routes } from 'react-router-dom';
import Main from '../components/layout/Main/main';
import ProjectDetailPage from '../pages/DetalleProyecto';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/proyecto/:slug" element={<ProjectDetailPage />} />
    </Routes>
  );
}

