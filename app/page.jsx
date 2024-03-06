import Image from "next/image";

import "./page.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Badge } from "@/components/ui/badge";

import { Separator } from "@/components/ui/separator";

import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="relative w-full h-[800px] ">
        <div className="w-full  flex justify-evenly p-2 mt-6">
          <Link href={"#bmw"}>
            <Image
              src="/Images/bmwlogo.svg"
              width={60}
              height={60}
              alt="bmw"
              className=" bmwlogo cursor-pointer"
            />
          </Link>
          <Link href={"#mercedes"}>
            <Image
              src="/Images/mercedeslogo.svg"
              width={60}
              height={60}
              alt="mercedes"
              className="hover:rotate-[120deg] ease-in-out duration-200 cursor-pointer"
            />
          </Link>
          <Link href={"#audi"}>
            <Image
              src="/Images/audilogo.svg"
              width={60}
              height={60}
              alt="audi"
              className="hover:rotate-[180deg] ease-in-out duration-200 cursor-pointer"
            />
          </Link>
        </div>
        <div className="p-32">
          <div className="flex flex-col gap-2">
            <p className=" opacity-65">Mercedes 190 evo 2</p>
            <h1 className="text-7xl font-bold opac">
              Découvrez la beauté <br /> allemande
            </h1>
            <p className="w-[45ch] text-lg mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              asperiores voluptatem quae similique architecto voluptas placeat
              ipsum ullam sint mollitia. Univers allemand
            </p>
            <Button className="w-80 font-bold" variant="destructive">
              Découvrir
            </Button>
          </div>
        </div>
        <div className="">
          <Image
            src="/Images/mcevo2.png"
            width={1200}
            height={600}
            alt="evo2"
            className="drop-shadow-xl absolute bottom-16 right-0 animvoit1"
          />
        </div>
      </div>

      <div className="w-[70%] mx-auto mt-20" id="bmw">
        <Separator />
      </div>

      <div className="w-full flex mt-20 ">
        <div className="w-1/2 flex items-center justify-center ">
          <Image
            src="/Images/bmwlogocolor.svg"
            width={700}
            height={700}
            className="absolute opacity-85"
            alt="bmw logo"
          />
          <Image
            src="/Images/bmw/bmwm8.png"
            width={800}
            height={800}
            className="aret absolute animvoit2 mr-40"
            alt="bmw"
          />
        </div>

        <div className="w-1/2  grid grid-cols-2 p-20 gap-8">
          <Card className="hover:shadow-lg ease-in-out duration-150">
            <CardHeader className="">
              <div className="rounded-full">
                <Image
                  src="/Images/bmw/bmwm2t.jpg"
                  width={200}
                  height={200}
                  alt="bmw"
                  className=" w-16 h-16 object-cover rounded-full"
                />
              </div>

              <div>
                <CardTitle>BMW M2 G87</CardTitle>
                <CardDescription>2023</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                distinctio?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={"/EspaceDeVente/65e889963d9c9cfcf606970d"}>
                <Button variant="destructive">View Car</Button>
              </Link>
              <Badge variant="outline">New</Badge>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg ease-in-out duration-150">
            <CardHeader className="">
              <div className="rounded-full">
                <Image
                  src="/Images/bmw/m3.jpg"
                  width={200}
                  height={200}
                  alt="bmw"
                  className=" w-16 h-16 object-cover rounded-full"
                />
              </div>

              <div>
                <CardTitle>BMW M3 G80</CardTitle>
                <CardDescription>2022</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                distinctio?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={"/EspaceDeVente/65e88a373d9c9cfcf6069718"}>
                <Button variant="destructive">View Car</Button>{" "}
              </Link>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg ease-in-out duration-150">
            <CardHeader className="">
              <div className="rounded-full">
                <Image
                  src="/Images/bmw/bmw135i2.jpg"
                  width={200}
                  height={200}
                  alt="bmw"
                  className=" w-16 h-16 object-cover rounded-full"
                />
              </div>

              <div>
                <CardTitle>BMW 135i</CardTitle>
                <CardDescription>2007</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                distinctio?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={"/EspaceDeVente/65e88a9f3d9c9cfcf6069723"}>
                <Button variant="destructive">View Car</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg ease-in-out duration-150">
            <CardHeader className="">
              <div className="rounded-full">
                <Image
                  src="/Images/bmw/bmwm5.jpg"
                  width={200}
                  height={200}
                  alt="bmw"
                  className=" w-16 h-16 object-cover rounded-full"
                />
              </div>

              <div>
                <CardTitle>BMW M5 CS F90</CardTitle>
                <CardDescription>2021</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                distinctio?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={"/EspaceDeVente/65e88b013d9c9cfcf6069726"}>
                <Button variant="destructive">View Car</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="w-[70%] mx-auto mt-20" id="mercedes">
        <Separator />
      </div>

      <div className="w-full flex mt-20">
        <div className="w-1/2  grid grid-cols-2 p-20 gap-8">
          <Card className="hover:shadow-lg ease-in-out duration-150">
            <CardHeader className="">
              <div className="rounded-full">
                <Image
                  src="/Images/mercedes/w205.jpg"
                  width={200}
                  height={200}
                  alt="bmw"
                  className=" w-16 h-16 object-cover rounded-full"
                />
              </div>

              <div>
                <CardTitle>Mercedes W205</CardTitle>
                <CardDescription>2015</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                distinctio?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={"/EspaceDeVente/65e88b663d9c9cfcf6069729"}>
                <Button variant="destructive">View Car</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg ease-in-out duration-150">
            <CardHeader className="">
              <div className="rounded-full">
                <Image
                  src="/Images/mercedes/classG.jpg"
                  width={200}
                  height={200}
                  alt="bmw"
                  className=" w-16 h-16 object-cover rounded-full"
                />
              </div>

              <div>
                <CardTitle>Mercedes Class G</CardTitle>
                <CardDescription>2012</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                distinctio?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={"/EspaceDeVente/65e88c0b3d9c9cfcf606972d"}>
                <Button variant="destructive">View Car</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg ease-in-out duration-150">
            <CardHeader className="">
              <div className="rounded-full">
                <Image
                  src="/Images/mercedes/cls63.jpg"
                  width={200}
                  height={200}
                  alt="bmw"
                  className=" w-16 h-16 object-cover rounded-full"
                />
              </div>

              <div>
                <CardTitle>Mercedes CLS63</CardTitle>
                <CardDescription>2010</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                distinctio?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={"/EspaceDeVente/65e88c6d3d9c9cfcf6069731"}>
                <Button variant="destructive">View Car</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg ease-in-out duration-150">
            <CardHeader className="">
              <div className="rounded-full">
                <Image
                  src="/Images/mercedes/classE.jpg"
                  width={200}
                  height={200}
                  alt="bmw"
                  className=" w-16 h-16 object-cover rounded-full"
                />
              </div>

              <div>
                <CardTitle>Mercedes Class E</CardTitle>
                <CardDescription>2020</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                distinctio?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={"/EspaceDeVente/65e88cb83d9c9cfcf6069737"}>
                <Button variant="destructive">View Car</Button>
              </Link>
              <Badge variant="outline">New</Badge>
            </CardFooter>
          </Card>
        </div>

        <div className="w-1/2 flex items-center justify-center ">
          <Image
            src="/Images/mercedeslogo.svg"
            width={550}
            height={550}
            className="absolute opacity-100"
            alt="bmw logo"
          />
          <Image
            src="/Images/mercedes/amggt.png"
            width={950}
            height={950}
            className="aret absolute animvoit2"
            alt="bmw"
          />
        </div>
      </div>

      <div className="w-[70%] mx-auto mt-20" id="audi">
        <Separator />
      </div>

      <div className="w-[95%] mx-auto flex justify-between mt-20">
        <div className="p-8">
          <Card className="hover:shadow-lg ease-in-out duration-150">
            <CardHeader className="">
              <div className="rounded-full">
                <Image
                  src="/Images/audi/audia3.jpg"
                  width={200}
                  height={200}
                  alt="bmw"
                  className=" w-16 h-16 object-cover rounded-full"
                />
              </div>

              <div>
                <CardTitle>Audi A3</CardTitle>
                <CardDescription>2020</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                distinctio?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={"/EspaceDeVente/65e88d0f3d9c9cfcf606973a"}>
                <Button variant="destructive">View Car</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center items-start ">
          <Image
            src="/Images/audilogo.svg"
            alt="r8"
            width={500}
            height={500}
            className=" scale-y-100 z-1 hover:scale-y-50 pt-10 duration-200 ease-in-out "
          />
          <Image
            src="/Images/audi/audir8.png"
            alt="r8"
            width={300}
            height={300}
            className="absolute z-2"
          />
        </div>

        <div className="p-8">
          <Card className="hover:shadow-lg ease-in-out duration-150">
            <CardHeader className="">
              <div className="rounded-full">
                <Image
                  src="/Images/audi/audirs7.jpg"
                  width={200}
                  height={200}
                  alt="bmw"
                  className=" w-16 h-16 object-cover rounded-full"
                />
              </div>

              <div>
                <CardTitle>Audi RS7</CardTitle>
                <CardDescription>2022</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                distinctio?
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={"/EspaceDeVente/65e88d723d9c9cfcf6069741"}>
                <Button variant="destructive">View Car</Button>{" "}
              </Link>
              <Badge variant="outline">New</Badge>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="w-[70%] mx-auto mt-8">
        <Separator />
      </div>

      <div className="w-[80%] mx-auto mt-12">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">
              Des magasins de concessions sont-ils prévus ?
            </AccordionTrigger>
            <AccordionContent>
              Oui. Nous disposerons les modèles les plus récents dans des
              espaces dédiés à la vente physique.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold">
              Les gammes vont-elles s&apos;hétérogénéiser ?
            </AccordionTrigger>

            <AccordionContent>
              Oui. Il est possible que nous proposions des voitures de plus en
              plus cotés, celà peut amener à des prix plus élevés.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold">
              Des partenariats avec d&apos;autres marques sont-ils prévus ?
            </AccordionTrigger>
            <AccordionContent>
              Nous collabererons bien avec d&apos;autres marques que celles
              présentées, mais uniquement des marques allemandes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
