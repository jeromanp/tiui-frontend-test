import React from "react";
import Image from "next/image";
import Form from "./Form";

export default function TaskContainer() {
  return (
    <div className="container">
      <Form />
      <div className="row d-flex justify-content-center align-items-center py-4 w-25">
        <div className="d-flex align-items-center">
          <Image
            src="/assets/filter.svg"
            alt="Filtrar"
            type="button"
            width={30}
            height={30}
            className="me-2"
          />
          <select
            className="form-select form-select-sm"
            aria-label="Default select example"
          >
            <option selected>Mostrar</option>
            <option value="1">Todas</option>
            <option value="2">Completadas</option>
            <option value="3">Pendientes</option>
          </select>
        </div>
      </div>
    </div>
  );
}
