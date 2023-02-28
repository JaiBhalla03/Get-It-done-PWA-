import {PrismaClient} from "@prisma/client";

const client = globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV !== "production") globalThis.prima = client

export default client