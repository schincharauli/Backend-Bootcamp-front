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
  try {
    const response = await instance.post("/users", {
      name: form.name.value,
      email: form.email.value,
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
    const id = "21fe6ad8-0a3a-4f2a-93c0-72bb7ee89aa7";
    const response = await instance.delete(`/users/${id}`);
    console.log("user Deleted Succesfully", response.data);
  } catch (error) {
    console.error("Error Deleting user:", error.message);
  }
};
