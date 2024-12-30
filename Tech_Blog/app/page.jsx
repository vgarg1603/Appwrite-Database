'use client'
import Image from "next/image";
import { Client, Databases, ID, Query } from "appwrite";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  const [blogsList, setblogsList] = useState([]);


  const client = new Client();
  client.setProject('676ffe1f002efe9aedbb');
  const databases = new Databases(client);

  useEffect(() => {
    let promise = databases.listDocuments(
      "6770017500023bcdb7ee",
      "6770018a00026332ca13",
      []
    );

    promise.then(function (response) {
      setblogsList(response.documents);
      console.log(response);
    }, function (error) {
      console.log(error);
    });
  }, [])





  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center"></div>
      {blogsList.length == 0 && <p className="text-black">Loading...</p>}
      {blogsList && blogsList.map((blog) => (
          <BlogCard key={blog.$id}
            title={blog.title}
            metaDescription={blog.content}
            author={blog.author}
            slug={blog.slug}
          />
      ))}
    </>
  );
}
