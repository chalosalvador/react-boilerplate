import API from "./index";

/**
 * Created by chalosalvador on 2/5/20
 */

const getAll = async () => {
  const response =  await API.get('/api/articles');
  return response.data;
};

const get = async (id) => {
  const response = await API.get(`/api/articles/${id}`);
  return response.data;
};


const Article = {
  getAll,
  get
};

export default Article;
