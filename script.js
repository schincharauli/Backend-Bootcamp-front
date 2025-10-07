const instance = axios.create({
  baseURL: "http://localhost:4444" + "/api/",
  headers: {
    "Conten-Type": "application/json",
    Accept: "application/json",
  },
});

const getNotes = async () => {
  console.log("functions works");
  try {
    const response = await instance.get("/notes");
    console.log(response);
  } catch (error) {}
};

const addNote = async (event, form) => {
  // preventDefault for prevent refreshing all the time
  event.preventDefault();
  // console.log(form.note.value);
  try {
    const response = await instance.post("/notes", { note: form.note.value });
    console.log(response);
    // getNotes();
  } catch (error) {}
};

const addUser = async (event, form) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append("name", form.name.value);
  formData.append("email", form.email.value);
  formData.append("password", form.password.value);
  formData.append("avatar", form.avatar.files[0]);

  try {
    const response = await instance.post("/users", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
  } catch (error) {}
};

const getUser = async () => {
  console.log("functions works");
  try {
    const response = await instance.get("/users");
    console.log(response);
  } catch (error) {}
};

const updateUser = async (event, form) => {
  event.preventDefault();
  const id = "21fe6ad8-0a3a-4f2a-93c0-72bb7ee89aa7";
  try {
    const response = await instance.put(`/users/${id}`, {
      email: form.email.value,
    });
    console.log("user Updated", response.data);
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

const deleteUser = async (id) => {
  try {
    const id = "84a17d45-d185-4f30-886a-5d801b38fc92";
    const response = await instance.delete(`/users/${id}`, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZGVhOTIyNjU5YmI5YWYwNzYzYzhhMiIsImVtYWlsIjoiY2hpbmNoYXJhdWxpNDFAZ21haWwuY29tIiwiaWF0IjoxNzU5NDI1ODgzLCJleHAiOjE3NTk0Mjk0ODN9.yt0JDdm_GX09jlLfe4bdxIsatfhd786VEYk7-273wGw",
      },
    });

    console.log("user Deleted Succesfully", response.data);
  } catch (error) {
    console.error("Error Deleting user:", error.message);
  }
};

const login = async (event, form) => {
  event.preventDefault();
  try {
    const response = await instance.post("login", {
      email: form.email.value,
      password: form.password.value,
    });
    console.log("Login Success", response.data);
  } catch (error) {
    console.error("Error Login user:", error.message);
  }
};
