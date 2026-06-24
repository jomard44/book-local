import Link from "next/link";
interface ServiceProps {
    id: string,
    title: string,
    price: string,
    descreption: string,
    duration: string


}
export default function ServicesCard({ id, title, price, descreption, duration }: ServiceProps) {
  return (
    <li className="border rounded-lg p-4 mb-4 list-none">
      <div className="flex justify-between items-center text-slate-900">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="font-semibold">${price}</p>
      </div>

      <div className="flex justify-between items-center mt-2 text-gray-600">
        <p>{descreption}</p>
        <p>{duration}</p>
      </div>

      <div className="flex justify-center items-center text-center font-semibold border-2 rounded mt-2 overflow-hidden">
        <Link href={`/delete/${id}`} className="bg-red-600/80 text-white py-2 w-full hover:bg-red-700">
          Delete
        </Link>
        <Link href={`/edit/${id}`} className="bg-green-600/80 text-white py-2 w-full hover:bg-green-700">
          Edit
        </Link>
      </div>
    </li>
  );
}
