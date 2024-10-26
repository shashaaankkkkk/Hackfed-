
function Landing() {
    return (
        <>
            <div className="max-w-2xl m-auto p-[25%] px-4 h-screen " >
                <div className="items-start justify-between sm:flex">
                    <div>
                        <h4 className="text-gray-800 text-xl font-semibold">Team members</h4>
                        <p className="mt-2 text-gray-600 text-base sm:text-sm">Give your team members access to manage the system.</p>
                    </div>
                    <a href="javascript:void(0)" className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                        New member
                    </a>
                </div>
            </div>
        </>
    )
}
export default Landing