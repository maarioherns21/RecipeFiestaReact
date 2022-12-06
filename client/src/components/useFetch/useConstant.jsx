

export default function useConstant () {
const url = "http://localhost:4000/recipes";
const urlPost = "http://localhost:4000/recipes/new";
const POST = "POST";
const DELETE = "DELETE";
const PATCH = "PATCH";

    

return {
      url, urlPost, POST, DELETE, PATCH
    }
}