import React from 'react'

type Props = {}

const Loading = (props: Props) => {
    return (
        <div role="status" className="animate-pulse mx-auto p-10">
            <div className="h-2.5 bg-gray-300 rounded-full max-w-[640px] mb-2.5 mx-auto"></div>
            <div className="h-2.5 mx-auto bg-gray-300 rounded-full max-w-[540px]"></div>
            <div className="flex justify-center items-center mt-4">
                <div className="w-20 h-2.5 bg-gray-200 rounded-full mr-3"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Loading