
import { GetCategory } from "@/app/action/Categories";
import Modal1 from "@/components/ui/modal/modal";

export default async  function  Categories(){
  const categories1 = await GetCategory();


  console.log("categories=>", categories1);

      const categories = categories1.categories
  console.log("categories=>", categories);
      
      
    return<>
      <div className="border border-black bg-white text-black ">
        <table className="border border-black w-[70vw] h-[100vh]">
            <tr className="border border-black">
                <th className="border border-black">thumbnail</th>
                <th className="border border-black">title	</th>
                <th className="border border-black">description</th>
                <th className="border border-black">{<Modal1/>}</th>
             </tr>
             {categories.map((data ,ind)=>( <tr key={ind} className="border border-black text-center  py-2 h-fit">
                    <td className="border border-black py-2 flex justify-center  "><img className="" height={50} width={100} src={data.thumbnail}/></td>
                    <td className="border border-black py-2">{data.title}</td>
                    <td className="border border-black py-2">{data.description}</td>
                 </tr>))}
            
        </table>
    </div>
    
    </>
}