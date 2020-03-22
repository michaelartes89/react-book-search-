import axios from "axios";

const query ="https://www.googleapis.com/books/v1/volumes?q="
const apiKey = process.env.API_KEY

export default {
    searchBooks: function (input) {
        return axios.get(query + input.split(" ").join("+") + apiKey)
    },
    getBooks: function () {
        return axios.get("/api/books");

    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);

    },

    saveBook: function (bookData) {
        console.log(bookData)
        return axios.post("/api/books", bookData)
    }
}