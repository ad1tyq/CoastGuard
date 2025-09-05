import ReportForm from "@/components/client/Reports"
import FeedbackForm from "@/components/client/Feedback"
import CommunityAlerts from "@/components/client/CommunityAlerts"
import PersonalReports from "@/components/client/PersonalReports"
import FileUploader from "@/components/client/fileUploader"
export default function Page() {
    return (
        <div className="mt-30 mb-20 px-10 flex flex-col justify-center items-center gap-10">
            <h1 className="text-4xl font-semibold border-b-3 text-center w-[20rem] pb-2 border-blue-300/70">
            Citizen Portal</h1>
            <div className="flex gap-10">
                
                <div className="flex flex-col justify-center items-center gap-10">
                    <div className="flex gap-5">
                        <CommunityAlerts />
                        <PersonalReports />
                    </div>
                    <ReportForm />
                </div>
                <div className="flex justify-center -mt-38 items-center">
                    <FileUploader/>
                </div>
            </div>

            <FeedbackForm />
        </div>
    )
}