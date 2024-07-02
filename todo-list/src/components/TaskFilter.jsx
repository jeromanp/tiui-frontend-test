import React from "react";
import Image from "next/image";
import TaskTable from "./TaskTable";

export default function TaskFilter({ handleFilterChange }) {
  return (
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
          title="Filtrar Tareas"
          className="form-select form-select-sm"
          aria-label="Default select example"
          onChange={handleFilterChange}
        >
          <option value="all">Mostrar Todas</option>
          <option value="completed">Completadas</option>
          <option value="pending">Pendientes</option>
        </select>
      </div>
    </div>
  );
}
