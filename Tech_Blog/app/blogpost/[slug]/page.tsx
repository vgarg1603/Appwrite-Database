'use client'
import Navbar from '@/components/Navbar';
import { Client, Databases, ID, Query } from "appwrite";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";

export default function BlogPost({ slug }) {
    
    const params = useParams();
    const [blog, setblog] = useState()

    const client = new Client();
    client.setProject('YOUR_PROJECT_ID');
    const databases = new Databases(client);

    useEffect(() => {
        let promise = databases.listDocuments(
            "<DATABASE_ID",
            "<COLLECTION_ID>",
            [
                Query.equal('slug', params.slug as string)
            ]
        );

        promise.then(function (response) {
            setblog(response.documents[0]);
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    }, [])

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className='text-3xl font-bold mb-6'>{blog ? blog.title: ""}</h1>
                <div className='my-8 font-bold text-sm italic mx-16'> 
                    {blog ? `By ${blog.author}` : ""}
                </div>
                <div className='w-5/6 mx-auto' dangerouslySetInnerHTML={{ __html: blog ? blog.content : "" }}></div>
                
            </div>
        </>
    );
}
