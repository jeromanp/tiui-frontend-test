import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TasksCard({
  id,
  description,
  priority,
  completed,
  completeTask,
  deleteTask,
  uncompleteTask,
}) {
  return (
    <tr
      className={`fw-normal ${completed ? "completed-task" : ""} ${
        completed ? "bg-light" : ""
      }`}
    >
      <td className="align-middle">
        <span className={`${completed ? "completed-task" : ""}`}>{id}</span>
      </td>
      <td className="align-middle">
        <span className={`${completed ? "completed-task" : ""}`}>
          {description}
        </span>
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
  <div className="d-flex gap-3">
    <Link href={`/editar/${id}`}>
      <button title="Actualizar" className="btn btn-icon btn-info">
        <Image
          src="/assets/update.svg"
          alt="Update"
          type="button"
          width={30}
          height={30}
          className="icon"
        />
      </button>
    </Link>
    {completed ? (
      <button
        title="Deshacer"
        onClick={() => uncompleteTask(id)}
        className="btn btn-icon btn-warning"
      >
        <Image
          src="/assets/incomplete.svg"
          alt="Incomplete"
          type="button"
          width={30}
          height={30}
          className="icon"
        />
      </button>
    ) : (
      <button
        title="Hecho"
        onClick={() => completeTask(id)}
        className="btn btn-icon btn-success"
      >
        <Image
          src="/assets/success.svg"
          alt="Complete"
          type="button"
          width={30}
          height={30}
          className="icon"
        />
      </button>
    )}
    <button
      title="Eliminar"
      onClick={() => deleteTask(id)}
      className="btn btn-icon btn-danger"
    >
      <Image
        src="/assets/delete.svg"
        alt="Delete"
        type="button"
        width={30}
        height={30}
        className="icon"
      />
    </button>
  </div>
</td>

    </tr>
  );
}
