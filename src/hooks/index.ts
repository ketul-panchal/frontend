import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Post {
    "content" : string;
    "title" : string;
    "id" : number;
    "author" : {
        "name" : string;
    }
}

export const useBlog = ({id} : {id: string}) => {
    const [loading , setLoading] = useState(true);
    const [post , setPost] = useState<Post>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers: {
                authorization : localStorage.getItem("token")
            }
        })
        .then(response => {
            setPost(response.data.post);
            setLoading(false);
        })
    }, [id])

    return {
        loading,
        post
    }
}


export const useBlogs = () => {
    const [loading , setLoading] = useState(true);
    const [posts , setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers: {
                authorization : localStorage.getItem("token")
            }
        })
        .then(response => {
            setPosts(response.data.posts);
            setLoading(false);
        })
    }, [])

    return {
        loading,
        posts
    }
}