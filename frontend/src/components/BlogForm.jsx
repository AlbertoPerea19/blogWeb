import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import postService from "../services/postService";

const BlogForm = ({onPostSuccess, onCloseModal}) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      title: "",
      author: "",
      content: "",
    };

    if (formData.title.trim() === "") {
      newErrors.title = "El título es obligatorio";
      valid = false;
    }

    if (formData.author.trim() === "") {
      newErrors.author = "El autor es obligatorio";
      valid = false;
    }

    if (formData.content.trim() === "") {
      newErrors.content = "El contenido es obligatorio";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      try {
        const postData = {
          title: formData.title,
          author: formData.author,
          content: formData.content,
        };
        await postService.createPost(postData);
        setFormData({
          title: "",
          author: "",
          content: "",
        });
        setErrors({
          title: "",
          author: "",
          content: "",
        });
        onPostSuccess();
        onCloseModal();
      } catch (error) {
        console.log("Error al crear el post:", error);
        alert(`Error al crear el post: ${error.message}`);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-dark">
      <Form.Group controlId="formTitle">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          isInvalid={errors.title}
        />
        <Form.Control.Feedback type="invalid">
          {errors.title}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formAuthor">
        <Form.Label>Autor</Form.Label>
        <Form.Control
          type="text"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          isInvalid={errors.author}
        />
        <Form.Control.Feedback type="invalid">
          {errors.author}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formContent">
        <Form.Label>Contenido</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          isInvalid={errors.content}
        />
        <Form.Control.Feedback type="invalid">
          {errors.content}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default BlogForm;
