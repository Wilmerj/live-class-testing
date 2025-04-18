import PropTypes from 'prop-types';

function ErrorMessage({ message }) {
  return (
    <div 
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4 rounded" 
      role="alert"
      data-testid="error-message"
    >
      <p className="font-bold">Error</p>
      <p>{message || 'Ha ocurrido un error inesperado'}</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage; 