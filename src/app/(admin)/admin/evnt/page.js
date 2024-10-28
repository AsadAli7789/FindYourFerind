export default function Evnt(){
    const events = [
        {
          title: "Birthday Event",
          description: "Birthday of Baby Girl",
          location: "Karachi",
          thumbnail:
            "https://images.unsplash.com/flagged/photo-1553056011-7811272649cb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBiYWJ5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
          date: new Date().toLocaleDateString(),
        },
        {
          title: "Cycling Marathon",
          description: "All Community Members will be have cycling Race",
          location: "Karachi",
          thumbnail:
            "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
          date: new Date().toLocaleDateString(),
        },
      ];
    return<>
      <div className="border border-black bg-white text-black ">
    <table className="border border-black w-[70vw] py-2">
        <tr className="border border-black py-2">
            <th className="border border-black py-2">thumbnail</th>
            <th className="border border-black py-2">title	</th>
            <th className="border border-black py-2">description</th>
            <th className="border border-black py-2">Location</th>
            <th className="border border-black py-2">Date
</th>
         </tr>
         {events.map((data ,ind)=>( <tr key={ind} className="border border-black text-center py-2 h-fit">
                <td className="border border-black flex justify-center"><img className="rounded-full" height={30} width={50} src={data.thumbnail}/></td>
                <td className="border border-black">{data.title}</td>
                <td className="border border-black">{data.description}</td>
                <td className="border border-black">{data.location}</td>
                <td className="border border-black">{data.date}</td>
             </tr>))}
        
    </table>
</div></>
}