import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import {AiOutlineDelete, AiFillEdit} from 'react-icons/ai'
const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <Stack >
      <Box marginTop={8}>
        <section key={id}>
           <Flex justifyContent={'space-between'}>
          <Heading  as='h6' size='lg'>{title}</Heading>
          <Flex gap={10} marginTop={8}>
           <span title="edit post" style={{cursor:'pointer'}} onClick={() => editPost(id)}>
            <AiOutlineDelete fontSize={25} color={'red'}/>
          </span>
          <span title="delete post" style={{cursor:'pointer'}} onClick={() => deletePost(id)}>
            <AiFillEdit  fontSize={25} color={'green'}/>
          </span>
          </Flex>
           </Flex>
          <hr className="new1"></hr>
          <p>{content}</p>
         
        </section>
      </Box>
    </Stack>
  );
};

export default Post;
