"use client"
import React, { useState } from "react";
import Image from "next/image";

export default function Form() {
  return (
    <form className="container d-flex justify-content-center align-items-center">
      <input
        type="text"
        placeholder="Escriba una nueva tarea..."
        required
        className="form-control w-50 mx-3"
      />
      <div className="d-flex gap-2">
        <select class="form-select" aria-label="Default select example">
          <option selected>Prioridad</option>
          <option value="1">Alta</option>
          <option value="2">Media</option>
          <option value="3">Baja</option>
        </select>
        <button type="submit" className="btn btn-light btn-sm">
          <Image
            src="/assets/add.svg"
            alt="Add"
            type="button"
            width={30}
            height={30}
            className=""
          />
        </button>
        <button type="button" className="btn btn-light btn-sm">
          <Image
            src="/assets/clean.svg"
            alt="Add"
            type="button"
            width={30}
            height={30}
            className=""
          />
        </button>
      </div>
    </form>
  );
}
