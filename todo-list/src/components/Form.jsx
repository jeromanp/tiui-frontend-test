import React from "react";

export default function Form() {
  return (
    <form className="container d-flex justify-content-center align-items-center">
      <input
        type="text"
        placeholder="Escriba una nueva tarea..."
        required
        className="form-control w-50 mx-3"
      />
      <div className="d-flex gap-3">
        <button type="submit" className="btn btn-outline-secondary">
          Agregar
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Borrar
        </button>
      </div>
    </form>
  );
}
