import {z} from 'zod'

export const UserFormValidation = z.object({
    name: z.string()
    .min(2,"Name must be at least 2 characters."),
    email:z.string().email("Inavlid email address"),
    phone:z.string().refine((phone)=>/^\+351\d{9}$/.test(phone),'Invalid phone Number')
    
  })