import React from "react";

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4 rounded"
      role="alert"
      data-testid="error-message"
    >
      <p className="font-bold">Error</p>
      <p>{message || "Ha ocurrido un error inesperado"}</p>
    </div>
  );
}

export default ErrorMessage;
