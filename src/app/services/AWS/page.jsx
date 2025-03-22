"use client"
import Hero from "../../components/AWS/hero";
import AWSServices from "../../components/AWS/services";
import AWSOfferings from "../../components/AWS/AWSOfferings";
import AWSCloud from "../../components/AWS/AWSCloud";
import AWSPartners from "../../components/AWS/AWSPartners";
import { slideIn } from "../../Animations/common";
import UseCase from "@/app/components/AWS/usecase";
import { useEffect } from "react";

const AWS = () => {
    useEffect(() => {
        slideIn()
    }, [])
    return (
        <div className="sm:pt-[9rem] pt-[6rem] overflow-x-hidden w-[100vw]">
            <Hero />
            <AWSCloud />
            <AWSOfferings />
            <AWSPartners />
            <UseCase />
            <AWSServices />
        </div>
    );
}

export default AWS;