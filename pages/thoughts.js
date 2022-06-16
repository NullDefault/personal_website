import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import PageTransition from "../components/structural/PageTransition";
import { Flex, Stack, Skeleton, useColorModeValue } from "@chakra-ui/react";
import Post from "../components/Post";
import { firebaseApp } from "../firebase";
import { getStorage } from "firebase/storage";
import PostCard from "../components/PostCard";

export default function Thoughts() {
  const [blogs, blogsLoading, blogsError] = useCollection(
    collection(getFirestore(firebaseApp), "blogs"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const storage = getStorage();

  return (
    <PageTransition>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        minH="80vh"
        m="0 auto"
        pt={4}
      >
        {blogsError && <strong>Error: {JSON.stringify(blogsError)}</strong>}
        <Stack w="95%" spacing={8}>
          {!blogsLoading &&
            blogs &&
            blogs.docs.map((obj) => <PostCard title={obj.data().title} />)}
        </Stack>
      </Flex>
    </PageTransition>
  );
}
