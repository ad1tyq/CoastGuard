export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-6">
        {/* Animated Spinner */}
        <div className="flex justify-center mb-6">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
        </div>
        
        {/* Loading Text with Animation */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading Content</h2>
          <p className="text-gray-600 mb-6">Please wait while we prepare your page</p>
          
          {/* Animated Dots */}
          <div className="flex justify-center space-x-1">
            <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
            <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full animate-pulse w-3/4"></div>
          </div>
          <p className="text-right text-xs text-gray-500 mt-2">75% loaded</p>
        </div>
        
        {/* Tips Section */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h3 className="text-sm font-medium text-gray-800 mb-3">Did you know?</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>• Next.js automatically shows loading states during navigation</p>
            <p>• This component appears while page content is being fetched</p>
            <p>• Loading UI reduces perceived wait times for users</p>
          </div>
        </div>
      </div>
    </div>
  );
}