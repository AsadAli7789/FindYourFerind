

export const addCategory = async (obj) => {
  
  try{

      const added = await fetch(`http://localhost:3001/api/categories`, {
        method: "POST",
        body: JSON.stringify(obj),
      });
      if (added.ok) {
          console.log("Category added successfully");
          revalidatePath("/admin/categories");
      }
  }
  catch(err){console.log(err)}
  };
  