import DashboardList from "@/app/dashboard/DashboardList";
import Board from "@/app/dashboard/board";
import LeftBarMenu from "@/components/LeftBarMenu/LeftBarMenu";

export default async function Main() {

    return (
        <div className='text-gray-900 flex h-full'>
            <LeftBarMenu/>
            <Board/>
        </div>
    );
}