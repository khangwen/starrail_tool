import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import BreadcrumbArea from "../components/breadcrumb/breadcrumb-area";
import brd_bg from '@/assets/img/bg/breadcrumb_bg02.jpg';
import brd_img from '@/assets/img/others/breadcrumb_img02.png';
import TournamentArea from "../components/tournaments/tournament-area";
import TournamentListArea from "../components/tournaments/tournament-list-area";

export const metadata: Metadata = {
    title: "Calculator • Imbibitor Mathematica",
};

export default function CalculatorPage() {
    return (
        <Wrapper>
            {/* header start */}
            <Header />
            {/* header end */}

            {/* main area start */}
            <main className="main--area">
                {/* breadcrumb area start */}
                <BreadcrumbArea title="CALCULATOR" subtitle="CALCULATOR" bg={brd_bg} brd_img={brd_img} />
                {/* breadcrumb area end */}

            </main>
            {/* main area end */}

            {/* footer start */}
            <Footer />
            {/* footer end */}
        </Wrapper>
    );
}
