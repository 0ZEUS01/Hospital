import React from 'react'

export default function AddP() {
  return (
    <div className="mt-10 sm:mt-0">
                                        <div className="md:grid md:grid-cols-3 md:gap-6">
                                            <div className="md:col-span-1">
                                                <div className="px-4 sm:px-0">
                                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Patient Informations</h3>
                                                    <p className="mt-1 text-sm text-gray-600">Add your new patient to the database</p>
                                                </div>
                                            </div>
                                            <div className="mt-5 md:mt-0 md:col-span-2">
                                                <form action="#" method="POST">
                                                    <div className="shadow overflow-hidden sm:rounded-md">
                                                        <div className="px-4 py-5 bg-white sm:p-6">
                                                            <div className="grid grid-cols-6 gap-6">
                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                                        First name
                                                                    </label>
                                                                    <input
                                                                    type="text"
                                                                        id="first-name"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="mt-1 block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                                        Last name
                                                                    </label>
                                                                    <input
                                                                    type="text"
                                                                        id="last-name"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="mt-1 block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    />
                                                                </div>
                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                                        CIN
                                                                    </label>
                                                                    <input
                                                                    type="text"
                                                                        id="country"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="mt-1 block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-4">
                                                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                                        Email address/Phone number
                                                                    </label>
                                                                    <input
                                                                    type="text"
                                                                        id="email-address"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="mt-1 block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    />
                                                                </div>
                                                                <div className="justify-items-start ">
                                                                <div className="flex justify-evenly  col-span-6 sm:col-span-3">
                                                                    <div>
                                                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700" for="Homme">
                                                                        Homme
                                                                    </label>
                                                                    <input
                                                                    type="radio"
                                                                        id="Homme"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                    /></div>
                                                                    <div>
                                                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700" for="Femme">
                                                                        Femme
                                                                    </label>
                                                                    <input
                                                                    type="radio"
                                                                        id="Femme"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                    /></div>
                                                                    </div>   
                                                                </div>
                                                                <br />
                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                                        City
                                                                    </label>
                                                                    <input
                                                                    type="text"
                                                                        id="city"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="mt-1 block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    />
                                                                       
                                                                </div>

                                                                <div className="col-span-6">
                                                                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">    
                                                                        AGE
                                                                    </label>
                                                                    <input
                                                                    type="text"
                                                                        id="street-address"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="mt-1 block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                                        City
                                                                    </label>
                                                                    <input
                                                                    type="text"
                                                                        id="city"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="mt-1 block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                                        State / Province
                                                                    </label>
                                                                    <input
                                                                    type="text"
                                                                        id="country"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="mt-1 block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                                        ZIP / Postal code
                                                                    </label>
                                                                    <input
                                                                    type="text"
                                                                        id="country"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="mt-1 block w-full py-2 px-3 border  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                            <button
                                                                type="submit"
                                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white sm:bg-[#193152] hover:bg-[#0f1e33] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            >
                                                                Save
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
  )
}
