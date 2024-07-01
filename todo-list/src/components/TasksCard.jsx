import React from "react";
import Image from "next/image";

export default function TasksCard({ id, description, priority }) {
  return (
    <tr className="fw-normal">
      <th>
        <span className="">{id}</span>
      </th>
      <td className="align-middle">
        <span>{description}</span>
      </td>
      <td className="align-middle">
        <h6 className="mb-0">
          <span
            className={`badge ${
              priority === "alta"
                ? "bg-danger"
                : priority === "media"
                ? "bg-warning"
                : "bg-success"
            }`}
          >
            {priority === "alta"
              ? "High priority"
              : priority === "media"
              ? "Medium priority"
              : "Low priority"}
          </span>
        </h6>
      </td>
      <td className="align-middle">
        <button title="Actualizar" className="btn btn-info gap-2">
          <Image
            src="/assets/update.svg"
            alt="Add"
            type="button"
            width={30}
            height={30}
            className="text-white"
          />
        </button>
        <button title="Hecho" className="btn btn-success gap-2">
          <Image
            src="/assets/success.svg"
            alt="Add"
            type="button"
            width={30}
            height={30}
            className="text-white"
          />
        </button>
        <button title="Eliminar" className="btn btn-danger">
          <Image
            src="/assets/delete.svg"
            alt="Add"
            type="button"
            width={30}
            height={30}
            className="text-white"
          />
        </button>
      </td>
    </tr>
  );
}
