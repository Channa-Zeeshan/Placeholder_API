import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const url= await fetch('https://jsonplaceholder.typicode.com/comments')
  const response=  await url.json()

  return (
    <main>
   <div className="  text-center w-full h-full  bg-gray-500">
    <h1 className="text-5xl p-16"> Place holder API for Comments </h1>
    <div className=" flex justify-center flex-col w-full">
    {
        response.map((comments: any) => (
          <div className="   w-11/12  flex justify-center items-center border-2 mx-auto my-2 p-2 flex-col  text-lg bg-green-500 shadow-sm" >
            {/*              5   */}
            
            
              <h1 className="">
                {comments.body} 
              </h1>
              <p className="bg-blue-500 p-3 text-center  rounded shadow-md hover:bg-blue-800 hover:text-white"> 
                <Link href={`${comments.id}` }>Click here to view Detail </Link></p>
            
          </div>
        ))
      }
      </div>
      
   </div>
   </main>
  );
}
