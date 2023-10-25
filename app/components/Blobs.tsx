import React from 'react'

export default function Blobs() {
  return (
    <div className="absolute">
        <div className="fixed top-14 right-96 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10"></div>
        <div className="fixed top-6 right-52 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 -z-10"></div>
        <div className="fixed top-48 right-72 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 -z-10"></div>

        <div className="fixed bottom-14 left-96 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10"></div>
        <div className="fixed bottom-6 left-52 w-80 h-80 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 -z-10"></div>
        <div className="fixed bottom-48 left-72 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 -z-10"></div>
    </div>
  )
}
