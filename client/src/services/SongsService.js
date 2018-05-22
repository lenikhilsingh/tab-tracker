import Api from "@/services/Api";

export default {
  index() {
    console.log("this worked");
    return Api().get("songs");
  }
};
