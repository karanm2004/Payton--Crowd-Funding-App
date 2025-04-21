import React from 'react'
import Link from 'next/link';

const About = () => {
    return (
        <div>
                <h1 className='text-3xl font-bold text-center mt-10 text-white'>About</h1>
                <div className="max-w-4xl mx-auto px-4 py-8">
                        <p className="text-lg text-center mt-6 mb-12 text-gray-300">
                                "Payton" is a crowdfunding platform that connects creators with their supporters to bring innovative projects to life.
                        </p>
                        
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-12">
                                <h2 className="text-2xl font-bold mb-4 text-blue-300">Our Story</h2>
                                <p className="mb-4 text-gray-200">
                                        Founded in 2025, "Payton" was born from a simple idea: creative work deserves support, and supporters deserve a meaningful connection. Our platform provides the perfect space for creators to showcase their projects and for supporters to fund ideas they believe in.
                                </p>
                                <p className="text-gray-200">
                                        What started as a small community of independent creators has grown into a thriving ecosystem where thousands of artists, innovators, entrepreneurs, and other creators can sustain their work through community funding and merchandise sales.
                                </p>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-center mt-12 mb-6 text-white">How It Works</h2>
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                                <div className="bg-gray-800 p-5 rounded-lg shadow-md">
                                        <h3 className="font-bold text-xl mb-3 text-violet-300">For Creators</h3>
                                        <p className="text-gray-200">Share your projects, build your profile, and connect with supporters who believe in your work. Set up different support tiers, offer exclusive content, and showcase your merchandise with direct purchase links.</p>
                                </div>
                                <div className="bg-gray-800 p-5 rounded-lg shadow-md">
                                        <h3 className="font-bold text-xl mb-3 text-violet-300">For Supporters</h3>
                                        <p className="text-gray-200">Discover creators you love, support their projects with contributions, and enjoy exclusive content, merchandise, and benefits reserved for backers.</p>
                                </div>
                                <div className="bg-gray-800 p-5 rounded-lg shadow-md">
                                        <h3 className="font-bold text-xl mb-3 text-violet-300">The Marketplace</h3>
                                        <p className="text-gray-200">Browse and purchase creator merchandise directly through our platform. Every purchase supports creators and helps fund their next big ideas.</p>
                                </div>
                        </div>
                        
                        <div className="my-12 border-l-4 border-blue-400 pl-6">
                                <h2 className="text-2xl font-bold mb-4 text-white">Our Values</h2>
                                <ul className="space-y-2">
                                        <li className="flex items-start">
                                                <span className="text-violet-300 font-bold mr-2">•</span>
                                                <span className="text-gray-200"><strong className="text-white">Community First:</strong> We prioritize healthy, supportive relationships between creators and their supporters.</span>
                                        </li>
                                        <li className="flex items-start">
                                                <span className="text-violet-300 font-bold mr-2">•</span>
                                                <span className="text-gray-200"><strong className="text-white">Creative Freedom:</strong> We believe creators should have the independence to pursue their vision.</span>
                                        </li>
                                        <li className="flex items-start">
                                                <span className="text-violet-300 font-bold mr-2">•</span>
                                                <span className="text-gray-200"><strong className="text-white">Transparency:</strong> Clear policies, fair fees, and honest communication guide everything we do.</span>
                                        </li>
                                        <li className="flex items-start">
                                                <span className="text-violet-300 font-bold mr-2">•</span>
                                                <span className="text-gray-200"><strong className="text-white">Inclusivity:</strong> Everyone deserves a place to share their projects and find their audience.</span>
                                        </li>
                                </ul>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-900 to-violet-900 p-8 rounded-lg text-center mb-12">
                                <h2 className="text-2xl font-bold mb-4 text-white">Join Our Community</h2>
                                <p className="mb-6 text-gray-200">Whether you're a creator looking to fund your next project or someone who wants to support innovative ideas, there's a place for you here.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/login">
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
                                                    Start a Project
                                            </button>
                                        </Link>
                                        <Link href="/search">
                                            <button className="bg-gray-800 hover:bg-gray-700 text-violet-300 font-bold py-2 px-6 rounded-full border border-violet-400 transition-colors">
                                                    Back a Project
                                            </button>
                                        </Link>
                                </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-center mt-12 mb-6 text-white">Frequently Asked Questions</h2>
                        <div className="space-y-4 mb-12">
                                <div className="border-b border-gray-700 pb-4">
                                        <h3 className="font-bold text-lg mb-2 text-blue-300">How is this different from other platforms?</h3>
                                        <p className="text-gray-300">Payton combines crowdfunding with a merchandise marketplace, creating a comprehensive platform for creators to generate income. We also offer lower fees and more creator-friendly policies.</p>
                                </div>
                                <div className="border-b border-gray-700 pb-4">
                                        <h3 className="font-bold text-lg mb-2 text-blue-300">What types of creators can join?</h3>
                                        <p className="text-gray-300">We welcome all creators with innovative projects, including product designers, artists, musicians, filmmakers, writers, game developers, and entrepreneurs.</p>
                                </div>
                                <div className="border-b border-gray-700 pb-4">
                                        <h3 className="font-bold text-lg mb-2 text-blue-300">How does merchandise integration work?</h3>
                                        <p className="text-gray-300">Creators can showcase their products directly on their profile with purchase links. This provides an additional revenue stream alongside crowdfunding contributions.</p>
                                </div>
                        </div>
                        
                        <footer className="text-center text-gray-400 mt-16">
                                <p>© 2023 Payton. All rights reserved.</p>
                        </footer>
                </div>
        </div>
    )
}

export default About

export const metadata = {
    title:"About - Payton",
}
