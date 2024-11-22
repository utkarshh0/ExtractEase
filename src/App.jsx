
import FileUpload from './components/FileUpload';
import TablePage from './pages/TablePage';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import UploadFilePage from './pages/UploadFilePage';

const App = () => {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<UploadFilePage/>}/> */}
          <Route path='/' element={<TablePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
