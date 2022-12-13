import http from "../http-common";

class DataService {
  getRecies() {
    return http.get("/recipes");
  }
  getIngredients() {
    return http.get("/ingredients");
  }
}
