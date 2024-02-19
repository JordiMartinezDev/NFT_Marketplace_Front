"use server";
async function uploadToDB(formData: FormData) {
  console.log(formData.getAll("image"));
  console.log("trying to upload...");
}

export default uploadToDB;
