import { AlertData } from "../../../data/AlertData"
export default function CommunityAlerts() {
    return (
        <>
            <div className="w-[25rem] max-h-[20rem] bg-gray-200 border flex py-5 rounded-4xl flex-col justify-center items-center">
                <h1 className="text-2xl mb-2 font-semibold">Community Alerts</h1>
                <div className="overflow-y-scroll w-[80%] flex flex-col items-center"
                style={{scrollbarWidth: "none"}}>
                    {AlertData.map((alert) => (
                        <div key={alert.id} className="bg-white my-2 py-2 px-4 text-black cursor-pointer
                        rounded-2xl w-[100%]">
                            <p className="text-sm">{alert.alert}</p>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}