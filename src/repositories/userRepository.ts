import { prisma } from "../database.js";
import { UserData } from "../controllers/userController.js";


export async function register(data: UserData) {
   
   const user = await prisma.user.create({
        data:{
            firstName:data.firstName,
            lastName:data.lastName,
            phone:data.phone
        }
    })
    await prisma.$transaction(
        [
            prisma.address.create({
                data:{
                    street:data.street,
                    number:data.number,
                    city:data.city,
                    zipCode:data.zipCode,
                    userId:user.id
                }
            }),
            prisma.paymentMethod.create({
                data:{
                    owner:data.accountOwner,
                    iban:data.iban,
                    paymentDataId:data.paymentDataId,
                    userId:user.id,
                }})
        ]
    )
}