import React from "react";
import Image from "next/image";

export default function TasksCard({ id, description, priority, completed, completeTask, deleteTask }) {
  return (
    <tr className={`fw-normal ${completed ? "completed-task" : ""} ${completed ? "bg-light" : ""}`}>
      <td className="align-middle">
        <span className={`${completed ? "completed-task" : ""}`}>{id}</span>
      </td>
      <td className="align-middle">
        <span className={`${completed ? "completed-task" : ""}`}>{description}</span>
      </td>
      <td className="align-middle">
        <h6 className="mb-0">
          <span
            className={`badge ${
              priority === "Alta"
                ? "bg-danger"
                : priority === "Media"
                ? "bg-warning"
                : "bg-success"
            }`}
          >
            {priority === "Alta"
              ? "Urgente"
              : priority === "Media"
              ? "Importante"
              : "Opcional"}
          </span>
        </h6>
      </td>
      <td className="align-middle">
        <div className="d-flex gap-2">
          <button title="Actualizar" className="btn btn-info">
            <Image
              src="/assets/update.svg"
              alt="Update"
              type="button"
              width={30}
              height={30}
              className="text-white"
            />
          </button>
          <button title="Hecho" onClick={() => completeTask(id)} className="btn btn-success">
            <Image
              src="/assets/success.svg"
              alt="Complete"
              type="button"
              width={30}
              height={30}
              className="text-white"
            />
          </button>
          <button title="Eliminar" onClick={() => deleteTask(id)} className="btn btn-danger">
            <Image
              src="/assets/delete.svg"
              alt="Delete"
              type="button"
              width={30}
              height={30}
              className="text-white"
            />
          </button>
        </div>
      </td>
    </tr>
  );
}
