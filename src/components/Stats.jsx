
function Stats() {
    return (
        <div>
            <div className=" py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Empowering Businesses Globally</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                Our platform is trusted by organizations worldwide to boost productivity, streamline operations, and enhance
                                customer experiences.
                            </p>
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col bg-white p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">Active Users</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">12,345</dd>
                            </div>
                            <div className="flex flex-col bg-white p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">Transactions Today</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">1.23M</dd>
                            </div>
                            <div className="flex flex-col bg-white p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">Total Revenue</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">$5.6B</dd>
                            </div>
                            <div className="flex flex-col bg-white p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">Happy Customers</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">98%</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats