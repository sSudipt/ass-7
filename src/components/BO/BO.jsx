const BO = ({ B }) => {
    return (
        <div>
            <div className="w-[514px] h-auto pt-5 pl-6 pr-6 pb-5 bg-white mb-7 shadow-xl border rounded-lg">
                <div>
                    <h2 className='text-center mb-5'>Want to cook: {B.length}</h2>
                    <hr />
                    <table className='w-full mt-5 pl-10 pr-28'>
                        <thead>
                            <tr>
                                <th className='w-10'></th>
                                <th className='text-left'>Name</th>
                                <th className='text-left'>Time</th>
                                <th className='text-left'>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {B.map((cp, index) => (
                                <tr key={cp.recipe_id}> 
                                    <td>{index+1}</td>
                                    <td>{cp.recipe_name.slice(0, 25)}</td>
                                    <td>{cp.preparing_time}</td>
                                    <td>{cp.calories}</td>
                                    <td>
                                        <button className="btn bg-[#0BE58A] rounded-full px-6 py-2 text-black mt-3">
                                            Preparing
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='mt-8'>
                    <h2 className='text-center mb-5'>Currently cooking: 02</h2>
                    <hr />
                    <table className='w-full mt-5'>
                        <thead>
                            <tr>
                                <th className='text-left'>Name</th>
                                <th className='text-left'>Time</th>
                                <th className='text-left'>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Add your currently cooking recipes here */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BO;
