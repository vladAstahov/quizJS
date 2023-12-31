import { NextResponse } from "next/server";
// @ts-ignore
import prisma from "../../../../../lib/prisma";

export async function GET() {
    // @ts-ignore
    const promos = await prisma.promo.findMany()

    return NextResponse.json({
        data: promos
    })
}

export async function POST(req: Request) {
    const { quizId, limit, name } = await req.json() as {
        quizId: string
        limit: number
        name: string
    }

    // @ts-ignore
    const prismaPromo = await prisma.promo.create({
        data: {
            name,
            limit,
            quizId,
            passed: 0
        }
    })

    return NextResponse.json({
        id: prismaPromo.id
    })
}