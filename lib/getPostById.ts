import getCollection, { POST_COLLECTION } from "@/db";
import { ObjectId } from "mongodb";
import { PostProps } from "@/types";
export default async function getPostById(id: string,): Promise<PostProps | null> {
    // const postId = ObjectId.createFromHexString(id);
    const postsCollection = await getCollection (POST_COLLECTION);

    let objectId;

    try {
        objectId = new ObjectId(id);
    } catch {
        return null;
    }

    const data = await postsCollection.findOne({ _id: objectId });

    if (!data){
        return null;
    }

    return {
        id: data._id.toString(),
        title: data.title,
        content: data.content,
        upvotes: data.upvotes,
        downvotes: data.downvotes,
    }

}