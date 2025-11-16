import FullPost from "@/app/component/FullPost";
import getPostById from "@/lib/getPostById";
import {redirect} from "next/navigation";

export default async function FullPostPage({
    params,
    }: {
    params: Promise<{id: string}>;
    }) {
    const {id} = await params;

    let post = null;

    try {
        post = await getPostById(id);
    } catch (err) {
        console.error(err)
        redirect("/");
    }
    if (!post) {
        redirect("/");
    }
    return <FullPost post={post} />;
}