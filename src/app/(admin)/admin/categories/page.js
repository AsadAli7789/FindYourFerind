export default function Categories(){
    const categories = [
        {
          title: "Birthday",
          thumbnail:
            "https://images.unsplash.com/photo-1504437484202-613bb51ce359?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBiYWJ5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
          description: "All your Birthday Events",
        },
        {
          title: "Sports",
          thumbnail:
            "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
          description: "All Community Members will be have cycling Race",
        },
        {
          title: "Indoor Sports",
          thumbnail:
            "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
          description: "All Community Members will be have cycling Race",
        },
      ];
      
    return<>
      <div className="border border-black bg-white text-black ">
        <table className="border border-black w-[70vw] h-[100vh]">
            <tr className="border border-black">
                <th className="border border-black">thumbnail</th>
                <th className="border border-black">title	</th>
                <th className="border border-black">description</th>

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