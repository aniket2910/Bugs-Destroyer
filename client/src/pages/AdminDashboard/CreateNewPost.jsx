import { Button, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";

const CreateNewPost = (props) => {
  return (
    <>
      <form onSubmit={props.savePost}>
        <Heading>Create New Post</Heading>
        <label className="col-sm-12 col-form-label">
          <Text fontSize={20} fontWeight={600}>Title</Text>
          <Input
            className="form-control form-control-sm"
            autoFocus={true}
            type="text"
            placeholder="post title"
            onChange={props.savePostTitleToState}
            required
            ref={props.getTitle}
          />
        </label>
   
        <label >
          <Text fontSize={20} fontWeight={600} marginTop={4}>Content</Text>
          <Textarea
            className="form-control form-control-sm"
            placeholder="description"
            onChange={props.savePostContentToState}
            rows="18"
            cols="41"
            required
            ref={props.getContent}
          />
        </label>
        <br />
        <button style={{background:'green', color:'white', padding:'6px', borderRadius:'6px',
        paddingLeft:'18px', paddingRight:'18px', marginTop:'10px'
      }} title="save post" >
          save
        </button>
      </form>
    </>
  );
};

export default CreateNewPost;
