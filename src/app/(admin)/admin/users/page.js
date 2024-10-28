export default function Users(){
    const users = [
        {
          fullname: "Bilal Raza",
          email: "attari1235@gmail.com",
          location: "Karachi",
          profileImage:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHwwÇ",
          events: 5,
        },
        {
          fullname: "Ahmed Raza",
          email: "raza@gmail.com",
          location: "Karachi",
          profileImage:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHwwÇ",
          events: 5,
        },
        {
          fullname: "Asad Raza",
          email: "asad@gmail.com",
          location: "Karachi",
          profileImage:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHwwÇ",
          events: 5,
        },
      ];
    return<><div>
    <div className="border border-black bg-white text-black  ">
        <table className="border border-black w-[70vw]">
            <tr className="border border-black">
                <th className="border border-black">Picture</th>
                <th className="border border-black">Fullname	</th>
                <th className="border border-black">Email</th>
                <th className="border border-black">Location</th>
                <th className="border border-black">Events
</th>
             </tr>
             {users.map((data)=>( <tr className="border border-black text-center py-2 h-fit">
                    <td className="border border-black flex justify-center"><img className="rounded-full" height={30} width={50} src={data.profileImage}/></td>
                    <td className="border border-black">{data.fullname}</td>
                    <td className="border border-black">{data.email}</td>
                    <td className="border border-black">{data.location}</td>
                    <td className="border border-black">{data.events}</td>
                 </tr>))}
            
        </table>
    </div>

</div></>
}