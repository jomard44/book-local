import Link from "next/link";

export default function services (){
    return(
        <div>
            services
            <h2>want to add a new service?</h2>
            <Link href="services/create" >Click here</Link>
        </div>
    )
}