import { Router } from "express";
import { Movie } from "../types";

const movies: Movie[] = [
  {
   id: 1,
   title: "hey",
   director: "me",
   duration: 230,
   description:"nsm"
  },
  {
    id: 2,
    title: "yo",
    director: "me",
    duration: 220,
    imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

   },
   {
    id: 3,
    title: "hello",
    director: "me",
    duration: 210,
    budget:2555555555,
   }
];

const router = Router();

router.get("/", (_req, res) => {
  return res.json(movies);
});

export default router;
