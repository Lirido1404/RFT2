import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import BadgeCardSpe from "../(components)/BadgeCardSpe";
import Link from "next/link";
import SearchBar from "../(components)/SearchBar";
const getCars = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Cars/", {
      cache: "no-store",
    });
    return res.json();
  } catch (err) {
    console.log("failed to get Cars", err);
  }
};

// Fonction pour tronquer le texte à la longueur désirée
const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "...";
  }
  return description;
};

async function Page() {
  const { cars } = await getCars();

  let filterCars = [];

  const fetchData = async () => {
    const { cars } = await getCars();
  };

  return (
    <>
      <SearchBar cars={cars} />
      <div className="mt-8">
        <Separator />
      </div>
      <div className="grid grid-cols-3 w-[80%] mx-auto mt-12 gap-8">
        {cars.map((car) => {
          return (
            <div key={car._id} className=" cursor-pointer">
              <Card className="hover:shadow-lg ease-in-out duration-150">
                <CardHeader className="">
                  <div className="rounded-full">
                    <Image
                      src={car.image}
                      width={200}
                      height={200}
                      alt="bmw"
                      className=" w-16 h-16 object-cover rounded-full"
                    />
                  </div>

                  <div>
                    <CardTitle>{car.name}</CardTitle>
                    <CardDescription> {car.datesortie} </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{truncateDescription(car.description, 120)}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/EspaceDeVente/${car._id}`}>
                    <Button variant="destructive">View Car</Button>
                  </Link>
                  <BadgeCardSpe
                    emission={car.emission}
                    power={car.power}
                    perf={car.performance}
                  />
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Page;
