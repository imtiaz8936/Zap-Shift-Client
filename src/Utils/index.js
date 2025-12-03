import axios from "axios";

export const imageUpload = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const imgdata = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api_key}`,
    formData
  );

  return imgdata.data.data.display_url;
};
