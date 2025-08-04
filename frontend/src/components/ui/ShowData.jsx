import React from 'react'
import copyTextToClioboard from '../../utils/copyText'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { toast } from 'sonner'

const ShowData = ({ data = [] }) => {
    return (
        <div className="px-2 sm:px-6 my-5 w-full">
            <div className="overflow-x-auto">
                <Table className="w-full min-w-[380px] border border-cyan-200 rounded-lg shadow-sm">
                    <TableCaption className="text-sm text-gray-500">A list of your uploaded files and OTPs.</TableCaption>
                    <TableHeader>
                        <TableRow className="bg-cyan-800 hover:bg-cyan-800">
                            <TableHead className="text-white text-base sm:text-lg px-4 py-3">File Name</TableHead>
                            <TableHead className="text-white text-base sm:text-lg px-4 py-3">Gateway OTP</TableHead>
                        </TableRow>

                    </TableHeader>
                    <TableBody>
                        {data?.map((e, i) => (
                            <TableRow key={i} className="h-14 even:text-black hover:text-black even:bg-cyan-50 even:hover:bg-cyan-800 hover:bg-cyan-800 transition-all duration-500 ease-in-out">
                                <TableCell className="text-center font-medium px-4 py-2 text-sm sm:text-base">
                                    {e?.filename}
                                </TableCell>
                                <TableCell className="text-center px-4 py-2 text-lg font-bold tracking-wider">
                                    <div className="flex items-center justify-between sm:justify-center gap-3">
                                        <span className="whitespace-nowrap">{e?.otp}</span>
                                        <button
                                            onClick={() => {
                                                copyTextToClioboard(e?.otp);
                                                toast("Text copied.");
                                            }}
                                            aria-label="Copy OTP"
                                            className="ml-2 flex items-center cursor-pointer justify-center bg-cyan-100 hover:bg-cyan-300 rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600 min-w-8 min-h-8"
                                        >
                                            {/* Inline SVG for clipboard */}
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                                stroke="currentColor" className="w-5 h-5 text-cyan-800"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M8 16h8M8 12h8m-7-8h6a2 2 0 012 2v16a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2zm7 0V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v2"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default ShowData
