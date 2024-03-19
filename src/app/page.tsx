import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { MENU_ITEMS } from "./components/menuProps";

export default function Home() {
  return (
    <main className="p-6">
      <div className="text-4xl font-bold mb-4">
        Welcome to Calculators App
      </div>
      <div>
        <div className="md:text-lg my-2">
          Here is our features:
        </div>
        <div className="flex flex-wrap lg:max-w-5xl gap-4 mx-auto justify-center">
          {MENU_ITEMS.map((data, key)=>{
            return (
          <Link href={data.href} key={key}>
            <Card className="cursor-pointer h-full">
              <CardHeader>
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={data.image} alt={data.title} width={400} height={400} />
              </CardContent>
            </Card>
          </Link>
            )
          })}
        </div>
      </div>
    </main>
  );
}
