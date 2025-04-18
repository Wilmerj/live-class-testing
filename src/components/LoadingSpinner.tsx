function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-64" data-testid="loading-spinner">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-600 border-opacity-50"></div>
      <span className="sr-only">Cargando...</span>
    </div>
  );
}

export default LoadingSpinner; 