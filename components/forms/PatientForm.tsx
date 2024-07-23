"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "../ui/form" 
import CustumeFormField from "../CustumeFormField"
import { SubmitButton } from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"


export enum FormFieldtype {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX='checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    RADIO = 'radio',
    SKELETON = 'skeleton'
}
 

 
const PatientForm = () => {
  const [isLoading,setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email:"",
      phone:""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof UserFormValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true)
  }

  return (
   
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Cuide da Sua Saúde Connosco</h1>
          <p className="text-dark-700">Agende a sua primeira consulta</p>
        </section>
        <CustumeFormField 
        control={form.control}
        fieldType={FormFieldtype.INPUT}
        name="name"
        label="Full name"
        placeholder="John Doe"
        iconSrc="/assets/icons/user.svg"
        iconAlt="user"
        />

      <CustumeFormField 
        control={form.control}
        fieldType={FormFieldtype.INPUT}
        name="email"
        label="Email"
        placeholder="felixmacarenco@gmail.com"
        iconSrc="/assets/icons/email.svg"
        iconAlt="email"
        />

      <CustumeFormField 
        control={form.control}
        fieldType={FormFieldtype.PHONE_INPUT}
        name="phone"
        label="Phone"
        placeholder="929374017"
        iconSrc="/assets/icons/phone.svg"
        iconAlt="phone"
        />
        
      <SubmitButton isLoading={isLoading}>Registrar-se</SubmitButton>

      </form>
    </Form>
  )
}

export default PatientForm