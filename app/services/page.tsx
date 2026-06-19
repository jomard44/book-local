import Link from "next/link";

export default function services() {
  const services = [
    {
      id: 1,
      title: "service #1",
      descreption: "desc...",
      duration: "10 minutes",
      price: "29.99",
    },
    {
      id: 2,
      title: "service #2",
      descreption: "desc...",
      duration: "20 minutes",
      price: "29.99",
    },
    {
      id: 3,
      title: "service #3",
      descreption: "desc...",
      duration: "30 minutes",
      price: "29.99",
    },
    {
      id: 4,
      title: "service #4",
      descreption: "desc...",
      duration: "40 minutes",
      price: "29.99",
    },
    {
      id: 5,
      title: "service #5",
      descreption: "desc...",
      duration: "50 minutes",
      price: "29.99",
    },
  ];
  return (
    <ul className="w-full mt-20">
      {services.map((service) => (
        <li key={service.id} className="border rounded-lg p-4 mb-4 ">
          <div className="flex justify-between items-center text-slate-900">
            <h2 className="font-bold text-lg">{service.title}</h2>
            <p className="font-semibold">${service.price}</p>
          </div>

          <div className="flex justify-between items-center mt-2 text-gray-600">
            <p>{service.descreption}</p>
            <p>{service.duration}</p>
          </div>
          <div className="flex justify-center items-center  text-center font-semibold border-2 rounded mt-2">
            <Link
              href="delete"
              className="bg-red-600/80  w-full"
            >
              Delete
            </Link>
            <Link
              href="edit"
              className="bg-green-600/80  w-full"
            >
              Edit
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
