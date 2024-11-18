import { ADDCategory } from "@/app/action/Categories"

export const  AddCategory = async  (formData)  =>   {
    const obj = {
        title : formData.get("title"),
        description : formData.get("description"),
        thumbnail : formData.get("thumbnail")
    }
    await ADDCategory(obj)
    console.log(obj)    
}