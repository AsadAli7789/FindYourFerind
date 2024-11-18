

export const ADDCategory = async (obj) => {
  
  try{

      const added = await fetch(`http://localhost:3000/api/categories`, {
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
  
  
export const GetCategory = async () => {
  
  let categories = await fetch(`http://localhost:3000/api/categories`);
  categories = await categories.json();
  console.log("Category Fetched successfully");
  return categories;

  };
  