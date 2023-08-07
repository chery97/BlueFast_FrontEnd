// interface userType {
//     albumId: number;
//     id: number;
//     title: string;
//     url: string;
//     thumbnailUrl: string;
// }
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import { PostsProps } from "../Layout";
import axios from "axios";

const PhotoList = () => {
    const [post, setPost] = useState<PostsProps[]>([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                setPost(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })

    }, []);
    return (
        <>
        <h1>Users</h1>
        <table>
            <tbody>
            {
                post.map((post, index) => {
                    // 10개만 출력
                    if (index < 10) {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className="title">
                                    <span>{post.title}</span>
                                </td>
                                <td className="img">
                                    <img src={post.thumbnailUrl}></img>
                                </td>
                            </tr>
                        )
                    }
                })
            }
            </tbody>
        </table>
        </>
    )
}

export default PhotoList