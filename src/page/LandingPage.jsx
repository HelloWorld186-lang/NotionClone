import React from 'react';
import CodeExample from '../component/CodeExample';
import CodeShowing from '../component/CodeShowing';
import Signup from '../assets/Signup.png';
import Signin from '../assets/Signin.png';
import Docs from '../assets/Docs.png';
import Notes from '../assets/Notes.png';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
            Elevate Your Writing with Brainflow
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto">
            Craft clean, stylish, and precise documents effortlessly with our intuitive online editor.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <CodeExample 
            language="markdown"
            codeString={`# Hello, Markdown!\n\nWelcome to Brainflow. Create beautiful documents with simple text syntax.\n\n## Features\n\n- **Easy to Use:** Markdown syntax made simple.\n- **Real-Time Preview:** See changes as you type.\n`}
          />
          <CodeShowing
            heading="Welcome to Brainflow"
            content={`# Hello, Markdown!\n\nWelcome to Brainflow. Create beautiful documents with simple text syntax.\n\n## Features\n\n- **Easy to Use:** Markdown syntax made simple.\n- **Real-Time Preview:** See changes as you type.\n`}
          />
        </section>

        <section className="mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">
              Comprehensive Documentation
            </h2>
            <p className="text-lg text-gray-700 mb-4 text-center lg:text-left">
              Master Markdown with our detailed guide. Learn all the syntax you need to create stunning documents and take effective notes.
            </p>
            <div className="flex justify-center lg:justify-start">
              <img src={Docs} alt="Documentation Preview" className="rounded-lg shadow-lg max-w-full" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">
              Secure Authentication
            </h2>
            <p className="text-lg text-gray-700 mb-4 text-center lg:text-left">
              Protect your work with our robust authentication system. Easily sign up for a new account or sign in to access your documents.
            </p>
            <div className="flex justify-center lg:justify-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img src={Signin} alt="Sign In Page" className="rounded-lg shadow-md max-w-full" />
                <img src={Signup} alt="Sign Up Page" className="rounded-lg shadow-md max-w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">
              Powerful Note-Taking
            </h2>
            <p className="text-lg text-gray-700 mb-4 text-center lg:text-left">
              Organize your thoughts and ideas with our feature-rich note-taking interface.
            </p>
            <div className="flex justify-center lg:justify-start">
              <img src={Notes} alt="Notes Interface" className="rounded-lg shadow-lg max-w-full" />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default LandingPage;
