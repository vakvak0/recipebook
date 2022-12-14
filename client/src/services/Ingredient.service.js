import http from "../http-common.js";

class IngredientDataService {
  getAll() {
    return http.get("/ingredients");
  }

  get(id) {
    return http.get(`/ingredients/${id}`);
  }

  create(data) {
    return http.post("/ingredients", data);
  }

  update(id, data) {
    return http.put(`/ingredients/${id}`, data);
  }

  delete(id) {
    return http.delete(`/ingredients/${id}`);
  }

  deleteAll() {
    return http.delete(`/ingredients`);
  }

  findByTitle(title) {
    return http.get(`/ingredients?title=${title}`);
  }
}

export default new IngredientDataService();
