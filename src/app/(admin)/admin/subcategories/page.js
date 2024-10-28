export default function Subcategories(){
    const subcategories = [
        {
          title: "Cricket",
          category: "Sports",
          thumbnail:
            "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
          description: "All Community Members will be have cycling Race",
        },
        {
          title: "Footbal",
          category: "Sports",
          thumbnail:
            "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
          description: "All Community Members will be have cycling Race",
        },
        {
          title: "Tennis",
          category: "Sports",
          thumbnail:
            "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
          description: "All Community Members will be have cycling Race",
        },
      ];
    return<> 
      <div className="border border-black bg-white text-black ">
    <table className="border border-black w-[70vw]">
        <tr className="border border-black">
            <th className="border border-black">Thumbnail</th>
            <th className="border border-black">category	</th>
            <th className="border border-black">Title</th>
            <th className="border border-black">Description
            </th>

         </tr>
         {subcategories.map((data)=>( <tr className="border border-black text-center py-2 h-fit">
                <td className="border border-black py-2 flex justify-center"><img className="" height={50} width={100} src={data.thumbnail}/></td>
                <td className="border border-black py-2">{data.category}</td>

                <td className="border border-black py-2">{data.title}</td>
                <td className="border border-black py-2">{data.description}</td>
             </tr>))}
        
    </table>
</div></>
}