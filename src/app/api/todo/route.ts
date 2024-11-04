import { NextResponse } from 'next/server'
import db from '@/app/utils/db'

export async function GET () {
    const todos = await db.todo.findMany()
    return NextResponse.json({ data: todos })
}

export async function POST (request: Request) {
    const data = await request.json()
    const todo = await db.todo.create({ data })

    // do something with the data
    return NextResponse.json({ data: todo })
}