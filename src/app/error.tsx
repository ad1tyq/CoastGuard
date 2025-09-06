'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
                            <svg className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h2 className="mt-4 text-2xl font-bold text-gray-900">Something went wrong!</h2>
                        <p className="mt-2 text-gray-600">
                            {error.message || 'An unexpected error has occurred.'}
                        </p>
                        {error.digest && (
                            <p className="mt-2 text-sm text-gray-500">
                                Error ID: {error.digest}
                            </p>
                        )}
                    </div>

                    <div className="mt-6">
                        <button
                            onClick={reset}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors cursor-pointer"
                        >
                            Try again
                        </button>
                    </div>

                    <div className="mt-6 border-t border-gray-200 pt-4">
                        <h3 className="text-sm font-medium text-gray-900">What to do next?</h3>
                        <ul className="mt-2 text-sm text-gray-600 space-y-2">
                            <li>• Check your internet connection</li>
                            <li>• Refresh the page</li>
                            <li>• Contact support if the problem persists</li>
                        </ul>
                        <div className="flex justify-center">
                            <Link href="/"
                                className="rounded cursor-pointer transition-all duration-300 hover:scale-102 hover:bg-gray-400 hover:text-gray-700 px-5 py-[2px] font-semibold text-lg mt-5 text-gray-800 bg-gray-300">home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}