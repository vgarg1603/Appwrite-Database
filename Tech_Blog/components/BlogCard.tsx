import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
    slug: string;
    title: string;
    metaDescription: string;
    author: string;
    onReadMore: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, metaDescription, author, slug }) => {
    return (
        <div className="blog-card">
            <h2 className="blog-title">{title}</h2>
            <p className="blog-meta-description">{metaDescription}</p>
            <p className="blog-author">By {author}</p>
            <Link href={`blogpost/${slug}`}><button className="read-more-button" >Read More</button></Link>
            <style jsx>{`
                .blog-card {
                    border: 1px solid #ddd;
                    padding: 16px;
                    border-radius: 8px;
                    margin: 16px 0;
                    transition: box-shadow 0.3s ease;
                }
                .blog-card:hover {
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                }
                .blog-title {
                    font-size: 1.5em;
                    margin-bottom: 8px;
                }
                .blog-meta-description {
                    font-size: 1em;
                    margin-bottom: 16px;
                }
                .blog-author {
                    font-size: 0.9em;
                    color: #555;
                    margin-bottom: 16px;
                }
                .read-more-button {
                    background-color: #0070f3;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .read-more-button:hover {
                    background-color: #005bb5;
                }
                @media (max-width: 600px) {
                    .blog-card {
                        padding: 12px;
                    }
                    .blog-title {
                        font-size: 1.2em;
                    }
                    .blog-meta-description {
                        font-size: 0.9em;
                    }
                    .read-more-button {
                        padding: 6px 12px;
                    }
                }
            `}</style>
        </div>
    );
};

export default BlogCard;