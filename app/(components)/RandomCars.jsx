"use client"
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BadgeCardSpe from "@/app/(components)/BadgeCardSpe";
import Link from "next/link";
import GenerateRandomCars from "@/app/(components)/GenerateRandomCars";
import Image from 'next/image';

const RandomCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getAllCars = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/Cars/", {
          cache: "no-store",
        });
        const data = await res.json();
        setCars(data);
      } catch (err) {
        console.log("failed to get Cars", err);
      }
    };

    getAllCars();
  }, []);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  const selectRandomCars = () => {
    const randomCars = [];
    const totalCars = cars.length;
    // Sélectionner trois voitures aléatoires
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * totalCars);
      randomCars.push(cars[randomIndex]);
    }
    return randomCars;
  };

  // Ne sélectionnez des voitures aléatoires que si cars n'est pas vide
  const randomCars = cars.length > 0 ? selectRandomCars() : [];

  return (
    <div>
      {randomCars.map((car) => {
        return (
          <div key={car._id} className="cursor-pointer">
            <Card className="hover:shadow-lg ease-in-out duration-150">
              <CardHeader>
                <div className="rounded-full">
                  <Image
                    src={car.image}
                    width={200}
                    height={200}
                    alt="bmw"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
                <div>
                  <CardTitle>{car.name}</CardTitle>
                  <CardDescription>{car.datesortie}</CardDescription>
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
      <GenerateRandomCars randomCars={selectRandomCars} />
    </div>
  );
};

export default RandomCars;
