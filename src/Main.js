import { Routes, Route, Navigate } from "react-router-dom";
// import AppV1 from './v1/App'
import AppV2 from './v2/App'


function Main() {
  return (
    <div className="App">
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/v2" replace />} />

        {/* Version routes */}
        {/* <Route path="/v1/*" element={<AppV1 />} /> */}
        <Route path="/v2/*" element={<AppV2 />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/v2" replace />} />
      </Routes>
    </div>
  );
}

export default Main;
