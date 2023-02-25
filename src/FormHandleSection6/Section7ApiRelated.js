import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Section7BookList from "./Section7BookList";
import Section7BookCreate from "./Section7BookCreate";
import axios from "axios";

function Section7ApiRelated({ lists }) {
  const [list, setList] = useState([]);

  const fetchApi = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/posts")
      .then((response) => {
        setList(response.data.data);
        lists(response.data.data);
      })
      .catch((error) => {})
      .finally(() => {});
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const removeBookById = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/posts/${id}`)
      .then((response) => {
        fetchApi();
      })
      .catch((error) => {})
      .finally(() => {});
  };
  const editBookByIndex = (editList, key) => {
    axios
      .put(`http://127.0.0.1:8000/api/posts/${key}`, {
        name: editList.name,
      })
      .then((response) => {
        fetchApi();
      })
      .catch((error) => {})
      .finally(() => {});
  };
  const handleBookCreate = (data) => {
    axios
      .post(`http://127.0.0.1:8000/api/posts`, {
        name: data.name,
      })
      .then((response) => {
        fetchApi();
      })
      .catch((error) => {})
      .finally(() => {});
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6> Section 6 </h6>{" "}
            <Section7BookList
              list={list}
              onDelete={removeBookById}
              onEdit={editBookByIndex}
            />{" "}
            <hr />
            <Section7BookCreate onCreateBook={handleBookCreate} oncl />
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Section7ApiRelated;
