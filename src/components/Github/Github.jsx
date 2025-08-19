import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


export default function GitHub(){
        console.log("loader");
        const data = useLoaderData();
        //  const [data,setData] = useState([]);

        //  useEffect(() =>{
                
        //          fetch('https://api.github.com/users/AjayPundir3011')
        //          .then(response => response.json())
        //          .then(data =>{
        //               console.log(data);
        //               setData(data);
        //          })
        //  },[])
     

         return (
            <div className="text-center m-4 bg-gray-600 text-white 
              p-4 text-3xl">Github Followers:{data.following}
              <img className =" text-center"src={data.avatar_url}></img>
              </div>
         )
}

export const GitHubLoaderInfo = async() =>{
        console.log("loader")
        const response = await(fetch('https://api.github.com/users/AjayPundir3011'));
        return response.json();
}



