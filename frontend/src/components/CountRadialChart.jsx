import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 200,
        fill: '#ffffff',
    },
    {
        name: 'Boys',
        count: 110,
        fill: '#8884d8',
    },
    {
        name: 'Girls',
        count: 90,
        fill: '#83a6ed',
    },
];


function CountRadialChart() {
    return (
        <div className='bg-white rounded-md shadow-md flex flex-col p-4 min-w-[400px]'>
            {/* Title */}
            <div>
                <h1 className="text-2xl font-semibold text-center">Students :</h1>
            </div>
            {/* Chart */}
            <div>
                <ResponsiveContainer minHeight="300px" minWidth="300px" className={"bg-white"}>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={30} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                {/* Image */}
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            {/* Footer */}
            <div>

            </div>
        </div>
    )
}
export default CountRadialChart