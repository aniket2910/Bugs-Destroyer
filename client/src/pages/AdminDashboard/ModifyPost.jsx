import React from "react";
import { Heading, Text, Textarea } from '@chakra-ui/react'


const ModifyPost = (props) => {
  return (
    <div style={{color:'white'}}>
      <form>
        <Heading >Modify Post</Heading>
        <label >
          <Text>Title</Text>
          <input
            className="form-control form-control-sm"
            defaultValue={props.title}
            autoFocus={true}
            onChange={props.savePostTitleToState}
            placeholder="title"
            size="39"
          />
        </label>
        <br />
        <label background={'grey'}>
          <b>Content</b>
          <Textarea
            defaultValue={props.content}
            onChange={props.savePostContentToState}
            placeholder="contents"
            rows="18"
            cols="41"
            background={'gray'}
            color={'red'}
            colorScheme='blue'
          />
        </label>
        <button
          title="update changes"
          className="btn btn-success ml-3"
          onClick={props.updatePost}
        >
          Update Post
        </button>
      </form>
    </div>
  );
};
export default ModifyPost;
