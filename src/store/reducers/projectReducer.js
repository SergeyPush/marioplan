const initialState = {
  projects: [
    { id: 1, title: "help me", content: "some content" },
    { id: 2, title: "make money", content: "do your job" },
    { id: 3, title: "go fishing", content: "i do not have a rod" }
  ]
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      console.log("created project", action.project);
      return state;
    default:
      return state;
  }
};

export default authReducer;
