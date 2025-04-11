import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center">
            <div className="text-center px-4">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-gray-300 mb-8 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-300 font-medium inline-block">
                    Return Home
                </Link>
            </div>
        </main>
    );
}