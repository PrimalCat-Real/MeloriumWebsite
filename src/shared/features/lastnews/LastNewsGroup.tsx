import { cn } from '@/modules/shadcn/lib/utils'
import React from 'react'

const LastNewsGroup = () => {
    const items = [
        { title: "Smarter Tracking", className: "col-span-12 md:col-span-4 bg-purple-200" },
        { title: "Automate Finances", className: "col-span-12 md:col-span-4 bg-purple-400" },
        { title: "Seamless Integrations", className: "col-span-12 md:col-span-4 bg-purple-200" },
        { title: "Cash Flow Snapshot", className: "col-span-12 md:col-span-5 bg-purple-300" },
        { title: "Visual Growth", className: "col-span-12 md:col-span-7 bg-purple-400" },
    ]
    return (
        // <div className="columns-3 gap-4 space-y-4 w-full">
        //     {items.map((item, index) => (
        //         <div
        //             key={index}
        //             className={`break-inside-avoid rounded-xl flex items-center justify-center text-purple-900 font-bold shadow-inner ${item.color}`}
        //             style={{ height: `${item.height}px` }}
        //         >
        //             {item.title} #{index + 1}
        //         </div>
        //     ))}
        // </div>
        <div className='grid grid-cols-12 gap-4 w-full auto-rows-auto h-full'>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        'relative flex flex-col justify-between p-6 overflow-hidden rounded-sm ',
                        item.className
                    )}
                >
                    <div className="relative z-10">
                        <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default LastNewsGroup