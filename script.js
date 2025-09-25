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
      age: form.age.value,
      // id: form.id.value,
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
