import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
       const videos = prisma.video.findMany({
            orderBy:{createdAt:"desc"}
        })
        return NextResponse.json(
            {messagge:"vedios fetch successfully",videos},
            {status:200},
        );
    } catch (error) {
        return NextResponse.json(
            {error:"Error while fetching videos"},
            {status:500}
        )
    }finally{
        await prisma.$disconnect()
    }
}
