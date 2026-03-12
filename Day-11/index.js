import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(
  session({
    secret: "mysecret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  }),
);

app.use(cookieParser("codesnippet"));

app.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);

  res.send("Hello from node server");
});

app.get("/login", (req, res) => {
  req.session.user = {
    name: "shubham",
    email: "shubham@gmail.com",
    age: 22,
  };
  res.send(`${req.session.user.name} logged in`);
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("user logged out");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
