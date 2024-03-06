"use client";
import Image from "next/image";
import React, { useState } from "react";

function CarsForm() {
  const [image, setImage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    power: "",
    consumption: "",
    emission: "",
    performance: "",
    price: "",
    datesortie: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/Cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Si le champ est un champ de type file, c'est pour l'image
    if (name === "image") {
      const file = files[0];
      // Vérifie s'il y a un fichier sélectionné
      if (file) {
        // Convertis l'image en base64
        convertToBase64(file);
      }
    } else {
      // Sinon, c'est un champ de texte normal
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const convertToBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      setFormData((prevState) => ({
        ...prevState,
        image: reader.result,
      }));
    };
    reader.onerror = (error) => {
      console.log("error", error);
    };
  };

  return (
    <>
      <form onSubmit={handlesubmit} className="flex flex-col gap-8 mt-8">
        <div className="flex gap-4">
          <label htmlFor="">Car name :</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            className="bg-slate-200 rounded "
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Image :</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
            className="bg-slate-200 rounded "
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={handleChange}
            value={formData.description}
            className="bg-slate-200 rounded w-[350px]"
            rows={4}
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Power</label>
          <input
            type="text"
            name="power"
            id="power"
            onChange={handleChange}
            value={formData.power}
            className="bg-slate-200 rounded "
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Consumption</label>
          <input
            type="text"
            name="consumption"
            id="consumption"
            onChange={handleChange}
            value={formData.consumption}
            className="bg-slate-200 rounded "
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">emission</label>
          <select
            name="emission"
            id="emission"
            onChange={handleChange}
            value={formData.emission}
            className="bg-slate-200 rounded"
          >
            <option value="Faible">Faible</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Forte">Forte</option>
          </select>
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Performance</label>
          <input
            type="text"
            name="performance"
            id="performance"
            onChange={handleChange}
            value={formData.performance}
            className="bg-slate-200 rounded "
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Prix</label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={handleChange}
            value={formData.price}
            className="bg-slate-200 rounded "
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Date de sortie</label>
          <input
            type="text"
            name="datesortie"
            id="datesortie"
            onChange={handleChange}
            value={formData.datesortie}
            className="bg-slate-200 rounded "
          />
        </div>

        <div>
          <input
            type="submit"
            value={"Send"}
            className="bg-slate-200 rounded cursor-pointer "
          />
        </div>
      </form>
      {image !== "" && image !== null ? (
        <Image src={image} width={100} height={100} alt="Image" />
      ) : null}
    </>
  );
}

export default CarsForm;
