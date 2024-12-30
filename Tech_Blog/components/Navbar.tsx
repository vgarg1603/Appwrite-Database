import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-purple-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={'/'}><div className="text-white text-lg font-bold">
                    Tech Blog
                </div></Link>
                <div>
                    <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                    <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                    <a href="/create-post" className="text-white px-3 py-2 rounded-md text-sm font-medium">Create new post</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;