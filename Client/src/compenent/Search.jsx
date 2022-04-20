import React from 'react'

export default function Search() {
    return (
        <div className='w-full'>
            <div class="pt-2 relative mx-auto text-gray-600">
                <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    type="search" name="search" placeholder="Search" />
            </div>
            <div class="pt-10   text-gray-600 w-full">
                <table class="border-collapse border border-slate-500 ...">
                    <thead>
                        <tr>
                            <th class="border border-slate-600 ...">State</th>
                            <th class="border border-slate-600 ...">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-slate-700 ...">Indiana</td>
                            <td class="border border-slate-700 ...">Indianapolis</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-700 ...">Ohio</td>
                            <td class="border border-slate-700 ...">Columbus</td>
                        </tr>
                        <tr>
                            <td class="border border-slate-700 ...">Michigan</td>
                            <td class="border border-slate-700 ...">Detroit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
