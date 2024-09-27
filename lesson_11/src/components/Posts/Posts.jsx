import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardLoading from "./../CardLoading/CardLoading";

import { sortPosts } from "./../../store/features/posts/slice";
import {
  fetchPosts,
  fetchPostCompleted,
} from "../../store/features/posts/thunks";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function Posts() {
  const { posts, isLoading, isError } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    dispatch(sortPosts());
  }, [posts]);

  const handleItemCompleted = async (item) => {
    dispatch(fetchPostCompleted(item));
  };

  if (isLoading) return <CardLoading />;

  if (isError) return <p>Error: {isError}</p>;

  return posts.length ? (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        {posts.map((item) => (
          <ListItem
            key={item.id}
            style={{ color: item.completed ? `crimson` : `` }}
            onClick={() => handleItemCompleted(item)}
            disablePadding
          >
            <ListItemButton>{item.title}</ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  ) : null;
}
