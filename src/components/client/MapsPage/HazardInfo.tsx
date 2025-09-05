import { hazardInfo } from "../../../../data/hazardInfo"
interface types {
    location: string,
    currenthazard: string,
    alertlevel: string,
};
function InfoCard({ location, currenthazard, alertlevel }: types) {
    return (
        <div className="bg-white w-[17vw] flex flex-col px-5 py-2 rounded-2xl shadow-lg">
            <p className="font-semibold text-lg">{location}</p>
            <p>Current Hazard: {currenthazard}</p>
            <p>Alert Level: {alertlevel}</p>
        </div>
    )
}
export default function HazardInfo() {
    return (
        <div className="flex flex-col gap-2 items-center">
            <h1 className="font-semibold text-xl mb-2">Hazard Information</h1>
            <div className="flex flex-col gap-2 items-center h-[38rem] overflow-y-scroll"
            style={{scrollbarWidth: "none"}}>
                {hazardInfo.map((info, index) => (
                    <div key={index}>
                        <InfoCard location={info.location} currenthazard={info.currentHazard} alertlevel={info.alertLevel} />
                    </div>
                ))}
            </div>

        </div>
    )
}