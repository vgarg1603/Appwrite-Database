'use client'
import Image from "next/image";
import { Client, Databases, ID, Query } from "appwrite";


export default function Home() {
  const blogsList =
    [
      {
        "title": "Learn Python",
        "content": "<h1>Learn Python</h1><p>Python is one of the most popular and versatile programming languages in the world. It is known for its simplicity, readability, and vast ecosystem of libraries that make it an excellent choice for beginners and professionals alike...</p>",
        "slug": "learn-python",
        "views": 0,
        "author": "John Doe",
        "is_published": true
      },
      {
        "title": "Getting Started with JavaScript",
        "content": "<h1>Getting Started with JavaScript</h1><p>JavaScript is the backbone of modern web development. It allows you to create dynamic and interactive websites. Learn the basics and build amazing web applications...</p>",
        "slug": "getting-started-with-javascript",
        "views": 0,
        "author": "Jane Smith",
        "is_published": true
      },
      {
        "title": "Mastering HTML and CSS",
        "content": "<h1>Mastering HTML and CSS</h1><p>HTML and CSS are the building blocks of the web. With these skills, you can design and structure beautiful, responsive websites. Dive into the fundamentals and beyond...</p>",
        "slug": "mastering-html-css",
        "views": 0,
        "author": "Alice Johnson",
        "is_published": true
      },
      {
        "title": "Introduction to Data Science",
        "content": "<h1>Introduction to Data Science</h1><p>Data Science is revolutionizing industries across the globe. Learn how to work with data, clean it, and extract meaningful insights using Python, R, and SQL...</p>",
        "slug": "introduction-to-data-science",
        "views": 0,
        "author": "John Doe",
        "is_published": true
      },
      {
        "title": "Building Web Apps with Django",
        "content": "<h1>Building Web Apps with Django</h1><p>Django is a high-level Python web framework that makes building web applications fast and easy. Learn how to create robust, scalable, and secure web applications...</p>",
        "slug": "building-web-apps-with-django",
        "views": 0,
        "author": "Jane Smith",
        "is_published": true
      },
      {
        "title": "Exploring Machine Learning",
        "content": "<h1>Exploring Machine Learning</h1><p>Machine Learning is at the heart of AI advancements. Learn how to build predictive models and work with frameworks like TensorFlow and Scikit-learn...</p>",
        "slug": "exploring-machine-learning",
        "views": 0,
        "author": "Alice Johnson",
        "is_published": true
      },
      {
        "title": "Understanding Git and GitHub",
        "content": "<h1>Understanding Git and GitHub</h1><p>Version control is a vital skill for any developer. Learn how to use Git for tracking changes and GitHub for collaboration on coding projects...</p>",
        "slug": "understanding-git-github",
        "views": 0,
        "author": "John Doe",
        "is_published": true
      },
      {
        "title": "Learn React.js for Frontend Development",
        "content": "<h1>Learn React.js for Frontend Development</h1><p>React.js is a powerful JavaScript library for building user interfaces. Learn its core concepts and create amazing single-page applications...</p>",
        "slug": "learn-react-js",
        "views": 0,
        "author": "Jane Smith",
        "is_published": true
      },
      {
        "title": "Cloud Computing Basics",
        "content": "<h1>Cloud Computing Basics</h1><p>Cloud computing is transforming IT operations. Learn about cloud providers, deployment models, and how to deploy applications in the cloud...</p>",
        "slug": "cloud-computing-basics",
        "views": 0,
        "author": "Alice Johnson",
        "is_published": true
      },
      {
        "title": "Introduction to Cybersecurity",
        "content": "<h1>Introduction to Cybersecurity</h1><p>Cybersecurity is crucial in today’s digital world. Learn about common threats, best practices, and tools to protect systems and networks from attacks...</p>",
        "slug": "introduction-to-cybersecurity",
        "views": 0,
        "author": "John Doe",
        "is_published": true
      }
    ]



  const client = new Client();
  client.setProject('676ffe1f002efe9aedbb');
  const databases = new Databases(client);

  for (let i = 0; i < blogsList.length; i++) {
    const element = blogsList[i];
    const promise = databases.createDocument(
      '6770017500023bcdb7ee',
      '6770018a00026332ca13',
      ID.unique(),
      element
    );

    promise.then(function (response) {
      console.log(response);
    }, function (error) {
      console.log(error);
    });
  }


  return (
    <>
      <nav>Navbar</nav>
      <main>app here</main>
    </>
  );
}
