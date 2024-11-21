'use client';

import React from 'react';
import Link from 'next/link';
import CardPostProps from '@/types/CardPost';

const CardPost: React.FC<CardPostProps> = ({ title, description, link }) => {
    return (
        <Link href={link} className="block bg-white shadow-md shadow-black rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 text-sm mt-2">{description}</p>
            </div>
        </Link>
    );
};

export default CardPost;
