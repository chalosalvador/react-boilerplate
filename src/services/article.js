import APIRequest from "./index";

/**
 * Created by chalosalvador on 2/5/20
 */

const getAll = async () => {
  return APIRequest.handleRequest('/api/articles', 'GET');
};

const get = async (id) => {
  return APIRequest.handleRequest(`/api/articles/${id}`, 'GET');
};


const Article = {
  getAll,
  get
};

export default Article;
