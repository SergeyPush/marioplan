const initialState = {
  projects: [
    { id: 1, title: "help me", content: "some content" },
    { id: 2, title: "make money", content: "do your job" },
    { id: 3, title: "go fishing", content: "i do not have a rod" }
  ]
};

const authReducer = (state = initialState, action) => {
  return state;
};

export default authReducer;
