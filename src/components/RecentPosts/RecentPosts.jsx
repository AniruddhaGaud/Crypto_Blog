import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import PostCard from "./PostCard";
import { blogData } from "../../Data";

// grid template is a css property that allow us to modify content as per the condition automatically.

const RecentPosts = () => {
  return (
    <Container maxW="1300px">
      <Heading m="8" fontSize="2xl">
        Recent Posts
      </Heading>
      <Grid
        gridGap="4"
        gridTemplateColumns="repeat(auto-fit,minmax(20rem,1fr))"
      >
        {blogData.map((post) => (
          <GridItem key={post.title} display="flex" justifyContent="center">
            <PostCard post={post} />
          </GridItem>
        ))}
      </Grid>
      <Heading m="8" textAlign="center" fontSize="2xl">
        Read More...
      </Heading>
    </Container>
  );
};

export default RecentPosts;
