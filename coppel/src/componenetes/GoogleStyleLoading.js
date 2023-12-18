import React from 'react';
import '../utilidades/loadingEstilos.css'; // Importa tus estilos CSS

const GoogleStyleLoading = () => {
  return (
    <div className="google-style-loading-container">
      <div className="google-spinner">
        <div className="google-spinner-inner" />
      </div>
    </div>
  );
};

export default GoogleStyleLoading;
