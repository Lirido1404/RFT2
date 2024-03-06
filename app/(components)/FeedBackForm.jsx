"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Image from "next/image";
import { useRouter } from "next/navigation";
function FeedBackForm({ idOfProduct }) {
  const router = useRouter();
  const handlesubmit = async (e) => {
    const res = await fetch("http://localhost:3000/api/FeedBack/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    router.refresh();
    router.push(`/EspaceDeVente/${idOfProduct}`);
  };

  const [formData, setFormData] = useState({
    nom: "",
    titre: "",
    description: "",
    note: 0,
    idOfProduct: idOfProduct,
  });

  const handleChange = (e) => {
    const value =
      e.target.name === "note" ? parseInt(e.target.value) : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        onSubmit={handlesubmit}
        className="flex flex-col gap-8 mt-8  w-1/4 mx-auto"
      >
        <div className="flex justify-between gap-4">
          <div className="flex flex-col max-w-64">
            <label htmlFor="">Votre nom :</label>

            <Input
              type="text"
              name="nom"
              id="nom"
              onChange={handleChange}
              value={formData.nom}
              placeholder="Maxime"
            />
          </div>

          <div className="flex flex-col max-w-64">
            <label htmlFor="">Titre :</label>

            <Input
              type="text"
              name="titre"
              id="titre"
              onChange={handleChange}
              placeholder="Belle voiture"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="">Description</label>

          <Textarea
            name="description"
            id="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Donnez nous votre avis !"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="">Note</label>

          <select
            defaultValue={0}
            onChange={handleChange}
            name="note"
            id="note"
            className="border-[1px] rounded-md"
          >
            <option value="0">0 étoile</option>
            <option value="1">1 étoile</option>
            <option value="2">2 étoiles</option>
            <option value="3">3 étoiles</option>
            <option value="4">4 étoiles</option>
            <option value="5">5 étoiles</option>
          </select>
        </div>

        <DrawerFooter>
          <Button>
            <input
              type="submit"
              value={"Envoyer"}
              className="w-full h-full cursor-pointer"
            />
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Annuler</Button>
          </DrawerClose>
        </DrawerFooter>
      </form>
    </>
  );
}

export default FeedBackForm;
