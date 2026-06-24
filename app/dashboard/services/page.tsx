import ServicesCard from "./componenets/ServicesCard";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "1",
      title: "service #1",
      descreption: "desc...",
      duration: "10 minutes",
      price: "29.99",
    },
    {
      id: "2",
      title: "service #2",
      descreption: "desc...",
      duration: "20 minutes",
      price: "29.99",
    },
    {
      id: "3",
      title: "service #3",
      descreption: "desc...",
      duration: "30 minutes",
      price: "29.99",
    },
    {
      id: "4",
      title: "service #4",
      descreption: "desc...",
      duration: "40 minutes",
      price: "29.99",
    },
    {
      id: "5",
      title: "service #5",
      descreption: "desc...",
      duration: "50 minutes",
      price: "29.99",
    },
  ];

  return (
    <>
    <ul className="w-full mt-20 max-w-2xl mx-auto px-4">
      {services.map((service) => (
        <ServicesCard
          key={service.id}
          id={service.id}
          title={service.title}
          descreption={service.descreption}
          duration={service.duration}
          price={service.price}
        />
      ))}
    </ul>
    <Link href="/dashboard/services/create">Add A New Service</Link>
    </>
  );
}
